
$(document).ready(function(){
	
//------------------
//-----The Quiz(Arrays)-----
//------------------

var quizQuestion = [
	"Which of these is a cruciferous vegetable?" 
	, "Which of these fish is high in vitamin D and omega-3 fatty acids that protect your heart?"
	, "Which of these nuts has the highest omega-3 and antioxidant content"
	, "Which of these foods contains anti-oxidant flavonols that help reduce blood pressure and inflammation?"
	, "Which of these grains is considered a complete protein?"
];

var quizExplanation = [
	"Broccoli is a member of the cabbage family of vegetables, often referred to as cruciferous, which is associated with anticancer benefits as well as reduced inflammation and higher immunity. Broccoli is also high in fiber, and a high-fiber diet can help keep blood pressure down and reduce heart-disease risk."
	, "Salmon develop their muscle mass and fat stores in order to fuel their egg production and nonstop upstream migration. Norway pioneered the ocean farming of Atlantic salmon in large offshore pens in the 1960s. Atlantic salmon has been depleted by overfishing and damage to their home rivers, so nowadays most market fish come from farms in Scandinavia and North and South America. "
	, "Nuts tend to be high in calories and fat, but the monosaturated fat in nuts is healthier than the saturated fat in meat and dairy products. And their high omega-3-fatty-acid levels make them a go-to for heart health. A recentstudy also found that walnuts carry some of the highest antioxidant content among all nuts."
	, "Chocolate, the cooked, sculptable paste of a South American tree seed, has been married to sugar ever since its arrival in Europe nearly 500 years ago, and is in some respects sugar’s complement. Where sugar is a single molecule purified from complex plant fluids, chocolate is a mixture of hundreds of different molecules produced by fermenting and roasting a plain bland seed."
	, "Quinoa is a native of northern South America, and was a staple food of the Incas. Quinoa can be cooked like rice or added to soups and other liquid dishes; it’s also popped, and is ground and made into a variety of flatbreads."
]

var answerKey = [
	"Broccoli"
	, "Salmon"
	, "Walnuts"
	, "Chocolate"
	, "Quinoa"
];

var answerList1 = [
	"Tomato"
	, "Eggplant"
	, "Broccoli"
	, "Green Beans"
];

var answerList2 = [
	"Salmon"
	, "Swordfish"
	, "Shrimp"
	, "Tuna"
];

var answerList3 = [
	"Pinenuts"
	, "Walnuts"
	, "Almonds"
	, "Peanuts"
];

var answerList4 = [
	"Chocolate"
	, "Milk"
	, "Avocado"
	, "Cinnamon"
];

var answerList5 = [
	"Brown Rice"
	, "Quinoa"
	, "Chickpeas"
	, "Bulgur Wheat"
];

var answerMasterList = [
	answerList1
	, answerList2
	, answerList3
	, answerList4
	, answerList5
];


//------------------------
//-----CSS/HTML Selectors----
//--------------------------

var $quizQuestionH2 = $('.quiz-question h2');
var $questionNum = $('.question-num li')
var $answers = $('.user-option');
var $showExpl = $('.show-expl');
var $answerList = $('.answer-menu');
var $answerButton =  $('.answer-menu .user-answer');
var $nextQuestion = $('.next-question');
var $userScoreTally = $('.user-score-correct');
var $userScoreDenom = $('.user-score-total');


//--------------------------
//------Quiz Programming----
//--------------------------

//set index for  quiz question
var qCounter = 0;
var uScore = 0;
var qsAsked = 0;

//hide nextQuestion button
$nextQuestion.hide();
//populate initial quiz question <h2>
$quizQuestionH2.text(quizQuestion[qCounter]);

//populate initial quiz answer-options
for(i=0;i<4;i++){	
	$answers.eq(i).text(answerMasterList[qCounter][i]);
	}

//when user selects answer, evaluate if answer is correct
$answerList.on("click", "button", function(){
	//disable the buttons	
	$answerList.find('.user-option').attr('disabled', true);
	$showExpl.slideDown(350).find('p').text(quizExplanation[qCounter]);
	
	//if user's user's answer is correct & if the
	
	if ($(this).text()===answerKey[qCounter]){
		//change the background color to green
			$(this).css({'background': 'green',
					  "color" : '#eee'});
			uScore++
			$userScoreTally.text(uScore)
			qsAsked++
			$userScoreDenom.text(qsAsked)
		} else{
			$(this).css({'background': 'red',
					'color': '#eee'});
			qsAsked++
			$userScoreDenom.text(qsAsked)
		}

		//add one to the question-counter
		qCounter++

		//if qcounter is larger than the length of array(ie if there are no more questions,), modify the next button
		if (quizQuestion.length == qCounter){ 
				console.log('quiz QUIZ OVER!');
				$nextQuestion.text("See Your Score")			
			}
				
		$nextQuestion.fadeIn(300);
})


$nextQuestion.on("click", function(){
	
	//if there are no more questions, show score when user clicks modified next-button
	if (quizQuestion.length == qCounter){ 
			var finalUserScore = $('.score-tracker').text();
			$('.final-score').text(finalUserScore);
			$('#final-results').slideDown(500);
			
	} else {

		//reenable & reset formats on answer-button 
		$answerList.find('.user-option').attr('disabled', false);
		$answerList.find('button').css({'background': 'rgba(188, 200, 166, .7)',
										"color": "rgb(0,87,61)"});
	
		//hide explanation & next-question-button
		$showExpl.slideUp(200);
		$nextQuestion.fadeOut(200);
		
		//in the header, remove highlight class on question-number and apply class to next question-number
		$questionNum
			.eq(qCounter-1)
			.removeClass('current-question')
			.next().addClass('current-question');
		
		//populate quiz with next question
		$quizQuestionH2.text(quizQuestion[qCounter]);
		
		//repopulate quiz with next set of answers
		for(i=0;i<4;i++){	
		$answers.eq(i).text(answerMasterList[qCounter][i]);
		$nextQuestion.hide()
		}//end for-loop
						
	} //end if-else statement
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