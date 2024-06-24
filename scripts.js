const quizQuestions = [
    {
        question: "1. Software is defined as ......",
        a: "set of programs, documentation & configuration of data",
        b: "set of programs",
        c: "documentation and configuration of data",
        d: "None of the mentioned",
        correctAnswer: "opt-a",
    },
    {
        question: "2. What does SDLC stand for?",
        a: "System Design Life Cycle",
        b: "Software Design Life Cycle",
        c: "Software Development Life Cycle",
        d: "System Development Life cycle",
        correctAnswer: "opt-c",
    },
    {
        question: "3. Who is the father of Software Engineering?",
        a: "Margaret Hamilton",
        b: "Watts S. Humphrey",
        c: "Alan Turing",
        d: "Boris Beizer",
        correctAnswer: "opt-b"
    },
    {
        question: "4. What are the features of Software Code?",
        a: "Simplicity",
        b: "Accessibility",
        c: "Modularity",
        d: "All of the above",
        correctAnswer: "opt-c"
    },
    {
        question: "5. __________ is a software development activity that is not a part of software processes.",
        a: "Validation",
        b: "Specification",
        c: "Development",
        d: "Dependence",
        correctAnswer: "opt-d"
    },
    {
        question: "6. Define Agile scrum methodology",
        a: "project management that emphasizes incremental progress",
        b: "project management that emphasizes decremental progress",
        c: "project management that emphasizes neutral progress",
        d: "project management that emphasizes no progress",
        correctAnswer: "opt-a"
    },
    {
        question: "7. CASE stands for",
        a: "Computer-Aided Software Engineering",
        b: "Control Aided Science and Engineering",
        c: "Cost Aided System Experiments",
        d: "None of the mentioned",
        correctAnswer: "opt-a"
    },
    {
        question: "8. ________ is defined as the process of generating analysis and designing documents?",
        a: "Re-engineering",
        b: "Reverse engineering",
        c: "Software re-engineering",
        d: "Science and engineering",
        correctAnswer: "opt-b"
    },
];

const quizContainer = document.getElementById('quiz');
const answerOptions = document.querySelectorAll('.answer');
const questionText = document.getElementById('question-text');
const optionAText = document.getElementById('optionat');
const optionBText = document.getElementById('optionbt');
const optionCText = document.getElementById('optionct');
const optionDText = document.getElementById('optiondt');
const submitButton = document.getElementById('submit-button');
const startButton = document.getElementById('start-button');
const startContainer = document.getElementById('start-container');

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', () => {
    startContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    loadQuiz();
});

function loadQuiz() {
    deselectAnswers();
    const currentQuestionData = quizQuestions[currentQuestionIndex];
    questionText.innerHTML = currentQuestionData.question;
    optionAText.innerHTML = currentQuestionData.a;
    optionBText.innerHTML = currentQuestionData.b;
    optionCText.innerHTML = currentQuestionData.c;
    optionDText.innerHTML = currentQuestionData.d;
}

function deselectAnswers() {
    answerOptions.forEach(answer => answer.checked = false);
}

function getSelectedAnswer() {
    let selectedAnswer;
    answerOptions.forEach(answerOption => {
        if (answerOption.checked) {
            selectedAnswer = answerOption.id;
        }
    });
    return selectedAnswer;
}

submitButton.addEventListener('click', () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer) {
        if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
            score++;
        }
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        loadQuiz();
    } else {
        const scorePercentage = (score / quizQuestions.length) * 100;
        quizContainer.innerHTML = `
            <h2>You answered ${scorePercentage.toFixed(2)}% of questions correctly</h2>
            ${scorePercentage >= 50 ? '<h3>Congratulations 🤩</h3>' : '<h3>Try Again 😢</h3>  <button id="reload-button" onclick="location.reload()">Reload</button>'}
            
        `;
    }
});
