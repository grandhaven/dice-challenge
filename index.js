//for 1st dice image
var randomNumber1 = Math.random(); //this will get random number from 0 to 0.999999
randomNumber1 = Math.floor(randomNumber1*6) + 1; //0 to 5 will be getting at 1st then we add 1 to it so we get 1 to 6 now.


var randomDiceImage = "dice" + randomNumber1 + ".png"; //get image randomly between dice1.png to dice6.png
var randomImageSource = "images/" + randomDiceImage; //this gets between images/dice1.png to images/dice6.png in random

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource); //first is to what attribute you want to set and second is to what you want to change to.



//for 2nd dice image
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage1 = "dice" + randomNumber2 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;

 var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);




//chaging title h1 depending on result of the above dice image of player1 vs player2.
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
