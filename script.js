function openPopup(){
document.getElementById("popup").classList.add("active");
}

function closePopup(){
document.getElementById("popup").classList.remove("active");
}

const correctSound=document.getElementById("correctSound");
const wrongSound=document.getElementById("wrongSound");

const questions=[

{
question:"Giá trị hàng hóa do?",
options:[
"A. Cung cầu",
"B. Lao động",
"C. Tài nguyên",
"D. Công dụng"
],
answer:"B. Lao động"
},

{
question:"Tiền là gì?",
options:[
"A. Vật trao đổi",
"B. Hàng hóa đặc biệt",
"C. Kim loại",
"D. Tài sản"
],
answer:"B. Hàng hóa đặc biệt"
}

];

let pool=[];
let index=0;
let score=0;
let locked=false;

function startQuiz(){

const limit=parseInt(
document.getElementById("limit").value
);

pool=[...questions]
.sort(()=>Math.random()-0.5)
.slice(0,limit);

index=0;
score=0;

document.getElementById("start").style.display="none";
document.getElementById("quiz").style.display="block";

loadQuestion();

}

function loadQuestion(){

locked=false;

const q=pool[index];

document.getElementById("qCount").innerText=
"Câu "+(index+1)+"/"+pool.length;

document.getElementById("question").innerText=
q.question;

const optionsDiv=
document.getElementById("options");

optionsDiv.innerHTML="";

q.options
.sort(()=>Math.random()-0.5)
.forEach(opt=>{

const btn=document.createElement("div");

btn.className="option";

btn.innerText=opt;

btn.onclick=()=>{

if(locked) return;

locked=true;

if(opt===q.answer){

score++;

btn.classList.add("correct");

correctSound.currentTime=0;
correctSound.play();

}else{

btn.classList.add("wrong");
btn.classList.add("shake");

wrongSound.currentTime=0;
wrongSound.play();

}

document
.querySelectorAll(".option")
.forEach(o=>{
if(o.innerText===q.answer){
o.classList.add("correct");
}
});

setTimeout(()=>{

index++;

if(index<pool.length){

loadQuestion();

}else{

showResult();

}

},1000);

};

optionsDiv.appendChild(btn);

});

document.getElementById("bar").style.width=
(index/pool.length)*100+"%";

}

function showResult(){

document.getElementById("quiz").style.display="none";

document.getElementById("result").style.display="block";

document.getElementById("score").innerText=
score+" / "+pool.length;

}
