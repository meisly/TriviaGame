

var vid = document.getElementById("game-intro-vid");
var counter = -1;
var colonyScore = 100;
var correctAnswers = 0;
var incorrectAnswers =0;
const questionBank = [
    {
        question: "Which of the following would NOT be a good choice when selecting a suitable place to settle down for the night in the middle of the wilderness?",
        answer1: "A site in proximity to a food source or density",
        answer2: "A site at distance from insect population",
        answer3: "A site that allows for a heat source like a fire",
        answer4: "A comfortable site right next to an animal's den",
        correct: "A comfortable site right next to an animal's den",
        consequence: "You decide to start your settlement near a stream with several small birdlike animals in the vegetation nearby.  During the night these aliens animals creep into your settlement and steal food.  A few children are attacked"
    },
    {
        question: "In case of a strong snow storm or a blizzard, which of the following should you NOT do?",
        answer1: "Bring all your pets indoors where they can have access to heat and food",
        answer2: "Wear two or more layers of clothes to prevent frostbite or hypothermia",
        answer3: "Keep an eye out for weather reports to know when it is safe to step out",
        answer4: "Shut all ventilation and use a charcoal based burning device at home to cook and keep warm",
        correct: "Shut all ventilation and use a charcoal based burning device at home to cook and keep warm"

    },
    {
        question: "The desert can quickly suck moisture from you. You have a small canteen full of water and it's really getting hot. What should you do?",
        answer1: "Drink as much as you feel like",
        answer2: "Save as much water as possible",
        answer3: "Suck on a stone to help keep your mouth moist",
        answer4: "Drink your urine to recycle water",
        correct: "Drink as much as you feel like"

    },
    {
        question: "If you find yourself in any risk situation where you are lost and want to survive, STOP! Don't panic, and remember the STOP acronym. Which of these would correctly represent how you should proceed when lost in the woods?",
        answer1: "Stay, Trail, Obey, Panic",
        answer2: "Slow down, Track, Obliterate, Pack",
        answer3: "Speed up, Toil, Obstruct, Pour",
        answer4: "Sit down, Think, Observe, Prepare",
        correct: "Sit down, Think, Observe, Prepare"

    },
    {
        question: "There are reports of colonists experiencing copious amounts of watery diarhea. Should you",
        answer1: "Wait and See. It is probably a self-limiting infection",
        answer2: "Quarantine the infected to stop the spread of the infection",
        answer3: "Check your water sources and implement mandatory boil orders",
        answer4: "Check the food sources and throw away all spoiled food",
        correct: "Check your water sources and implement mandatory boil orders"

    },
    {
        question: "There are reports of colonists experiencing copious amounts of watery diarhea. Should you",
        answer1: "Wait and See. It is probably a self-limiting infection",
        answer2: "Quarantine the infected to stop the spread of the infection",
        answer3: "Check your water sources and implement mandatory boil orders",
        answer4: "Check the food sources and throw away all spoiled food",
        correct: "Check your water sources and implement mandatory boil orders"

    },
]

//set-up intro vid and play it
function playVid() {
    vid.play();
}
function hideVideo() {
    $("#game-intro-vid").addClass("hidden");
    $(".start-btns").removeClass("hidden");
    $("#video-btns").addClass("hidden");
}

$("#click-play").click(function () {
    playVid();
    $("#click-play").addClass("hidden");
})
$("#skip-vid").click(function () {
    hideVideo();
})

vid.onended = function () {
    hideVideo();
}

//display countdown timer
const timeLimit = 30;
var startTime = timeLimit;
var timer;
function countdown () {
    updateStarttime(startTime - 1);
    if (startTime <= 0) {
        questionTimer();
        updateQuestion();
    }
}
function updateStarttime(time) {
    startTime = time;
    $("#timer").text(startTime);
}
//updates timer every second
function questionTimer () {
    clearInterval(timer);
    updateStarttime(timeLimit);
    timer = setInterval(countdown, 1000);
}

function badAnswer () {
    colonyScore -=10;

}
//start game button logic. populates and shows questions/answers
function updateQuestion() {
    counter++;
    if (counter === questionBank.length -1) {
        tally();
    }
    var question = questionBank[counter]["question"];
    var ans1 = questionBank[counter]["answer1"];
    var ans2 = questionBank[counter]["answer2"];
    var ans3 = questionBank[counter]["answer3"];
    var ans4 = questionBank[counter]["answer4"];
    $(".answer").prop("checked",false);
    $("#q1").text(question);
    $("#a1").text(ans1);
    $("#a2").text(ans2);
    $("#a3").text(ans3);
    $("#a4").text(ans4);
    $("#ans1").val(ans1);
    $("#ans2").val(ans2);
    $("#ans3").val(ans3);
    $("#ans4").val(ans4);
    
}
//game start button
$("#begin-btn").click(function () {
    updateQuestion();
    $("#question-box").removeClass("hidden");
    $("#start-btns").addClass("hidden");
    $("#timer-row").removeClass("hidden");
    $("#colony-score").removeClass("hidden");
    $("#colony-stage").removeClass("hidden");
    questionTimer();

})
// make answers radio buttons responsive
$(".answer").click(function () {
    var answer = $(this).val();
    correctAnswer = questionBank[counter]["correct"];
    if (answer === correctAnswer) {
        correctAnswers++;
        updateQuestion();
        questionTimer();
    }
    else {
        updateQuestion();
        questionTimer();
        badAnswer();
        incorrectAnswers++;
        $("#colony-stat").text(colonyScore);
    }
})

//win conditions
function tally () {
    $(".eog-hide").addClass("hidden");

    if (colonyScore === 0) {
        $("#eog").removeClass("hidden");
        $("#early-death").removeClass("hidden");
    }
    else if (colonyScore <= 65) {
        $("#eog").removeClass("hidden");
        $("#survive").removeClass("hidden");
    }
    else {
        $("#eog").removeClass("hidden");
        $("#win").removeClass("hidden");
    }

    $("#incorrect").html("<b>Number Incorrect: </b>" + incorrectAnswers);
    $("#correct").html("<b>Number Correct: </b>" +correctAnswers)
}

