//left image
var randomNumber1=(Math.random() * 6);
randomNumber1=(Math.floor(randomNumber1)) + 1;
randomDiceImage1= "dice" + randomNumber1 + ".png";
randomImageSource1 = "images/" + randomDiceImage1;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

//right image
var randomNumber2=(Math.random() * 6) ;
randomNumber2=Math.floor(randomNumber2) + 1;
randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = " Player 2 Wins! 🚩";
}
else{
        document.querySelector("h1").innerHTML = " Draw!";
    }
