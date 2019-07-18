

var vid = document.getElementById("game-intro-vid");
var counter = 0;
const questionBank = [
    {
        question: "Which of the following would NOT be a good choice when selecting a suitable place to camp for the night in the middle of the wilderness?",
        answer1: "A site in proximity to a food source or density",
        answer2: "A site at distance from insect population",
        answer3: "A site that allows for a heat source like a fire",
        answer4: "A comfortable site right next to an animal's den",
        correct: "A comfortable site right next to an animal's den"
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

//countdown timer
var startTime = 30;
function countdown () {
    $("#timer").text(startTime);
    startTime--;
}
function questionTimer () {
    if (startTime === 0) {
        setInterval(countdown, 1000);
    }
}

//start game button logic. populates and shows questions/answers
function updateQuestion() {
    $("#q1").text(questionBank[counter]["question"])
    $("#a1").text(questionBank[counter]["answer1"])
    $("#a2").text(questionBank[counter]["answer2"])
    $("#a3").text(questionBank[counter]["answer3"])
    $("#a4").text(questionBank[counter]["answer4"])
    counter++;

}
$("#begin-btn").click(function () {
    updateQuestion();
    $("#question-box").removeClass("hidden");
    $("#start-btns").addClass("hidden");
    questionTimer();

})


