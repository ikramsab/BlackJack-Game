let firstCard =Math.floor((Math.random() * 11) + 2);
let secondCard= Math.floor((Math.random() * 11) + 2);

let hasBlackJack = false
let isAlive=true

let messStr=""
let sum = firstCard+secondCard
let messageEl = document.getElementById("message-el")
let sumEl =document.querySelector("#sum-el")


function startGame(){

    sumEl.textContent= "Sum : " + sum 

    if(sum<=20){
        messStr=" Do you want a new card ?"
    } else if (sum === 21){
        messStr=" You've got blackJack "
        hasBlackJack=true
    }else{
        messStr=" you're out of the game  "
        isAlive=false
    }

    messageEl.textContent = messStr;

}


