let currentPool = [];
let currentIndex = 0;
let score = 0;
let isProcessing = false;

// Hàm trộn mảng (Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showPopup() {
    document.getElementById('popup').classList.add('active');
}

function startQuiz() {
    // 1. Lấy thông tin từ giao diện
    const subjectSelect = document.getElementById('subject');
    const limitInput = document.getElementById('question-limit');
    
    const selectedSubject = subjectSelect.value;
    const limit = limitInput ? parseInt(limitInput.value) : 20;

    // 2. Logic chọn nguồn dữ liệu (Mapping)
    let dataSource;
    switch (selectedSubject) {
        case 'lsd':
            dataSource = (typeof questionsLSD !== 'undefined') ? questionsLSD : null;
            break;
        case 'cnxh':
            dataSource = (typeof questionsCNXH !== 'undefined') ? questionsCNXH : null;
            break;
        case 'triet':
            dataSource = (typeof questionsTriet !== 'undefined') ? questionsTriet : null;
            break;
        case 'tthcm':
            dataSource = (typeof questionsHCM !== 'undefined') ? questionsHCM : null;
            break;
        case 'ktct':
            dataSource = (typeof questionsKTCT !== 'undefined') ? questionsKTCT : null;
            break;    
        default:
            dataSource = null;
    }

    // 3. Kiểm tra nếu không tìm thấy dữ liệu
    if (!dataSource || dataSource.length === 0) {
        alert("Lỗi: Không tìm thấy dữ liệu câu hỏi cho môn này. Vui lòng kiểm tra lại file database!");
        return;
    }

    // 4. Xử lý trộn và cắt danh sách theo giới hạn (limit)
    const shuffled = shuffleArray([...dataSource]); // Sao chép mảng để không làm hỏng mảng gốc
    currentPool = shuffled.slice(0, limit);
    
    // Reset các biến trạng thái
    currentIndex = 0;
    score = 0;
    userAnswers = {}; // Lưu câu trả lời của người dùng

    // 5. Chuyển màn hình
    document.getElementById('popup').classList.remove('active');
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    isProcessing = false;
    const q = currentPool[currentIndex];
    
    // Cập nhật tiến độ và câu hỏi
    const progress = (currentIndex / currentPool.length) * 100;
    document.getElementById('bar').style.width = `${progress}%`;
    document.getElementById('q-count').innerText = `Câu ${currentIndex + 1}/${currentPool.length}`;
    document.getElementById('score-live').innerText = `Điểm: ${score}`;
    document.getElementById('question-display').innerText = q.question;
    document.getElementById('feedback').innerHTML = "";
    
    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";
    
    // KIỂM TRA: Nếu options là Mảng (Array)
    if (Array.isArray(q.options)) {
        q.options.forEach(opt => {
            createOptionButton(grid, opt, opt);
        });
    } 
    // KIỂM TRA: Nếu options là Đối tượng (Object {A:.., B:..})
    else {
        for (let key in q.options) {
            const optText = `${key}. ${q.options[key]}`;
            // Ở đây quan trọng: selected sẽ là key (A, B, C...) để so khớp với q.answer
            createOptionButton(grid, optText, key); 
        }
    }
}

// Hàm phụ để tạo nút tránh lặp code
function createOptionButton(container, text, value) {
    const btn = document.createElement('button');
    btn.className = "option-btn";
    btn.innerText = text;
    btn.onclick = () => checkAnswer(btn, value);
    container.appendChild(btn);
}
function checkAnswer(btn, selected) {
    if (isProcessing) return;
    isProcessing = true;
    
    const q = currentPool[currentIndex];
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);
    
    if (selected === q.answer) {
        score++;
        btn.classList.add('correct');
        document.getElementById('feedback').innerHTML = `<p style="color:var(--success); margin-top:15px; font-weight:600;"><i class="fas fa-check-circle"></i> Chính xác!</p>`;
    } else {
        btn.classList.add('wrong');
        // Tìm và đánh dấu câu đúng
        allBtns.forEach(b => {
            if (b.innerText === q.answer) b.classList.add('correct');
        });
        document.getElementById('feedback').innerHTML = `<p style="color:var(--danger); margin-top:15px; font-weight:600;"><i class="fas fa-times-circle"></i> Sai rồi! Đáp án là: ${q.answer}</p>`;
    }

    setTimeout(() => {
        currentIndex++;
        if (currentIndex < currentPool.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 2000); // Đợi 2 giây để người dùng xem đáp án
}

function showResult() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    
    document.getElementById('final-score').innerText = `${score}/${currentPool.length}`;
    
    const percent = (score / currentPool.length) * 100;
    let msg = "";
    if (percent >= 80) msg = "Tuyệt vời! Bạn là một chuyên gia lịch sử.";
    else if (percent >= 50) msg = "Khá tốt! Hãy tiếp tục phát huy.";
    else msg = "Bạn cần ôn tập kỹ hơn về Lịch sử Đảng.";
    
    document.getElementById('rank-msg').innerText = msg;
}