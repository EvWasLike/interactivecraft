var button = document.getElementById('hitit');
var answer = document.getElementById('answer');

button.addEventListener('click', addAnswer);

function addAnswer(){
  answer.innerText = 'Tartar Sauce.'
}

console.log(button)