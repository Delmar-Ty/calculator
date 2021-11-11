/*function test() {
    console.log(document.getElementById('input').innerHTML);
    console.log(typeof(document.getElementById('input').innerHTML));
    var x = parseFloat(document.getElementById('input').innerHTML);
    console.log(x);
    console.log(typeof(x));
    console.log("It works");
    var array = document.getElementById('input').innerHTML.split(" ");
    console.log(array);
    var num1 = parseFloat(array[0]);
    console.log(num1);
    console.log(typeof(num1));
    var op = array[1];
    console.log(op);
    console.log(typeof(op));
    var num2 = parseFloat(array[2]);
    console.log(num2);
    console.log(typeof(num2));
}*/
var str = "";
function input(inp) {
    str += inp;
    document.getElementById('input').innerHTML = str;
}

function clearInput() {
    str = "";
    document.getElementById('input').innerHTML = 0;
}

function root() {
    var sqrtNum = document.getElementById('input').innerHTML.split(" ");
    document.getElementById('input').innerHTML = Math.sqrt(parseFloat(sqrtNum[0]));
}