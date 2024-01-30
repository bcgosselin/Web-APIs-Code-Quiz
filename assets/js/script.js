var doc = document

var question = [{
	    'question' : "Commonly used data types DO Not include:",
	    'answers' : ['strings','booleans','alerts','numbers']
	},
    {
	    'question' : "The condition in an if / else statement is enclosed with _______.",
	    'answers' : ['quotes','curly brackets','parenthesis','square brackets']
	},
    {
	    'question' : "Arrays in a Javascript can be used too store",
	    'answers' : ['numbers and strings','other arrays','booleans','all of the above']
	},
    {
	    'question' : "String values must be enclosed within _______ when being assigned to variables",
	    'answers' : ['commas','curly brackers','quotes','parenthesis']
	},
	{
	    'question' : "A very useful tool used during development and debugging for printing content to the degugger is:",
	    'answers' : ['JavaScript','terminal/bash','for loops','console.log']
	},
]


function displayQuestion(){
	var questionEl = $('<h2>')
	questionEl.text(question[0].question);
/*need loop for question text (appendchild?)*/
    questions[0].answers.map((answer) => {
        $('<button>').text(answer);
    })
}

/*function hideText*/

/*function*/

/*function*/

/*function*/

var startBtn = doc.querySelector("#start");

startBtn.addEventListener("click", displayQuestion);