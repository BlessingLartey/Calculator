let body = document.getElementById("body");
let container = document.getElementById("container");
let input = document.getElementById("input");
let operation = document.querySelectorAll(".operation div");
let number = document.querySelectorAll(".numbers div");
let deleteButton = document.getElementById("delete");
let clear = document.getElementById("clear");
let result = document.getElementById("result");
let themeDark = document.getElementById("theme_dark")
let themeLight = document.getElementById("theme_light")
let dot = document.getElementById("dot")
let history = document.getElementById("history")
resultDisplayed = false;


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
    firstData = input.innerHTML;
    input.innerHTML = eval(input.innerHTML); 
    data = firstData + " = " + eval(input.innerHTML)
    var history = [data]
    function updateHistory(){
        const historyContainer = document.getElementById("history-container")
        for (i = 0; i < history.length; i++){
            const historyElement = document.createElement("p")
            historyElement.innerHTML += history[i];
            console.log(historyElement)
            historyContainer.appendChild(historyElement)
        }   
    }
    updateHistory()

} 

themeDark.onclick = () => {
    body.style.backgroundColor = "black"
    body.style.color = "gray"
    container.style.backgroundColor = "black"
 
    for (i = 0; i < number.length; i++){
        number[i].style.backgroundColor = "#1E5631"
    }

    for (i = 0; i <operation.length; i++){
        operation[i].style.backgroundColor = "#210D26"
    }

    deleteButton.style.backgroundColor="#210D26"
    result.style.backgroundColor = "#400740"
    clear.style.backgroundColor = "#210D26"
    dot.style.backgroundColor = "#210D26"

}
themeLight.onclick = () =>{
    body.style.backgroundColor = null;
    body.style.color = null;
    container.style.backgroundColor = null;
 
    for (i = 0; i < number.length; i++){
        number[i].style.backgroundColor = null;
    }

    for (i = 0; i <operation.length; i++){
        operation[i].style.backgroundColor = null;
    }

    deleteButton.style.backgroundColor=null;
    result.style.backgroundColor = null;
}


