
const quizData = [
    {
        question: 'Which language runs in a web browser?',
        a: 'JavaScript',
        b: 'Python',
        c: 'C',
        d: 'None',
        correct: 'a'
    },
    {
        question: 'What does CSS Stand for?',
        a: 'Cascading Style Sheets',
        b: 'Central Style Sheets',
        c: 'Cascading Simple Sheets',
        d: 'None of these',
        correct: 'a'
    },
    {
        question: 'Which language runs in a web browser?',
        a: 'JavaScript',
        b: 'Python',
        c: 'C',
        d: 'None',
        correct: 'a'
    },
    {
        question: 'What does CSS Stand for?',
        a: 'Cascading Style Sheets',
        b: 'Central Style Sheets',
        c: 'Cascading Simple Sheets',
        d: 'None of these',
        correct: 'a'
    },
];

var quiz = document.getElementById('quiz');
var answerEls = document.querySelectorAll('.answer');
var questionEl = document.getElementById('question');
var a_text = document.getElementById('a_text');
var b_text = document.getElementById('b_text');
var c_text = document.getElementById('c_text');
var d_text = document.getElementById('d_text');

var currentQuiz = 0;
var score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    let currentQuizeData = quizData[currentQuiz];
    questionEl.innerText = currentQuizeData.question;
    a_text.innerText = currentQuizeData.a;
    b_text.innerText = currentQuizeData.b;
    c_text.innerText = currentQuizeData.c;
    d_text.innerText = currentQuizeData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})




