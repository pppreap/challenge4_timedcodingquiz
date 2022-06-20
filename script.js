//declare variables
var startCountdown = document.getElementById("#timer")
var startTimer;
var stopTimer;
var resetTimer;
var startBtn = document.getElementById("start-btn")
var startCon = document.getElementById("strcon")
var qContainer = document.getElementById("#questions")


//pseudocoding start quiz triggers start countdown timer and first question to pop up 
function startQuiz() {
    startCon.style.display ="none";   
    function startCountdown() {
    startBtn.onclick = function(){
        if (qContainer.style.display !== "none") {
            qContainer.style.display = "none";
          } else {
            qContainer.style.display = "block";
          }
        };   
    }
    }
 



startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", startCountdown);

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

//declare event listeners for button
*/


