gamePattern = [];
userPattern = [];

btnclrs = ["red","blue","green","yellow"];

var fl=false;
var level=0;
var idx=0;

document.addEventListener("keydown",() =>{
    if(fl===true) return;
    fl=true;
    nextSeq();
});

function nextSeq(){
    level++;
    document.querySelector("h1").textContent="Level "+level;
    var num=Math.floor(Math.random()*4);
    var randomChosenColor=btnclrs[num];
    gamePattern.push(randomChosenColor);
    autoFlash(randomChosenColor);
}

for(var i=0;i<document.querySelectorAll(".btn").length;i++)
{
    document.querySelectorAll(".btn")[i].addEventListener("click",(e) => {
        var userChosenColor = e.target.id;
        clickFlash(userChosenColor);
        
        // console.log(gamePattern);
        if(userChosenColor!==gamePattern[idx])
        {
            var au = new Audio("sounds/wrong.mp3");
            au.play();
            wrongAns();
        }
        idx++;
        if(idx===gamePattern.length)
        {
            idx=0;
            nextSeq();
        }        
    });
}

function autoFlash(col)
{

    var aud = new Audio("sounds/"+col+".mp3");
    aud.play();

    document.querySelector("."+col).classList.add("pressedd");
    setTimeout(function(){document.querySelector("."+col).classList.remove("pressedd");},1000);
}

function clickFlash(col)
{

    var aud = new Audio("sounds/"+col+".mp3");
    aud.play();

    document.querySelector("."+col).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+col).classList.remove("pressed");},100);
}


function wrongAns(){
    alert("Game Over, Refresh to play again!!");
}