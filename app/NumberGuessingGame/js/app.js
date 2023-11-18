// ALGORİTMA

/*
1. random ile rastgele bir sayı üret ve bunu randomNumber ile tut.
2. score başlangıç değeri 10 ve highScore başlangıç değeri 0 olsun.
3. infonun içeriğini değiştirecek fonksiyonu yaz.
4. kontrol et butonu için bir event yaz. bu fonksiyon inputtaki
veriyi secretNumber ile eşit mi kontrol etsin.
- input boş girilebilir kontrol et
- sayılar eşitse yani doğru tahminse bg yeşil olsun
ve burada score kontrolleri yap
- sayılar eşit değilse:
infonun değişmesini kontrol et.

5. tekrar başlat butonu için event yaz.
- tekrardan 0-20 arası sayı üretsin
- score başlangıç değerine dönsün
- info değişsin
- secretNumber ? olmalı
- input boş olmalı

*/


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
