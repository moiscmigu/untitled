console.log('This script is sourced!');


//********* OBJECT S*********
// // function person(name, age) {
// //     this.name = name;
// //     this.age = age;
// //
// // }
// //
// // var Moises = new person('Moises', 13);
//
//
// talyor = {name:'Moises', age:19};

// ********* TYPEOF ***********

var fruit = 'pineapple';
var number = 10;
var trueBoolean = true;
var falseboolean = false;
person = {
    name:'Moises Miguel',
    age:19
};
var moises;
console.log(typeof trueBoolean);
console.log(typeof moises);


if (typeof trueBoolean === "boolean")  {
    console.log('This boolean is true!');
}



function theDoubler(input) {
    if (typeof input === 'string') {
        console.log(fruit + " " + fruit);
    }
    else if (typeof input === 'number'){
            console.log(input * 2 );
    }
    else if (typeof input === 'boolean') {
        if (input === true) {
            console.log('This boolean is true!');
        }
        else  {
            console.log('This boolean is false');
        }
    }
    else if (typeof person === 'object') {
        console.log('this is an object');

    }

}
