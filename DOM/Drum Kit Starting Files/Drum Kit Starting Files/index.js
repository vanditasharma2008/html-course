var numberOfDrums = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
    {
    // alert("I got clicked");
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    // var audio=new Audio("./sounds/tom-1.mp3");
    // audio.play();
    });
}
document.addEventListener("keypress",function(event) {
            //addEventListener is known as High Order functions because they take other functions as their inputs....Here, resondToKey is a callback function to a high order function (addEventListener)
            //The input functions of High Order functions are Callback functions...
    makeSound(event.key);
    buttonAnimation(event.key)
    //alert("Key was pressed");

});

function makeSound(key){
    switch (key) 
        {
            case "w":
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "a":
                var audio=new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;
        
            case "s":
                var audio=new Audio("./sounds/snare.mp3");
                audio.play();
                break;

            case "d":
                var audio=new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;

            case "j":
                var audio=new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;

            case "k":
                var audio=new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;

            case "l":
                var audio=new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;

            default:
                console.log(buttonInnerHtml);
        }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}