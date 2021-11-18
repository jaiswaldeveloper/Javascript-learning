// There is (2) types of context 
// 1 Global context
// 2 Executive context : 1- variable object   2- scope chain   3- this

// (2) Rules are follow in executive Context

// - function decalartion are scanned and made available
// - variable decalartion are scanned and made undefined




function tipper(a) {
    var bill =  parseInt(a);   //parseInt convert string to Number
    
    console.log(bill + 5);
}
tipper("80");


// variable decalartion are scanned and made undefined
var bigTipper = function (a) {
    var bill =  parseInt(a);   //parseInt convert string to Number
    
    console.log(bill + 25);
}
bigTipper("100");

// variable decalartion are scanned and made undefined

console.log(fullName);
var fullName = "manish kumar";


function sayName() {
    var name = "MR.H"
    console.log(name);
}
sayName();

console.log(fullName);