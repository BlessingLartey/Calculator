let input = document.getElementById("input");
let operation = document.querySelectorAll(".operation div");
let number = document.querySelectorAll(".numbers div");
let deleteButton = document.getElementById("delete");
let clear = document.getElementById("clear");
let result = document.getElementById("result");
resultDisplayed = false;


deleteButton.addEventListener("click", displayHello)
function displayHello(){
    console.log ("Hello")
}



for (let i = 0; i < number.length; i++){
    number[i].addEventListener("click", function(e){
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.lenght - 1];

        if(resultDisplayed === false){
            input.innerHTML +=e.target.innerHTML;
        } else if(resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "/" || lastChar === "*"){
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else{
            resultDisplayed = false;
            input.innerHTML = ""
            input.innerHTML += e.target.innerHTML
        }
        });
}



// clear(){

// }

// delete(){

// }

// appendNumber(number){

// }

// chooseOperation(operation){

// }

// compute(){

// }

// updateDisplay(){

// }
