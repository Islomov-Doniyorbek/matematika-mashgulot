// console.log(quiz);


const questionnumber = document.querySelector('.question-number')
const questiontext = document.querySelector('.question-text')
const optioncontainer = document.querySelector('.option-container')
const answerIndicatorContainer = document.querySelector('.answer-indicator')
const homeBox = document.querySelector('.home-box')
const quizBox = document.querySelector('.quiz-box')
const resultBox = document.querySelector('.result-box');
    // questionLimit = 8;

let questionCounter = 0,
    currentQuestion,
    availableQuestions = [],
    availableOptions = [],
    coreectAnswers = 0,
    attempt = 0;

function setAvaibleQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
    // console.log(availableQuestions);
}
function getNewQuestion() {
    questionnumber.innerHTML = `${questionCounter + 1} / ${questionLimit}. ${questionCounter+1}-savol`;



    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questiontext.innerHTML = currentQuestion.q;

    const index1 = availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1, 1);
    if (currentQuestion.hasOwnProperty("img")) {
        // console.log(currentQuestion.img);
        const img = document.createElement('img');

        img.src = currentQuestion.img;
        questiontext.appendChild(img)
    }
    // console.log(questionIndex);
    console.log(availableQuestions);
    const optionLen = currentQuestion.option.length;
    for (let i = 0; i < optionLen; i++){
        availableOptions.push(i)
    }
    optioncontainer.innerHTML = '';
    let animationDelay = 0.2;
    // console.log(availableOptions);
    let clrs = [
        "brown", "orangered", "forestgreen", "navy", "blue", "darkgray", "chocolate", "olive", "salmon", "tan", "darkblue"
    ]
    let rn = Math.floor(Math.random() * clrs.length);
    document.querySelector("body").style.background = clrs[rn]
    for (let i = 0; i < optionLen; i++){
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];

        const index2 = availableOptions.indexOf(optionIndex);
        availableOptions.splice(index2, 1);
        const options = document.createElement('div');
        options.innerHTML = currentQuestion.option[optionIndex];
        options.id = optionIndex;
        options.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.2
        options.className = "option";
        optioncontainer.appendChild(options);
        options.setAttribute("onclick", "getResult(this)")
    }

    questionCounter++;
}
function getResult(element) {
    let btn = document.querySelector(".next-question-btn");
    btn.style.display = "block";    
    const id = parseInt(element.id);
    if (id === currentQuestion.answer) {
        element.classList.add("correct")
        updateAnswerIndicator("correct");
        coreectAnswers++
    } else {
        // element.classList.add("correct")
        element.classList.add("wrong")
        updateAnswerIndicator("wrong");
        
        // const optionLen = optioncontainer.children.length;
        // for (let i = 0; i < optionLen; i++) { 
        //     if (parseInt(optioncontainer.children[coreectAnswers].id) === currentQuestion.length) {
        //         optioncontainer.children[coreectAnswers].classList.add("correct");
                
        //     }
        // }

    }
    attempt++;

    unclickableOptions();
    // quizOverTimeOut()
}

function unclickableOptions(){
    const optionLen = optioncontainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optioncontainer.children[i].classList.add("already-answered");
    }
}


function answerindicator()
{
    answerIndicatorContainer.innerHTML=""
    const totalQuestion = questionLimit;
    for (let i = 0; i < totalQuestion; i++){
        const indicator = document.createElement("div");
        answerIndicatorContainer.appendChild(indicator);
    }
}


function updateAnswerIndicator(markType) {
    // console.log(markType);
    answerIndicatorContainer.children[questionCounter-1].classList.add(markType)
}

function next() {
    if (questionCounter === questionLimit) {
        console.log("quiz");
        quizOver()

    } else {
        getNewQuestion()
        let btn = document.querySelector(".next-question-btn");
        btn.style.display = "none"; 
    }
    
}
function timeOut() {
    let timeSpan = document.querySelector(".timer span");
    const time = setInterval(() => {
        k--
        timeSpan.innerHTML = k;
        if (k == 0) {
            clearInterval(time)
            quizOver()
            return true;
        }
    }, 1000);
}

function quizOver() {
    quizBox.classList.add('hide')

    resultBox.classList.remove('hide');
    quizresult();
}

function quizresult() {
    resultBox.querySelector(".total-question").innerHTML = questionLimit;
    resultBox.querySelector(".total-attemp").innerHTML = `${questionLimit} ta savoldan ${attempt} taga javob berildi, javobsiz qolgan savol ${questionLimit-attempt} ta`;
    resultBox.querySelector(".total-correct").innerHTML = coreectAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - coreectAnswers;
    const percentage = (coreectAnswers/questionLimit)*100;
    resultBox.querySelector(".total-percentage").innerHTML = percentage.toFixed(2)+"%";
    resultBox.querySelector(".total-score").innerHTML = coreectAnswers + " / " + questionLimit;
    resultBox.querySelector(".total-ball").innerHTML = coreectAnswers * bal +" ball";
    if (0<= percentage & percentage<=50) {
        resultBox.querySelector(".total-baho").innerHTML = "O'rganishda davom eting!"
    } else if (51<= percentage & percentage<=76) {
        resultBox.querySelector(".total-baho").innerHTML = "Yaxshi"
    } else {
        resultBox.querySelector(".total-baho").innerHTML = "Juda zo'r!"
    }
} 


function resetQuiz() {
    questionCounter = 0;
    coreectAnswers = 0;
    attempt = 0;
    availableQuestions = [];
}

// function tryAgainQuiz() {
//     resultBox.classList.add("hide")

//     quizBox.classList.remove("hide");
//     resetQuiz()
//     startQuiz()
// }
function goToHome() {
    resultBox.classList.add('hide');

    homeBox.classList.remove("hide")
    resetQuiz()
}

function startQuiz() {
    // hide home homeBox
    homeBox.classList.add("hide")
    // show quizBox
    quizBox.classList.remove("hide")
    // first we will set all questions in availableQuestions Array
    setAvaibleQuestions()
    // second we will call getNewQuestion() function
    getNewQuestion()

    answerindicator()

}

// let start = document.querySelector("#start");
// start.onclick = () => {
//     startQuiz()
    // timeOut()
// }
// start.addEventListener("click", timeOut(), startQuiz())








window.onload = function () {
    homeBox.querySelector('.total-question').innerHTML = questionLimit;
}
