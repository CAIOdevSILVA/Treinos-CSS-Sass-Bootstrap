const cards = document.querySelector('.cards');
const cardsContainer = cards;
let num = 0;
const count = cardsContainer.children.length;
let allTimer = 0


function SliderOn() {
  let i = 0;
  num =  Number(count % 6)
  setInterval(function() {
    if(i < num){
      cardsContainer.children[i].setAttribute("id", "move");
    }else{
      return;
    }
    i++;
  }, 2000);
}

function removeElement() {
  let timer = Number(((num * 2) + 1) * 1150);
  let j = (num);
  setTimeout(function() {
    for(j; j >= 0; j--){
      cardsContainer.children[j].removeAttribute("id", "move");
      cardsContainer.children[j].setAttribute("id", "moveDown");
    }
  }, timer);
}

let number = Number(count % 6)
allTimer = Number(((((number * 2) + 1) + (number * 2)) * 1050) - 2000);

if(count > 6){
  setInterval(function() {
    SliderOn();
    removeElement();
  
  }, allTimer)
  
}






