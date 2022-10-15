//declare variables to be used to access html elements
const start = document.getElementById("start-btn");
const timer = document.getElementById("timer");
const main = document.getElementById("container");
const startpage = document.getElementById("startpage");
const resultpage = document.getElementById("resultpage");
const highscoreshow = document.getElementById("scores-btn");
const back = document.getElementById("goback-btn");
const submit= document.getElementById("submit-btn");
const score = document.getElementById("score");

//display time :0 at the start page by accessing element ID
timer.innerHTML = "Time: 0";

//variables for questions function
const qtopic = document.getElementById("questions");
const options = document.querySelector(".options");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const evaluate =document.querySelector(".evaluate");
const message= document.querySelector(".message");


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
  correct: "op3"
  },
  {
  question: "The condition in an if/else statement is enclosed with _____________.",
  op1 : "quotes", 
  op2 : "curly brackets", 
  op3 :"parenthesis", 
  op4 : "square brackets",
  correct: "op3"
  },
  {
  question: "Arrays in JavaScript can be used to store ___________.",
  op1 : "numbers and strings",
  op2 : "Other arrays",
  op3 : "Boolean",
  op4 : "All of the above",
  correct: "op4"
  },
  {
  question: "String values must be enclosed within ______ when being assigned to variables.",
  op1 : "Commas",
  op2 : "Curly brackets",
  Op3 : "Quotes",
  op4 : "Parenthesis",
  correct: "op3"
  }, 
  {
  question: "A  very useful tool used during development and debugging for printing content to the debugger is:",
  op1 : "Javascript",
  op2 : "Terminal/bash",
  op3 : "For loops",
  op4 : "console.log",
  correct: "op4"
  },
  ];

const totalQ = questions.length-1; 
let startIndexQ = 0;
let q = questions[startIndexQ];


//function access questions to change elements 
function displayQ() {
  qtopic.innerHTML = q.question;
  op1.innerHTML= "1." + q.op1;
  op2.innerHTML= "2." + q.op2;
  op3.innerHTML= "3." + q.op3;
  op4.innerHTML= "4." + q.op4;
  qtopic.setAttribute("style", "align-self:center; font-size: 40px;");
  op1.setAttribute("style","color:white;");
  op2.setAttribute("style","color:white;");
  op3.setAttribute("style","color:white;");
  op4.setAttribute("style","color:white;");
   
};

function showResult(option) {
   //evaluate selection  based option and correct corresponding to question number
  //condition if 
  if (option == q.correct) {
    console.log("Correct Answer");
    correctAnswer();
  } else {
    console.log("Wrong answer!!");
    wrongAnswer();
  }
};

function correctAnswer () {
  totalScore += 20;
    if ( startIndexQ == totalQ) {
    console.log("No more questions!");
    endQuiz();
  } else {
  console.log(q);
  message.innerHTML="Correct!";
  message.setAttribute("style","color:gray; font-size: 40px;"); 
  //renders next question in array
  startIndexQ++;
  q = questions[startIndexQ];
  displayQ();
  }
};

function wrongAnswer() {
    if (startIndexQ == totalQ) {
    console.log("No more questions!");
    endQuiz();
    } else {
  message.innerHTML="Wrong!";
  message.setAttribute("style","color:gray; font-size: 40px;");
  startIndexQ++;
  q = questions[startIndexQ];
  displayQ();
    }
  count -=10;
  timer.innerHTML = "Time" + count;
};

 //declare variables for timer function start timer at 75 seconds
 var count = 75;


//display timer : time remaining for quiz
function displayTimer() {
//timer countdown start using setInterval method
  countdown= setInterval(function(){
  if (count === 0) {
    console.log("Game is over");
    document.getElementById("timer").innerHTML = "Quiz is over";
    clearInterval(countdown); 
    timer.innerHTML = "";
  } 
  //display countdown timer on application
  // console.log(count);
  count;
  timer.innerHTML = "Time:" + count;
  document.getElementById("timer").value = "Time: " + 75 - count;
  count--; 
}, 1000); 
};

//click start button, start countdown timer, and first question to pop up , evaluate selection of answer
function startQuiz() {
startpage.setAttribute("style", "display:none");
displayQ();
quiz.setAttribute("style", "display:block");
resultpage.setAttribute("style", "display:none");
displayTimer();
};

var totalScore = 0;

function endQuiz() {
  timer.setAttribute("style", "display:none");
  // startpage.setAttribute("style", "display:none");
  quiz.setAttribute("style", "display:none");
  resultpage.setAttribute("style","color:black; font-size: 20px; display:''");
  score.innerHTML = "Your final score is: " + totalScore++;

};







//event listener to click of button
start.addEventListener("click", startQuiz);
//selection of options button on click
op1.addEventListener("click", function() {
  return showResult('op1');
});
op2.addEventListener("click", function() {
  return showResult('op2');
});
op3.addEventListener("click", function() {
  return showResult('op3');
});
op4.addEventListener("click", function() {
  return showResult('op4');
});


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
