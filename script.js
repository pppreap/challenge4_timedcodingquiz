//declare variables to be used to access html elements
const start = document.getElementById("start-btn");
const timer = document.getElementById("timer");
const main = document.getElementById("container");
const startpage = document.getElementById("startpage");

//display time :0 at the start page by accessing element ID
timer.innerHTML = "Time: 0";


//variables for questions function
const qtopic = document.getElementById("questions");
const options = document.querySelector(".options");
const quiz = document.getElementById("quiz");

const op1 = document.querySelector(".op1");
const op2 = document.querySelector(".op2");
const op3 = document.querySelector(".op3");
const op4 = document.querySelector(".op4");

//array to hold all possible questions and answers as objects 
let questions = [

  {
  question: "Commonly used data types DO Not Include:", 
  op1 : " strings",  
  op2 : " booleans", 
  op3 : " alerts", 
  op4 : " numbers",
  correct: "3"
  },
  
  {
  question: "The condition in an if/else statement is enclosed with _____________.",
  op1 : "quotes", 
  op2 : "curly brackets", 
  op3 :"parenthesis", 
  op4 : "square brackets",
  correct: "3"
  },
  
  {
  question: "Arrays in JavaScript can be used to store ___________.",
  op1 : "numbers and strings",
  op2 : "Other arrays",
  op3 : "Boolean",
  op4 : "All of the above",
  correct: "4"
  },
  
  {
  question: "String values must be enclosed within ______ when being assigned to variables.",
  op1 : "Commas",
  op2 : "Curly brackets",
  Op3 : "Quotes",
  op4 : "Parenthesis",
  correct: "3"
  },
  
  {
  question: "A  very useful tool used during development and debugging for printing content to the debugger is:",
  op1 : "Javascript",
  op2 : "Terminal/bash",
  op3 : "For loops",
  op4 : "console.log",
  Correct: "4"
  },
  ];

const lastIndexQ = questions.length -1;
let startIndexQ = 0;

//function access questions to change elements 
function displayQ() {
  let q = questions[startIndexQ];
  qtopic.innerHTML = `<h2>${q.question}</h2>`;
  op1.innerHTML= "1." + q.op1;
  op2.innerHTML= "2." + q.op2;
  op3.innerHTML= "3." + q.op3;
  op4.innerHTML= "4." + q.op4;
  qtopic.setAttribute("style", "align-self:center; font-size: 40px;");
  op1.setAttribute("style","color:white;");
  op2.setAttribute("style","color:white;");
  op3.setAttribute("style","color:white;");
  op4.setAttribute("style","color:white;");
  document.getElementById("timer").value = "Time: " + 75 - count;
  count--; 
  
};

 //declare variables for timer function start timer at 75 seconds
 var count = 75;

//display timer : time remaining for quiz
function displayTimer() {
//timer countdown start using setInterval method
  countdown= setInterval(function(){
 //if timer reaches 0 seconds it stops the timer usign clearInterval
  if (count === 0) {
    console.log("Game is over");
    document.getElementById("timer").innerHTML = "Quiz is over";
    clearInterval(countdown); 
  } 
  //display countdown timer on application
  console.log(count);
  count;
  timer.innerHTML = "Time:" + count;
  document.getElementById("timer").value = "Time: " + 75 - count;

  count--; 
}, 1000); 
};

//click start button, start countdown timer, and first question to pop up 
function startQuiz() {
startpage.setAttribute("style", "display:none");
displayQ();
quiz.setAttribute("style", "display:block");
displayTimer();
};

//event listener to click of button
start.addEventListener("click", startQuiz);


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
