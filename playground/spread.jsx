/*Example of the use of spread operator */
function add (a, b) {
    return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];
//the three ... spreads out the values of any object array example down below
console.log(add(...toAdd));

//another ex. of spread operator use

var groupA = ['jen', 'cory'];
var groupB = ['Vikram'];
//values in groupA array are spread out within the final array as normal elements
var final = [3, ...groupA, ...groupB];

console.log(final);

var person = ['andrew',25 ];
var personTwo = ['jen', 29];

function greet (name, age) {
    return "Hi "+name+", you are "+age+" years old.";
}

console.log(greet(...person));
console.log(greet(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Aaron', ...names];

//iterate through names using foreach
final.forEach(function (name) {
    console.log('Hi '+name);
});





