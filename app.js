const h1=document.querySelector("#h1");
const h2=document.querySelector("#h2");
const h3=document.querySelector("#h3");
const input=document.querySelector("#input");
const output=document.querySelector("#output");

input.addEventListener("input",copy)
function copy(){
    let a=input.value;
    output.innerHTML=a;
}

h1.addEventListener("click",header1);
function header1(){
    output.style.fontSize= 2 + "em";
}

h2.addEventListener("click",header2);
function header2(){
    output.style.fontSize= 1.5 + "em";
}
h3.addEventListener("click",header3);
function header3(){
    output.style.fontSize= 1.17 + "em";
}