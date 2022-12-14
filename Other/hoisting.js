// Function declarations is Hoisting, Function expression is NOT Hoisting
speakDe();
speakEx();
// Function declaration
function speakDe() {
	console.log("Hello");
}
// Function expression
var speakEx = function () {
	console.log("Hello")
};

console.log(x);
// x is not defined

var x;
console.log(x);
// result: undefined

console.log(x);
var x = 5;
// result: undefined
