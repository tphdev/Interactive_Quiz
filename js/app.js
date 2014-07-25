
$(document).ready(function(){
	
//------------------
//-----The Quiz(Arrays)-----
//------------------

var quizQuestion = [
	"Which of these is a cruciferous vegetable?" 
	, "Which of these fish is high in vitamin D and omega-3 fatty acids that protect your heart?"
	, "Which of these nuts has the highest antioxidant content"
	, "Which of these foods contains flavonol?"
	, "Which of these grains is considered a complete protein?"
]

var answerKey = [
	"Broccoli"
	, "Salmon"
	, "Walnuts"
	, "Chocolate"
	, "Quinoa"
]

var answerList1 = [
	"Tomato"
	, "Eggplant"
	, "Broccoli"
	, "Cabbage"
]

var answerList2 = [
	"Salmon"
	, "Swordfish"
	, "Shrimp"
	, "Tuna"
]

var answerList3 = [
	"Pinenuts"
	, "Walnuts"
	, "Almonds"
	, "Peanuts"
]

var answerList4 = [
	"Chocolate"
	, "Milk"
	, "Avocado"
	, "Cinnamon"
]

var answerList5 = [
	"Brown Rice"
	, "Quinoa"
	, "Chickpeas"
	, "Bulgur Wheat"
]

var answerMasterList = [
	answerList1
	, answerList2
	, answerList3
	, answerList4
	, answerList5
]


//-------------------
//-----CSS/HTML Selectors----
//--------------------------

var $quizQuestionH2 = $('.quiz-question h2');
var $questionNum = $('.question-num li')
var $answers = $('.user-option');
var $answerExpl = $('.answer-expl');
var $answerList = $('.answer-menu');
var $answerButton =  $('.answer-menu .user-answer');
var $nextQuestion = $('.next-question');
var $userScoreTally = $('.user-score-correct')
var $userScoreDenom = $('.user-score-total')


//--------------------------
//------Quiz Programming----
//--------------------------

//set index for  quiz question
var qCounter = 0
var uScore = 0
var qsAsked = 0

//populate initial quiz question <h2>
$quizQuestionH2.text(quizQuestion[qCounter]);

//populate initial quiz answer-options
for(i=0;i<4;i++){	
	$answers.eq(i).text(answerMasterList[qCounter][i]);
	}

//when user selects answer, evaluate if answer is correct
$answerList.on("click", "button", function(){
	//disable the buttons	
	$answerList.find('.user-option').attr('disabled', true)

	//add to the total-questions-asked denominator
	qsAsked++
	$userScoreDenom.text(qsAsked)

	//evaluate the user's answer
	if($(this).text()===answerKey[qCounter]){
		$(this).css("background", 'green');
		uScore++
		$userScoreTally.text(uScore)
	} else{
		$(this).css("background", 'red');
	}

	console.log($(this).text())
	console.log(answerKey[qCounter])

	$nextQuestion.fadeIn(300);
})



$nextQuestion.on("click", function(){
//reset buttons format
	$answerList.find('.user-option').attr('disabled', false)
	$answerList.find('button').css('background', 'rgba(188, 200, 166, .7)')

	//in the header, remove highlight class on question-number and apply class to next question-number
	$questionNum
		.eq(qCounter)
		.removeClass('current-question')
		.next().addClass('current-question')

	//go to the next index in the questions array
	qCounter++
	
	//populate quiz with next question
	$quizQuestionH2.text(quizQuestion[qCounter]);
	
	//repopulate quiz with next set of answers
	for(i=0;i<4;i++){	
	$answers.eq(i).text(answerMasterList[qCounter][i]);
	}
})


})//end ready



//1- populate quiz
//2- user clicks button & picks answer
//3- Tell user if he is right or wrong 
//4- keep track of user score 
//4- show button to display next question
//5- repopulate quiz
//6- change question number at top
//....repeat

//Bugs & Improvements:
// 1- user score denominator keeps adding a number when quiz is over
// 2- button's can be reselected and class change when qquiz is over
// 3- standardize color of buttons 