var randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

var score = 10;
var highScore = 0;


var info = function(status) {
    document.querySelector('.info').textContent = status;
};


var secretNumber = function(number) {
    document.querySelector('.secretNumber').textContent = number;
    document.querySelector('.box').style.backgroundColor = '#ffffff';
};


document.querySelector('.check').addEventListener('click', function() {
    var input = Number(document.querySelector('.input').value);

    if (!input) {
        alert("Lütfen bir tahmin yapınız!");
    }
    else if(input === randomNumber) {
        secretNumber(randomNumber);

        document.querySelector('body').style.backgroundColor = '#00ee76';

        info("Doğru tahmin!");

        score += 10;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highScore').textContent = highScore;
        }
    }
    else if(input !== randomNumber) {
        if(randomNumber < input) {
            info("Çok yüksek girdiniz!");
        }
        else {
            info("Çok düşük girdiniz!");
        }
    }
});


document.querySelector('.again').addEventListener('click', function() {
    score = 10;
    
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    info("Tahmin ediliyor...");
    secretNumber("?");
    document.querySelector('.input').value = '';
    document.querySelector('body').style.backgroundColor = '#e2e2e2';
});
