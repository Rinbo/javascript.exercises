// java1.js

a = [1,3,5];

console.log(a[1]); 
console.log(typeof(123));
console.log(typeof("Hello"));
console.log(typeof(123/3));
console.log(typeof(undefined));

let language = "English"

if (language == "English"){
    console.log("Hellööuu");
} else if (language == "American"){
    console.log("Howdy!");
} else {
    console.log("Mumble muble");
}

myArray = ['Thomas', 'Amber', 'Raoul']
emptyArray = []

for (i in myArray) {
    emptyArray[i] = myArray[i];
}

console.log(emptyArray)