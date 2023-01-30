var randomNumber1 = Math.floor((Math.random()*6)+1);

var randomDice1 = "dice"+randomNumber1+".jpg";   //dice1.jpg to dice6

var randomImageSource1 = "dices/"+ randomDice1;  // dice/dice1.jpg - dice/dice6.jpg
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource1);


// img2.setAttribute("src",randomImageSource);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDice2 = "dice"+randomNumber2+".jpg";   //dice1.jpg to dice6

var randomImageSource2 = "dices/" +randomDice2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute('src',randomImageSource2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 won 🚩";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "palyer2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
