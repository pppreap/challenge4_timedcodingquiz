//declare variables to be used to access html elements
var timeEl = document.getElementById("timer");
var scoreEl = document.getElementById("scores-btn");
var startBtn = document.getElementById("start-btn");
var mainEl = document.getElementById("container");
var startpageEl = document.getElementById("startpage");

//display time :0 at the start page by accessing element ID
timeEl.innerHTML = "Time: 0";

//start countdown timer and first question to pop up 
function startQuiz () {
startpageEl.setAttribute("style", "display:none");
startTimer;

//declare variables for timer function start timer at 75 seconds
var count = 75;
var startTimer;

countdown = setInterval(function(){
  console.log(count);
  count--;
  timeEl.innerHTML = "Time:" + count;
 
  if (count === 0) {
    console.log("Game is over");
    document.getElementById("timer").innerHTML = "Quiz is over";
    clearInterval(countdown); 
  }
  document.getElementById("timer").value = "Time: " + 75 - count;
  count--; 
}, 1000);
}


//event listener to click of button
startBtn.addEventListener("click", startQuiz);



/*
start timer function
-- decrement time
function start question #1
loop for if else
if right next question
function nextquestion

if wrong 
function minus 10 sec from timer
next question
function nextquestion

function gameOver
alert page all done
function enter initials input

function high score displays
function go back (button)
click event start Quiz or  to front page?
function to clearhighscore (button)
click event to 

declare event listeners for button
*/
