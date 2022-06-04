const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello to my land",
        b: "Hey text Markup language",
        c: "Hypertext Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheeps",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, span",
        d: "HTML, Head, Title, Body",
        ans: "ans4"
    },
    {
        question: "Q4: Which of the following element is responsible for making the text bold in HTML?",
        a: "<pre>",
        b: "<a>",
        c: "<b>",
        d: "<br>",
        ans: "ans3"
    },
    {
        question: "Q5: Which of the following tag is used to insert a line-break in HTML?",
        a: "<br>",
        b: "<a>",
        c: "<pre>",
        d: "<b>",
        ans: "ans1"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers= document.querySelectorAll('.answer');

constShowScore = document.querySelector('.showScore')

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    const deselectAll = () =>{
        answers.forEach((curAnsElem) => curAnsElem.checked = false );
    }

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML =`
        <h3> Your Score is ${score}/${quizDB.length}<span>&#9996;</span></h3>
        <button class="btn" onclick="location.reload()"> Play again</button>
        `;
    
        showScore.classList.remove('scoreArea');
    }
});