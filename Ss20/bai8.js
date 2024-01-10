const pi = 3.14;
var r = +prompt("Bán kính hình tròn?")
var a = Math.floor(Math.random() * (2*r-1)) + 1;
var b = Math.sqrt(((2*r)*(2*r)) - (a*a));
console.log((a+b)*2);
console.log(a*b);
