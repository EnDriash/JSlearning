function gameRoutes(app){
    
let goodAnswers = 0;
let isGameOver = false;
let callToFriendUsed = false;
let questionToTheCrowdUsed = false;
let HalfOnHalfUsed = false;

const questions = [
    {
        question: 'Jaki jest najlepszy jezyk programowania na świecie?',
        answers: ['C++', 'Fortran', 'JavaScript', 'Java'],
        correctAnswer: 3
    },
    {
        question: 'Czy Lewandowski jest ok?',
        answers: ['Nie', 'Tak', 'Może być', 'Nie mam zdania'],
        correctAnswer: 2
    },
    {
        question: 'Chcesz zjesc pizze?',
        answers: ['Jestem na diecie', 'Tak', 'Trzy odrazu', 'Może'],
        correctAnswer: 1
    }
]

app.get(`/question`, (req, res) => { 
    
    if (goodAnswers === questions.length) {
        res.json({
            winner: true
        });
    } else if(isGameOver) {
        res.json({
            loser: true
        });
    } else {
        const nextQuestion = questions[goodAnswers];
        const {question, answers} = nextQuestion;

        res.json({
            question, answers
        })
    }
});

app.post(`/answer/:indx`, (req, res) => { 

    if(isGameOver) res.json({
        loser: 'true'
    });

    const {indx} = req.params;
    const question = questions[goodAnswers];
    const isGoodAnswer = question.correctAnswer === Number(indx)+1;

    if(isGoodAnswer){
        goodAnswers++;
    } else {
        isGameOver = true;
    }

    res.json({
        correct: isGoodAnswer,
        goodAnswers,
    })

});

app.get('/help/phone', (req, res) => {
    const question = questions[goodAnswers];
    let x = Math.random();
    x > 0.5 ? 
    res.json({
        reply: `Myśle że to będzie ${question.answers[question.correctAnswer-1]}` 
    }) :
    res.json({
        reply: `Nie mam pojęcia!`
    })

});

app.get('/help/half', (req, res) => {

    const question = questions[goodAnswers];
    const answersCopy = question.answers.filter( (s, index) => (
        index !== question.correctAnswer-1
    ));    
    answersCopy.splice(Math.floor(Math.random() * question.answers.length-1) , 1);

    console.log(answersCopy)
    
    res.json({
        answersToRemove: answersCopy
        })

});

app.get('/help/public', (req, res) => {
    const question = questions[goodAnswers];
    const chart = [10, 20, 30, 40];
    const {correctAnswer} = question;
    for(let i = chart.length-1; i > 0; i--) {
        const change = Math.floor(Math.random() * 20-10);

        chart[i] += change;
        chart[i-1] -= change;
    }
    [chart[3], chart[correctAnswer-1]] = [chart[correctAnswer-1], chart[3]];

    res.json({
        chart,
    })
});

} module.exports = gameRoutes;