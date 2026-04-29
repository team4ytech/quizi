// Database imports - all subjects connected
let allQuestions = [];

// Load all databases
function loadAllDatabases() {
    allQuestions = [];
    
    // KTCT - Kinh tế chính trị
    if (typeof questionsKTCT !== 'undefined') {
        allQuestions = allQuestions.concat(normalizeQuestions(questionsKTCT, 'KTCT'));
    }
    
    // LSD - Lịch sử Đảng
    if (typeof questionsLSD !== 'undefined') {
        allQuestions = allQuestions.concat(normalizeQuestions(questionsLSD, 'LSD'));
    }
    
    // TTHCM - Tư tưởng Hồ Chí Minh
    if (typeof questionsTTHCM !== 'undefined') {
        allQuestions = allQuestions.concat(normalizeQuestions(questionsTTHCM, 'TTHCM'));
    }
    
    // Triet - Triết học
    if (typeof questionsTriet !== 'undefined') {
        allQuestions = allQuestions.concat(normalizeQuestions(questionsTriet, 'Triet'));
    }
    
    // XHCN - Xã hội chí nghĩa
    if (typeof questionsCNXH !== 'undefined') {
        allQuestions = allQuestions.concat(normalizeQuestions(questionsCNXH, 'XHCN'));
    }
    
    // PLDC - Pháp luật đại cương
    if (typeof questionsPLDC !== 'undefined') {
        allQuestions = allQuestions.concat(normalizeQuestions(questionsPLDC, 'PLDC'));
    }
}

// Normalize questions to consistent format
function normalizeQuestions(questionsArray, subject) {
    return questionsArray.map(q => {
        // Handle object format {A: "...", B: "...", C: "...", D: "..."}
        if (q.options && typeof q.options === 'object' && !Array.isArray(q.options)) {
            const optionsArray = [];
            if (q.options.A) optionsArray.push("A. " + q.options.A);
            if (q.options.B) optionsArray.push("B. " + q.options.B);
            if (q.options.C) optionsArray.push("C. " + q.options.C);
            if (q.options.D) optionsArray.push("D. " + q.options.D);
            
            // Handle answer as letter (A, B, C, D) or full text
            let answerText = q.answer;
            if (q.answer === 'A' || q.answer === 'A.') answerText = optionsArray[0];
            else if (q.answer === 'B' || q.answer === 'B.') answerText = optionsArray[1];
            else if (q.answer === 'C' || q.answer === 'C.') answerText = optionsArray[2];
            else if (q.answer === 'D' || q.answer === 'D.') answerText = optionsArray[3];
            
            return {
                id: q.id,
                question: q.question,
                options: optionsArray,
                answer: answerText,
                subject: subject
            };
        }
        // Already array format
        return {...q, subject: subject};
    });
}

// Initialize databases on load
loadAllDatabases();

// Popup functions
function openPopup(){
    document.getElementById("popup").classList.add("active");
}

function closePopup(){
    document.getElementById("popup").classList.remove("active");
}

// Sound effects
const correctSound=document.getElementById("correctSound");
const wrongSound=document.getElementById("wrongSound");

// Confetti animation
function launchConfetti(){
    for(let i=0;i<25;i++){
        const confetti=document.createElement("div");
        confetti.className="confetti";
        confetti.style.left=Math.random()*100+"vw";
        confetti.style.background="hsl("+Math.random()*360+",100%,50%)";
        document.body.appendChild(confetti);
        setTimeout(()=>{
            confetti.remove();
        },1000);
    }
}

// Exam mode variables
let examMode = false;
let examTimer = null;
let examTimeLeft = 0;

// Toggle exam mode
function toggleExamMode() {
    const checkbox = document.getElementById("examMode");
    const timeGroup = document.getElementById("examTimeGroup");
    examMode = checkbox.checked;
    timeGroup.style.display = examMode ? "block" : "none";
}

// Get questions by subject
function getQuestionsBySubject(subject) {
    return allQuestions.filter(q => q.subject === subject);
}

// Shuffle array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Variables
let pool = [];
let index = 0;
let score = 0;
let locked = false;
let userAnswers = []; // Store user's answers for navigation

// Start quiz
function startQuiz(){
    const subject = document.getElementById("subject").value;
    const limit = parseInt(document.getElementById("limit").value);
    examMode = document.getElementById("examMode").checked;
    
    // Get questions for selected subject
    let subjectQuestions = getQuestionsBySubject(subject);
    
    // If no questions for subject, use all
    if (subjectQuestions.length === 0) {
        subjectQuestions = [...allQuestions];
    }
    
    // Random selection
    pool = shuffleArray([...subjectQuestions]).slice(0, Math.min(limit, subjectQuestions.length));
    
    // If not enough questions, fill from other subjects
    if (pool.length < limit) {
        const otherQuestions = allQuestions.filter(q => q.subject !== subject);
        const needed = limit - pool.length;
        pool = pool.concat(shuffleArray([...otherQuestions]).slice(0, needed));
    }
    
    // Initialize user answers array
    userAnswers = new Array(pool.length).fill(null);
    
    index = 0;
    score = 0;
    
    document.getElementById("start").style.display="none";
    document.getElementById("quiz").style.display="block";
    
    // Show timer if exam mode
    const timerDiv = document.getElementById("timer");
    const navButtons = document.getElementById("navButtons");
    
    if (examMode) {
        const examTime = parseInt(document.getElementById("examTime").value);
        examTimeLeft = examTime * 60;
        timerDiv.style.display = "flex";
        navButtons.style.display = "none"; // Hide nav in exam mode
        startTimer();
    } else {
        timerDiv.style.display = "none";
        navButtons.style.display = "flex"; // Show nav in normal mode
    }
    
    loadQuestion();
}

// Timer function
function startTimer() {
    updateTimerDisplay();
    examTimer = setInterval(() => {
        examTimeLeft--;
        updateTimerDisplay();
        
        if (examTimeLeft <= 0) {
            clearInterval(examTimer);
            alert("⏰ Hết thời gian! Bài kiểm tra kết thúc.");
            showResult();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(examTimeLeft / 60);
    const seconds = examTimeLeft % 60;
    document.getElementById("timeDisplay").innerText = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Load question
function loadQuestion(){
    locked = false;
    
    const q = pool[index];
    
    document.getElementById("qCount").innerText = 
        "Câu " + (index+1) + "/" + pool.length;
    
    document.getElementById("question").innerText = q.question;
    
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    // Shuffle options (only for first load, preserve order for navigation)
    const shuffledOptions = examMode ? shuffleArray([...q.options]) : q.options;
    
    shuffledOptions.forEach(opt => {
        const btn = document.createElement("div");
        btn.className = "option";
        btn.innerText = opt;
        
        // Check if user already answered this question
        if (userAnswers[index] === opt) {
            if (opt === q.answer) {
                btn.classList.add("correct");
            } else {
                btn.classList.add("wrong");
            }
        }
        
        btn.onclick = () => {
            if(locked) return;
            locked = true;
            
            // Store user's answer
            userAnswers[index] = opt;
            
            if(opt === q.answer){
                score++;
                btn.classList.add("correct");
                btn.classList.add("correct-animate");
                correctSound.play();
                launchConfetti();
            } else {
                btn.classList.add("wrong");
                btn.classList.add("shake");
                btn.classList.add("wrong-animate");
                wrongSound.play();
            }
            
            // Show correct answer
            document.querySelectorAll(".option").forEach(o => {
                if(o.innerText === q.answer){
                    o.classList.add("correct");
                }
            });
            
            setTimeout(() => {
                index++;
                if(index < pool.length){
                    loadQuestion();
                } else {
                    if(examTimer) clearInterval(examTimer);
                    showResult();
                }
            }, 1000);
        };
        
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById("bar").style.width = 
        ((index) / pool.length) * 100 + "%";
}

// Navigate to previous question
function prevQuestion() {
    if (index > 0) {
        index--;
        loadQuestion();
    }
}

// Navigate to next question
function nextQuestion() {
    if (index < pool.length - 1) {
        index++;
        loadQuestion();
    }
}

// Show result
function showResult(){
    if(examTimer) clearInterval(examTimer);
    
    document.getElementById("quiz").style.display="none";
    document.getElementById("result").style.display="block";
    
    // Calculate score from userAnswers
    let finalScore = 0;
    pool.forEach((q, i) => {
        if (userAnswers[i] === q.answer) {
            finalScore++;
        }
    });
    
    const percentage = (finalScore / pool.length) * 100;
    let grade = "";
    let gradeColor = "";
    
    if (percentage >= 90) {
        grade = "Xuất sắc 🎉";
        gradeColor = "#22c55e";
    } else if (percentage >= 80) {
        grade = "Giỏi 👍";
        gradeColor = "#3b82f6";
    } else if (percentage >= 70) {
        grade = "Khá 👏";
        gradeColor = "#f59e0b";
    } else if (percentage >= 60) {
        grade = "Trung bình 📊";
        gradeColor = "#8b5cf6";
    } else {
        grade = "Cần cố gắng 💪";
        gradeColor = "#ef4444";
    }
    
    document.getElementById("score").innerHTML = 
        `<div style="font-size: 2rem; color: ${gradeColor};">${finalScore} / ${pool.length}</div>
         <div style="font-size: 1.2rem; margin-top: 10px;">${grade}</div>
         <div style="font-size: 0.9rem; color: #666; margin-top: 5px;">${Math.round(percentage)}% đúng</div>`;
}

// Show review of all questions
function showReview() {
    document.getElementById("result").style.display = "none";
    document.getElementById("review").style.display = "block";
    
    const reviewList = document.getElementById("reviewList");
    reviewList.innerHTML = "";
    
    pool.forEach((q, i) => {
        const userAnswer = userAnswers[i];
        const isCorrect = userAnswer === q.answer;
        
        const reviewItem = document.createElement("div");
        reviewItem.className = "review-item";
        reviewItem.innerHTML = `
            <div class="review-header">
                <span class="review-number">Câu ${i + 1}</span>
                <span class="review-status ${isCorrect ? 'correct' : 'wrong'}">
                    ${isCorrect ? '✓ Đúng' : '✗ Sai'}
                </span>
            </div>
            <div class="review-question">${q.question}</div>
            <div class="review-options">
                ${q.options.map(opt => {
                    let optClass = "review-option";
                    if (opt === q.answer) {
                        optClass += " correct-answer";
                    }
                    if (opt === userAnswer) {
                        optClass += userAnswer === q.answer ? " user-correct" : " user-wrong";
                    }
                    return `<div class="${optClass}">${opt}</div>`;
                }).join('')}
            </div>
            ${!userAnswer ? '<div class="review-skipped">⚠️ Không trả lời</div>' : ''}
        `;
        
        reviewList.appendChild(reviewItem);
    });
}

// Back to result
function backToResult() {
    document.getElementById("review").style.display = "none";
    document.getElementById("result").style.display = "block";
}
