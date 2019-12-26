//declare letiables
let inject = document.getElementById('inject');
let tQuestionsEz = [];
let tQuestionsHd = [];

let totalScore = 0;
let totalQuestions = 20;
let incorrect = 0;
let qNum = 0;
let timer = 10;
let interval;
let difficulty = 0;
let sound = false;


//grab elements from html page

//create our JSON data load

function loadHTML(url) {
    let xmlhttp = new XMLHttpRequest();


    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myArr = this.responseText;
            if (url == '../inject/title.html') {
                loadTitle(myArr);
            }
            else if (url == '../inject/menu.html') {
                loadMenu(myArr);
            }
            else if (url == '../inject/howToPlay.html') {
                loadHowToPlay(myArr)
            }
            else if (url == '../inject/game.html' && difficulty == 1) {
                loadGame(myArr, tQuestionsEz)
            }
            else if (url == '../inject/game.html' && difficulty == 2) {
                loadGame(myArr, tQuestionsHd)
            }
            else if (url == '../inject/gg.html') {
                loadGG(myArr)
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send()
}

function loadJSON(url) {
    let xmlhttp = new XMLHttpRequest();


    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //V1
            //let myArr = JSON.parse(this.responseText);
            //tQuestions = myArr.easy;
            tQuestionsEz = JSON.parse(this.responseText).easy;
            tQuestionsHd = JSON.parse(this.responseText).hard;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send()
}
loadJSON('../data/data.json');

function loadTitle(info) {
    inject.innerHTML = info;
    let start = document.getElementById('startBtn');
    start.addEventListener('click', function (e) {
        loadHTML("../inject/menu.html");
    });
}
function loadMenu(info) {
    inject.innerHTML = info;

    let easy = document.getElementById('easyBtn');
    easy.addEventListener('click', function (e) {
        difficulty = 1;
        loadHTML("../inject/game.html");
    });

    let hard = document.getElementById('hardBtn');
    hard.addEventListener('click', function (e) {
        difficulty = 2;
        loadHTML("../inject/game.html");
    });

    let options = document.getElementById('optionsBtn');
    options.addEventListener('click', function (e) {
        loadHTML("../inject/howToPlay.html");
    });

}

function loadHowToPlay(info) {
    inject.innerHTML = info;
    let music = document.getElementById('musicBtn');
    let audio = new Audio("../images/pokemonMusic.mp3");
    music.addEventListener('click', function (e) {
        if (!sound) {
            audio.play();
            sound = true;
        }
        else {
            audio.pause();
            audio.currentTime = 0;
            sound = false;
        }
    });
    let start = document.getElementById('startBtn');
    start.addEventListener('click', function (e) {
        loadHTML("../inject/menu.html");
    });
}

function loadGame(info, arr) {
    inject.innerHTML = info;

    let correct = document.getElementById('correct');
    let counter = document.getElementById('counter');
    let questions = document.getElementById('questions');
    let pokeBall = document.getElementById('pokeBall');
    let triviaQ = [];
    randomQuestion(arr);
    correct.innerText = `${totalScore}/${totalQuestions}`;

    let A1 = document.getElementById('A1');
    let A2 = document.getElementById('A2');
    let A3 = document.getElementById('A3');
    let A4 = document.getElementById('A4');

    A1.addEventListener('click', function(e){
        checkAnswer(A1.innerText);
    })
    A2.addEventListener('click', function(e){
        checkAnswer(A2.innerText);
    })
    A3.addEventListener('click', function(e){
        checkAnswer(A3.innerText);
    })
    A4.addEventListener('click', function(e){
        checkAnswer(A4.innerText);
    })

    counter.innerText = timer;
    interval = setInterval(updateTimer, 1000);
    loadQuestion();

    function randomQuestion(q) {
        console.log(q);
        for (i = 0; i < 20; i++) {
            let rNum = Math.floor(Math.random() * q.length);
            triviaQ.push(q[rNum]);
            q.splice(rNum, 1)
        }
    }

    function loadQuestion() {
        //console.log(arr[qNum]);
        questions.innerText = triviaQ[qNum].Q;
        A1.innerText = triviaQ[qNum].A1;
        A2.innerText = triviaQ[qNum].A2;
        A3.innerText = triviaQ[qNum].A3;
        A4.innerText = triviaQ[qNum].A4;

    }

    function checkAnswer(answer) {
        //retrieve and check for the correct answer
        // if (answer === triviaQ[qNum].C) {
        if (answer === triviaQ[qNum].C) {
            totalScore++;
        }
        else {
            incorrect++;
        }
        //go to next questions
        timer = 10;
        counter.innerText = timer;
        correct.innerText = `${totalScore}/${totalQuestions}`;
        nextQuestion();
    }

    //Next question
    function nextQuestion() {
        if (qNum < totalQuestions) {
            //will run until you hit total questions = 20
            qNum++;
            loadQuestion();
        }
        else {
            //clears the interval set in loadJSON
            clearInterval(interval);
            //inject your ending screen html below
            alert("You have finished the game.")
            loadHTML("../inject/gg.html")
        }
    }

    function updateTimer() {
        //Make sure time isn't over and shows the correct time
        timer--;
        if (timer == 0) {
            timer = 10;
            counter.innerText = timer;
            correct.innerText = `${totalScore}/${totalQuestions}`;
            nextQuestion();
        }
        else {
            counter.innerText = timer;

        }
    }

    pokeBall.addEventListener('click', function (e) {
        totalQuestions--;
        correct.innerText = `${totalScore}/${totalQuestions}`;
        document.getElementById('pokeBall').disabled = true;
        nextQuestion();
        //if(totalQuestions==20){
        //}
        //else if (totalQuestions<19){
        //}
    });
}

function loadGG(info) {
    inject.innerHTML = info;
    correct.innerText = `${totalScore}/${totalQuestions}`;
    let start = document.getElementById('startBtn');
    start.addEventListener('click', function (e) {
        loadHTML("../inject/menu.html");
    });

}
loadHTML('../inject/title.html');
