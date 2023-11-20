var player0 = document.querySelector('.player--0');
var player1 = document.querySelector('.player--1');

var score0 = document.querySelector('#score--0');
var score1 = document.querySelector('#score--1');

var current0 = document.querySelector('#current--0');
var current1 = document.querySelector('#current--1');

var diceEl = document.querySelector('.dice');

var btnNew = document.querySelector('.btn--new');
var btnRoll = document.querySelector('.btn--roll');
var btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    diceEl.classList.add('hidden');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');

    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');

    document.getElementById('name--0').innerText = '1. Player';
    document.getElementById('name--1').innerText = '2. Player';
};

init();

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};

document.getElementById('btnRoll').addEventListener('click', function() {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden');
        diceEl.src = `img/dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if (playing) {
        scores[activePlayer] += currentScore;   

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 10) {
            playing = false;
            diceEl.classList.add('hidden');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.getElementById(`name--${activePlayer}`).innerText = 'Winner!';
        }
        else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);
