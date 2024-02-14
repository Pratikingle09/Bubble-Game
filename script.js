var timer = 60;
var score = 0;
var hit = 0;
document.getElementById('highscore').innerText=localStorage.getItem('highScore');

const incScore=()=>{
    score+=10;
    document.getElementById('score').innerText=score;
}
const generateHit=()=>{
    hit = Math.floor(Math.random()*10);
    document.getElementById('hit').innerText=hit;
}

const showBubble=()=>{
    var bubbles = '';
for(var i=0;i<133;i++)
{
    const Rn =Math.floor(Math.random()*10)
    bubbles += `<div class="bubble">${Rn}</div>`
}
document.getElementById('bpan').innerHTML=bubbles;
}

const runTimer = ()=>{
   var timeint = setInterval(()=>{
    if(timer>0)
    {
        timer--;
        document.getElementById('timer').innerText=timer;
    }
    else{
        clearInterval(timeint)
        document.getElementById('bpan').innerHTML=`<div id="final"><h1>Game Over</h1><h2 style="margin-left:30px ;"> Score: ${score}</h2></div>`
    }
    }, 1000)
}
document.getElementById('bpan').addEventListener('click',(details)=>{
    const value = Number(details.target.textContent)
    if(hit===value)
    {
        incScore();
        showBubble();
        generateHit();
    }
})



document.getElementById('again').addEventListener('click',()=>{
    if(localStorage.getItem('highScore')<score)
    JSON.stringify(localStorage.setItem('highScore',score))
    location.reload()
    window.onload = checkLocalStorage;
})

showBubble();
generateHit()
runTimer();
