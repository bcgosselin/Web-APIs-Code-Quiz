var doc = document
var startBtn = doc.querySelector("#start");

var question = [
    {
        'question': "Commonly used data types DO Not include:",
        'answers': ['strings', 'booleans', 'alerts', 'numbers'],
        'correctAnswer': 'alerts'
    },
    {
        'question': "The condition in an if / else statement is enclosed with _______.",
        'answers': ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        'correctAnswer': 'curly brackets'
    },
    {
        'question': "Arrays in a Javascript can be used to store",
        'answers': ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        'correctAnswer': 'all of the above'
    },
    {
        'question': "String values must be enclosed within _______ when being assigned to variables",
        'answers': ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        'correctAnswer': 'quotes'
    },
    {
        'question': "A very useful tool used during development and debugging for printing content to the debugger is:",
        'answers': ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        'correctAnswer': 'console.log'
    },
];


//function startTimer
//timer start at 60 seconds paired with start button
//if/else condition that says if q is right you get 10 points if wrong lopse 10 seconds from timer
var timer;
var countdown = doc.getElementById('timerDisplay')

function startTimer() {
	var sec = 60;
	timer = setInterval(startTimer=> {
		countdown.innerHTML = '00:' +sec;
		sec --;
	}, 1000)
}

//function displayQuestion
//must hide header and display question container

//function finalScore
//access and pull if condition

//function highScore
//store finalScore function data in local storage

startBtn.addEventListener("click", startTimer)