let score = 0;
let timer;
let timeLeft = 10;
let difficulty = 1;

function startTimer() {
    timeLeft = 10;
    document.getElementById('timer').innerText = `Tempo restante: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `Tempo restante: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Tempo esgotado!');
            generateQuestion();
        }
    }, 1000);
}

function generateQuestion() {
    startTimer();
    const num1 = Math.floor(Math.random() * 10 * difficulty) + 1;
    const num2 = Math.floor(Math.random() * 10 * difficulty) + 1;
    const operation = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    const questionText = `${num1} ${operation} ${num2}`;
    document.getElementById('question').innerText = questionText;
    return eval(questionText);
}

let correctAnswer = generateQuestion();

function checkAnswer() {
    const userAnswer = Number(document.getElementById('answer').value);
    if (userAnswer === correctAnswer) {
        score += 10;
        difficulty++;
        document.getElementById('feedback').innerText = 'Correto!';
        document.getElementById('feedback').style.color = 'green';
        new Audio('correct.mp3').play();
    } else {
        document.getElementById('feedback').innerText = 'Errado!';
        document.getElementById('feedback').style.color = 'red';
        new Audio('wrong.mp3').play();
    }
    document.getElementById('score').innerText = `Pontuação: ${score}`;
    document.getElementById('answer').value = '';
    correctAnswer = generateQuestion();
}

// Iniciando o jogo na primeira execução
generateQuestion();
