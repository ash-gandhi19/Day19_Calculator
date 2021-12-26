'use strict';
let operation=[];
let obj={
        "add" : "+",
        "mult" : "*",
        "divide" : "/",
        "minus" : "-",
        "point" : "."
};

function insert(data){
   if(data=="point"){document.getElementById("result").innerHTML+=obj[data]
        operation.push(obj[data]);}
    else{document.getElementById("result").innerHTML+=data
    operation.push(data)};
    console.log(operation); 
}
function CLEAR(){
    operation.splice(0,operation.length);
    document.getElementById("result").innerHTML="";
    console.log(operation);
}
function backspace(){
    operation.pop();
    document.getElementById("result").innerHTML=operation.join("");
    console.log(operation);
}

let index;
let numm=[];


function action_operation(data){

    let sym=obj[data];
    operation.push(data);
    index=operation.indexOf(data);
    document.getElementById("result").innerHTML+=sym ;
    console.log(operation);
    
   }

let res;
function result() {
    numm.push((operation.slice(0, index)).join(""));
    numm.push((operation.slice(index + 1, operation.length)).join(""));
    let num = numm.map(b => parseFloat(b));
    console.log(operation);
    console.log(numm);
    if (operation.includes("mult")) {
        CLEAR();
        res = num[0] * num[1];
        document.getElementById("result").innerHTML = res;
    }
    if (operation.includes("divide")) {
        CLEAR();
        res = num[0] / num[1];
        document.getElementById("result").innerHTML = res;
    }
    if (operation.includes("minus")) {
        CLEAR();
        res = num[0] - num[1];
        document.getElementById("result").innerHTML = res;
    }
    if (operation.includes("add")) {
        CLEAR();
        res = num[0] + num[1];
        document.getElementById("result").innerHTML = res;
    }
    numm.splice(0, num.length)
    operation.push(res);
    console.log(operation);
}

console.log(operation);
