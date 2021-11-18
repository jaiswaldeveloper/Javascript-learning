


var name = "Rahul";
console.log("line number 2", name);

function sayName() {
    var name = "MR H";
    console.log("Line number 6" , name);
    sayNameTwo();

    function sayNameTwo() {
        // var name = "MR Harish";
        console.log("Line number 9", name);
    }
}
sayName();