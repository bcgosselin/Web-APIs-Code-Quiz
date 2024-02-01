//Global Variable Section
var doc = document;
var startBtn = doc.querySelector("#start");
var countdown = doc.getElementById('timerDisplay');
var timer;
var questionIndex = 0;
var score = 0;
var sec = 30;

//Start Timer Fuction sharing Event Listener with hideHeader function

function startTimer() {
    timer = setInterval(function () {
        countdown.innerHTML = '00:' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            
			displayFinalScorePage();
        }
    }, 1000);
}

//function to hide header written in vanilla js

function hideHeader() {
    var hideIntro = doc.getElementById('intro');
    
	hideIntro.style.display = 'none';
    
	displayQuestion();
}

//added event listener parameter to function to handle user selected answers. function logs the score to the console, removes time from timer for incorrect answwer and calls for displayQuestion function

function userInput(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuestion = questions[questionIndex - 1];
    
	if (selectedAnswer === currentQuestion.correctAnswer) {
        score += 10;
    } else {
		sec -= 10;
	}
    
	displayQuestion();
}

//function to input the questionIndex array 1 by 1 in ascending order into the questionContainer element. utilized JQuery API to easliy call for the question array and to use the built in js map function to iterate the array. function then creates an array of buttons, converts the answers array into strings and then joins them together.

function displayQuestion() {
    var showQuestion = doc.getElementById('questionContainer');
    
	if (questionIndex < questions.length) {
        var currentQuestion = questions[questionIndex];
       
		showQuestion.innerHTML = `
            <div class= "qna">
                <p>${currentQuestion.question}</p>
                <div class="question">
                    <ul>
                        ${currentQuestion.answers.map(answer => `<li><button>${answer}</button></li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
		
        const questionLoop = doc.querySelectorAll(".qna");
        for (let i = 0; i < questionLoop.length; i++) {
			questionLoop[i].addEventListener("click", userInput);
    	}
		
		questionIndex++;
    
	} else {
        
		displayFinalScorePage();
    }
}

//function that clears the qna class, assigns HTML elements to questionContainer, sets the value of the user inputed initials, and utilizes jQuery click function to store the value of user input and score as strings via json.stringify into local storage.

function displayFinalScorePage() {
    clearInterval(timer); // Stop the timer
    $(".qna").empty();
    var initials = $("#initials").val();
    var showFinalPage = doc.getElementById('questionContainer');
    
	showFinalPage.innerHTML = `
        <div class="finalScore">
            <h1>Final Score</h1>
            <p>Your final score is: ${score}</p>
            <form id="scoreForm">
                Initials: <input type="text" id="initials" value="">
                <button type="button" onclick="submitScore()">Submit</button>
            </form>
        </div>
    `;

	// need to add a catch error for function submit score not being accessible in global after loading displayHighScorePage
	// index.html:1 Uncaught ReferenceError: submitScore is not defined at HTMLButtonElement.onclick (index.html:1:1)
	function submitScore() {
		const initialInput = doc.getElementById("initials");
		const initials = initialInput.value;
		const storedHighScores = JSON.parse(localStorage.getItem('highScores')) || [];

		storedHighScores.push({ initials: initials, score: score });
		localStorage.setItem('highScores', JSON.stringify(storedHighScores));

		
		displayHighScorePage();
	}

		$("button").click(function () {
			submitScore();
		});

}

//function that once again clears qna class, accesses the stringified localStorage data, converts inital and score back into objects then converts back to strings to be inputed in the html element li using jQuery. 

function displayHighScorePage() {
    $(".qna").empty();
    const storedHighScores = JSON.parse(localStorage.getItem('highScores'));

    if (storedHighScores) {
        var showHighScorePage = doc.getElementById('questionContainer');
        showHighScorePage.innerHTML = `
            <div class="highScore">
                <h1>High Score</h1>
                <ul>
                    ${storedHighScores.map(entry => `<li>${entry.initials}: ${entry.score}</li>`).join('')}
                </ul>
                <div><br></div>
                <button onclick="restart()">Restart</button>
                <button onclick="clearHighScores()">Clear High Scores</button>
            </div>
        `;
    } else {
        console.log("No high scores available.");
    }
}


//function to restart the timer

function restartTimer() {
    sec = 30;
    startTimer();
}

//function to restart application

function restart() {
    score = 0;
    questionIndex = 0;
    
	$(".qna").empty();
    restartTimer();
    
	displayQuestion();
}

//function to clear high score and restart quiz
function clearHighScores() {
    localStorage.removeItem('highScores');
    
	restart();
}

//event listener for the start button

startBtn.addEventListener("click", function (event) {
    startTimer();
    hideHeader();
});

//array of questions

var questions = [
    {
        'question': "Commonly used data types DO Not include:",
        'answers': ['strings', 'booleans', 'alerts', 'numbers'],
        'correctAnswer': 'alerts',
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
