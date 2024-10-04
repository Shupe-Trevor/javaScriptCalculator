/* TODO: Build up the HTML document by using JavaScript DOM manipulation functions.
 * Do not rely on changes you may have made to index.html because the grader won't use that file.
 */
document.title = "JS Calculator";
document.body.setAttribute("Class", "js-calculator");

let linkDiv = document.createElement("div");
linkDiv.setAttribute("class", "mainDiv");

let link = document.createElement("a");
link.setAttribute("href","./Plan.html");
link.setAttribute("Class", "js-calculator");
link.textContent = "Link to Plan";
linkDiv.appendChild(link);
document.body.appendChild(linkDiv);

let mainDiv = document.createElement("div");
mainDiv.setAttribute("class", "mainDiv");

let main = document.createElement("h1");
main.setAttribute("Class", "js-calculator");
main.textContent = "JavaScript Calculator";
mainDiv.appendChild(main);

let newHead = document.createElement("h3");
newHead.setAttribute("Class", "js-calculator");
newHead.textContent = "Create An Expression Below:";
mainDiv.appendChild(newHead);

var inputColor = document.createElement("input");
inputColor.setAttribute("type", "color");
mainDiv.appendChild(inputColor);

let colorText1 = document.createElement("span");
colorText1.textContent = "<---BackGround Color____";
mainDiv.appendChild(colorText1);

let colorText2 = document.createElement("span");
colorText2.textContent = "____Text Color --->";
mainDiv.appendChild(colorText2);

var inputColorText = document.createElement("input");
inputColorText.setAttribute("type", "color");
inputColorText.value = "#FFFFFF";
mainDiv.appendChild(inputColorText);

let expression = document.createElement("p");
mainDiv.appendChild(expression);

var leftSide = document.createElement("input");
leftSide.setAttribute("type", "number");
leftSide.placeholder = "Enter Left Value Here";
expression.appendChild(leftSide);

var operation = document.createElement("select");
expression.appendChild(operation);

const plus = document.createElement("Option");
plus.textContent = "+";
operation.appendChild(plus);

const minus = document.createElement("Option");
minus.textContent = "-";
operation.appendChild(minus);

const divide = document.createElement("Option");
divide.textContent = "/";
operation.appendChild(divide);

const times = document.createElement("Option");
times.textContent = "*";
operation.appendChild(times);

const power = document.createElement("Option");
power.textContent = "**";
operation.appendChild(power);

const mod = document.createElement("Option");
mod.textContent = "%";
operation.appendChild(mod);

var rightSide = document.createElement("input");
rightSide.setAttribute("type", "number");
rightSide.placeholder = "Enter Right Value Here";
expression.appendChild(rightSide);

var compute = document.createElement("button");
compute.textContent = "Compute";
expression.appendChild(compute);

var makeNewDiv = function(text, backColor, textColor) {
    const date = new Date();
    const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
    const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

    let divDate = document.createElement("span");
    divDate.setAttribute("Style", "color:" + textColor);
    divDate.setAttribute("Class", "timestamp");
    divDate.textContent = month + "/" + day + "/" + year + "  " + hour + ":" + minutes + ":" + seconds;
    divDate.textColor = textColor;

    let divText = document.createElement("span");
    divText.setAttribute("Style", "color:" + textColor);
    divText.textContent = text;
    

    let newDiv = document.createElement("div");
    newDiv.setAttribute("Style", "Background: " + backColor);
    newDiv.setAttribute("Class", "result");
    newDiv.appendChild(divDate);
    newDiv.appendChild(divText);

    document.body.insertBefore(newDiv, document.getElementsByClassName("result")[0]);
    
    newDiv.onclick= () =>{
        newDiv.remove();
    };
    return 0
};

compute.onclick = () =>{
    if (leftSide.value.length == 0 | rightSide.value.length == 0 ){
        makeNewDiv("Error!!!!  Missing One Or More Operands!", "Red", "Black");
    }
    else{
        operation.options.selectedIndex
        const express = leftSide.value.trim() + operation[operation.selectedIndex].text + rightSide.value.trim();
        var answer = eval(express);
        makeNewDiv(express + "=" + answer,  inputColor.value, inputColorText.value);
    };
};

document.body.appendChild(mainDiv)




