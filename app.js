let numberCard = ['A',2,3,4,5,6,7,8,9,10,'j','Q','K'];
let icon = ['spade', 'clubs','heart', 'diamons'];

let cardRandom = document.querySelector('.number');
cardRandom.classList.add(icon[Math.floor(Math.random()*numberCard.length)]);
cardRandom.innerHTML = numberCard[Math.floor(Math.random()*numberCard.length)];

