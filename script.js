:root{
--primary:#ff512f;
--secondary:#dd2476;
--glass:rgba(255,255,255,0.95);
}

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:'Inter',Arial,sans-serif;
min-height:100vh;
background:linear-gradient(135deg,#ff512f,#f09819);
display:flex;
justify-content:center;
align-items:center;
padding:15px;
}

.quiz-container{
width:100%;
max-width:520px;
background:var(--glass);
border-radius:20px;
padding:25px;
box-shadow:0 15px 40px rgba(0,0,0,0.2);
}

.header{
text-align:center;
margin-bottom:20px;
}

.logo{
font-size:2rem;
font-weight:800;
background:linear-gradient(to right,#ff512f,#dd2476);
background-clip:text;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

.tagline{
font-size:0.85rem;
color:#666;
margin-top:4px;
}

.user{
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:20px;
}

.click-text{
font-weight:bold;
color:var(--primary);
margin-bottom:8px;
}

.avatar-btn img{
width:70px;
height:70px;
border-radius:50%;
object-fit:cover;
cursor:pointer;
transition:0.3s;
}

.avatar-btn img:hover{
transform:scale(1.1);
}

.setup-card{
background:#f8fafc;
padding:20px;
border-radius:15px;
}

.input-group{
margin-bottom:20px;
}

label{
font-size:0.9rem;
display:block;
margin-bottom:6px;
}

select{
width:100%;
padding:12px;
border-radius:10px;
border:1px solid #ddd;
}

.progress-container{
height:8px;
background:#eee;
border-radius:20px;
margin-bottom:15px;
overflow:hidden;
}

.progress-bar{
height:100%;
width:0%;
background:linear-gradient(90deg,#ff512f,#dd2476);
transition:0.5s;
}

.question{
font-size:1.1rem;
margin-bottom:15px;
}

.options{
display:grid;
gap:10px;
}

.option{
padding:14px;
border-radius:12px;
cursor:pointer;
font-weight:600;
color:white;
background:linear-gradient(270deg,#f9d423,#fc4a1a,#ff512f,#dd2476);
background-size:600% 600%;
animation:moveGradient 8s ease infinite;
transition:0.25s;
}

.option:hover{
transform:scale(1.05);
}

.correct{
background:#22c55e !important;
}

.wrong{
background:#ef4444 !important;
}

@keyframes shake{
0%{transform:translateX(0)}
25%{transform:translateX(-5px)}
50%{transform:translateX(5px)}
75%{transform:translateX(-5px)}
100%{transform:translateX(0)}
}

.shake{
animation:shake 0.4s;
}

.main-btn{
width:100%;
padding:14px;
border-radius:12px;
border:none;
font-weight:700;
cursor:pointer;
color:white;
background:linear-gradient(270deg,#ff512f,#dd2476,#f9d423,#fc4a1a);
background-size:600% 600%;
animation:moveGradient 6s ease infinite;
}

.main-btn:hover{
transform:scale(1.05);
}

@keyframes moveGradient{
0%{background-position:0% 50%;}
50%{background-position:100% 50%;}
100%{background-position:0% 50%;}
}

.result{
text-align:center;
}

.popup-overlay{
position:fixed;
inset:0;
background:rgba(0,0,0,0.6);
display:flex;
align-items:center;
justify-content:center;
visibility:hidden;
opacity:0;
transition:0.3s;
}

.popup-overlay.active{
visibility:visible;
opacity:1;
}

.popup-content{
background:#fff;
padding:40px;
border-radius:28px;
max-width:500px;
width:95%;
text-align:center;
}

.contact-item{
background:#f8fafc;
padding:12px;
border-radius:16px;
margin-bottom:10px;
}

.member-name{
font-weight:800;
display:block;
margin-bottom:5px;
}

@media(max-width:500px){

.quiz-container{
padding:18px;
}

.option{
padding:12px;
font-size:0.9rem;
}

.logo{
font-size:1.6rem;
}

}
