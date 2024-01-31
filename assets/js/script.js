var doc = document;
var startBtn = doc.querySelector("#start");
var countdown = doc.getElementById('timerDisplay');
var questionContainer = doc.getElementById('questionContainer');
// var answerButton = doc.getElementsByClassName("question")

var timer;
var questionIndex = 0;

function startTimer() {
    var sec = 60;
    timer = setInterval(function() {
        countdown.innerHTML = '00:' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            // go to final score page or handle timer expiration
        }
    }, 1000);
}

function hideHeader() {
    var hideIntro = doc.getElementById('intro');
    hideIntro.style.display = 'none';
    displayQuestion();
}

function displayQuestion() {
    var showQuestion = doc.getElementById('questionContainer');
	// $("question").click(nextQuestion() {
    if (questionIndex < questions.length) {
        var currentQuestion = questions[questionIndex];
        showQuestion.innerHTML = `
		<p>${currentQuestion.question}</p>
		<div class="question">
				<ul>
					${currentQuestion.answers.map(answer => `<li><button>${answer}</button></li>`).join('')}
				</ul>
			</div>
        `;
        questionIndex++;
    } else {
        showFinalScore();
    }
// });
}

function showFinalScore() {
    // Logic to show the final score page
}

startBtn.addEventListener("click", function() {
    startTimer();
    hideHeader();
});

// answerButton.addEventListener("click", ());

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