const quizes = [
    {
        question: "1. Software is defined as ......",
        a: "set of programs, documentation & configuration of data",
        b: "set of programs",
        c: "documentation and configuration of data",
        d: "None of the mentioned",
        Answer: "a",
    },
    {
        question: "2. What does SDLC stand for?",
        a: "System Design Life Cycle",
        b: "Software Design Life Cycle",
        c: "Software Development Life Cycle",
        d: "System Development Life cycle",
        Answer: "c",
    },
    {
        question: "3. Who is the father of Software Engineering?",
        a: "Margaret Hamilton",
        b: "Watts S. Humphrey",
        c: "Alan Turing",
        d: "Boris Beizer",
        Answer: "b"
    },
    {
        question: "4. What are the features of Software Code?",
        a: "Simplicity",
        b: "Accessibility",
        c: "Modularity",
        d: "All of the above",
        Answer: "c"
    },
    {
        question: "5. __________ is a software development activity that is not a part of software processes.",
        a: "Validation",
        b: "Specification",
        c: "Development",
        d: "Dependence",
        Answer: "d"
    },
    {
        question: "6. Define Agile scrum methodology",
        a: "project management that emphasizes incremental progress",
        b: "project management that emphasizes decremental progress",
        c: "project management that emphasizes neutral progress",
        d: "project management that emphasizes no progress",
        Answer: "a"
    },
    {
        question: "7. CASE stands for",
        a: "Computer-Aided Software Engineering",
        b: "Control Aided Science and Engineering",
        c: "Cost Aided System Experiments",
        d: "None of the mentioned",
        Answer: "a"
    },
    {
        question: "8. ________ is defined as the process of generating analysis and designing documents?",
        a: "Re-engineering",
        b: "Reverse engineering",
        c: "Software re-engineering",
        d: "Science and engineering",
        Answer: "b"
    },
];

const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const questionElement = document.getElementById('questions')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const startBtn = document.getElementById('start')
const startContainer = document.getElementById('start-container')

let currentQuiz = 0
let score = 0

startBtn.addEventListener('click', () => {
    startContainer.style.display = 'none';
    quiz.style.display = 'block';
    loadQuiz();
});

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizes[currentQuiz]
    questionElement.innerHTML = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d
}

function deselectAnswers() {
    answers.forEach(answer => answer.checked = false)
}

function getSelected() {
    let answer
    answers.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizes[currentQuiz].Answer) {
            score++
        }
    }
    currentQuiz++

    if (currentQuiz < quizes.length) {
        loadQuiz()
    } else {
        if (score >= 4) {
            quiz.innerHTML = `
                <h2>Congratulations 🤩 You answered ${score}/${quizes.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        } else {
            quiz.innerHTML = `
                <h2>So sorry 😓You answered ${score}/${quizes.length} questions correctly. Try again!</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
