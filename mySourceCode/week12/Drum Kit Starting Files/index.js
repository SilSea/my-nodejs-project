// document.getElementById("calculateBT").addEventListener("click",function(){
//     let radiusValue = document.getElementById("radiusValue").value;
//     let anwserText = document.getElementById("anwser");
//     let anwserArea = radiusValue * radiusValue * 3.14159;
//     anwserText.innerHTML = anwserArea;
// });

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for(let i = 0;i < numberOfDrumButtons;i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         var b = document.querySelectorAll(".drum")[i].innerHTML;
//         alert("I got clicked " + b + " button");
//     });
// }

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i = 0;i<numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        var b = document.querySelectorAll(".drum")[i].innerHTML;
        sound(b);

    });
}

document.addEventListener("keypress",function(event){
    sound(event.key);
});

function sound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}