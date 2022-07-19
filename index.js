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
        let lastChar = currentString[currentString.length - 1];

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


for (let i = 0; i < operation.length; i++){
    operation[i].addEventListener("click", function(e) {
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length - 1];

        if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
            let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0){
            alert ("enter a number first");
        } else {
            input.innerHTML += e.target.innerHTML;
        }
    })
}


deleteButton.onclick = () => {
    let string = input.innerHTML.toString();
    input.innerHTML = string.substring(0, string.length - 1)
}

clear.onclick = () => {
    input.innerHTML = ""
}

result.onclick = () => {
    input.innerHTML = eval(input.innerHTML)
    
    if (input.innerHTML = "undefined"){
        input.innerHTML = "no numbers found"
        alert("please key in some numbers to compute")
} 
}