const question = document.querySelector('.question');
const goodAnswerElement = document.getElementById('good-answers');
const gameBoard = document.querySelector(`.game-board`);
const h2 = document.querySelector(`h2`);

const phonetofriend = document.querySelector('.phonetofriend');
const halftohalf = document.querySelector('.halftohalf');
const asktopublic = document.querySelector('.asktopublic');
const showWindow = document.querySelector('.rescue-asks h2');

function fillQuestionElements(data) {
    if(data.winner === true){
        gameBoard.style.display = 'none';
        h2.innerText = `WYGRAŁEŚ/AŚ!!!`;
        return;
    }
    if(data.loser === true){
        gameBoard.style.display = 'none';
        h2.innerText = `Nie poszło tym razem spróbuj ponownie!`;
        return;
    }
    question.innerText = data.question;
    data.answers.forEach((elem, i) => {
        buttons[i].style.display = "inline-block";
        const answerEl = document.querySelector(`button.answer${i+1}`);
        answerEl.innerText = elem;
    });
}

function showNextQuestion() {
    fetch('/question', {
        method: 'GET',
    }).then(res => {``
         return res.json();
    }).then(json => {
        fillQuestionElements(json);
    });
};
showNextQuestion();

function handleAnswerFeedback(data){
    goodAnswerElement.innerText = data.goodAnswers;
    showNextQuestion();
}

function sendAnswer(answerIndex){
    fetch(`/answer/${answerIndex}`, {
        method: 'POST',
    }).then(res => {``
         return res.json();
    }).then(json => {
        handleAnswerFeedback(json);
    });
}

const buttons = document.querySelectorAll('.game-board button');

for(button of buttons) {
    button.addEventListener('click', (event) => {
        let numberOfElement = Array.from(buttons).indexOf(event.target);
        sendAnswer(numberOfElement);
    })
}


phonetofriend.addEventListener('click', () => {
    fetch('/help/phone', {
        method: 'GET',
    }).then(res => {``
         return res.json();
    }).then(json => {
        const {reply} = json;
        phonetofriend.setAttribute('disabled', 'true');
        showWindow.innerText = reply;
        return
    });
});

halftohalf.addEventListener('click', () => {
    fetch('/help/half', {
        method: 'GET',
    }).then(res => {``
         return res.json();
    }).then(json => {
        const answersToRemove = json.answersToRemove;
        halftohalf.setAttribute('disabled', 'true');
        buttons.forEach((elem, index) => {
            if(Array.from(answersToRemove).includes(elem.textContent)){
                elem.style.display = "none";
            }
        })
    });
});

asktopublic.addEventListener('click', () => {
    fetch('/help/public', {
        method: 'GET',
    }).then(res => {``
         return res.json();
    }).then(json => {
    console.log("TCL: json", json)
        asktopublic.setAttribute('disabled', 'true');
        json.chart.forEach( (precent, index) => {
            buttons[index].innerText += `: ${precent}%`
        })
        
    
    });
});