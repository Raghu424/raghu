console.log("js started")
var a, b ,sum ,sub ,mul ,div;

a=10;
b=20;

function addition(){
    a= parseInt( document. getElementById('text1').value);
    b= parseInt( document. getElementById ('text2').value);
    sum=a+b;
    document.getElementById('text3').value=sum;
    console.log("sum of a,b : "+sum)
}
function substract(){
    a= parseInt( document. getElementById('text1').value);
    b= parseInt( document. getElementById ('text2').value);
    sub=a-b;
    document.getElementById('text3').value=sub;
    console.log("sub of a,b : "+sub)
}
function multiplication (){
    a= parseInt( document. getElementById('text1').value);
    b= parseInt( document. getElementById ('text2').value);
    mul=a*b;
    document.getElementById('text3').value=mul;
    console.log("mul of a,b : "+mul)
}
function division(){
    a= parseInt( document. getElementById('text1').value);
    b= parseInt( document. getElementById ('text2').value);;
    div=a/b;
    document.getElementById('text3').value=div;
    console.log("div of a,b : "+div)
}
console.log("js stop")