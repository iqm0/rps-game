let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');

const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

rock_div.addEventListener('click', function() {
    console.log('You clicked on Rock')
});

paper_div.addEventListener('click', function() {
    console.log('You clicked on Paper')
});

scissors_div.addEventListener('click', function() {
    console.log('You clicked on Scissors')
});