// Surprise button

document.getElementById('surpriseBtn').addEventListener('click', () => {

  alert("🌠 You deserve all the good in the universe, Ifeoluwa. Never forget how amazing you are. And just to mention, I'm still crushing on you i want t ask you out but I'm shy and all so I'll just say that your beauty makes me love you and if you like this, you'll probably let me in to find more things to love 🌠");

});

// Confetti effect

const canvas = document.getElementById("confetti-canvas");

const ctx = canvas.getContext("2d");

function resize() {

  canvas.width = window.innerWidth;

  canvas.height = window.innerHeight;

}

window.addEventListener('resize', resize);

resize();

let pieces = [];

for(let i=0;i<150;i++){

  pieces.push({

    x:Math.random()*canvas.width,

    y:Math.random()*canvas.height,

    r:Math.random()*6+4,

    c:`hsl(${Math.random()*360},100%,70%)`,

    s:Math.random()*3+1

  });

}

function update(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  pieces.forEach(p=>{

    ctx.beginPath();

    ctx.arc(p.x,p.y,p.r,0,2*Math.PI);

    ctx.fillStyle=p.c; ctx.fill();

    p.y += p.s;

    if(p.y>canvas.height) p.y=0;

  });

  requestAnimationFrame(update);

}

update();