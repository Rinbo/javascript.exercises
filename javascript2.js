// java2.js

// function within a function
function bar (a,b) {
    let n = a;
    
    function helper(x) {
        return 1/Math.sqrt(x +n);
    }
    return helper(b);
}

console.log(bar(1,3)); // => 0.5

let rob = function (){
    return "Robin"
}

console.log(rob());

let bor = function() {
    return "Börjesson"
}

let fn = function(x, y) {
    return `${x} ${y}`;
}

console.log(fn(rob(), bor()));

// Prototype
function Person(first, last) {
    // Constructor
    this.first= first;
    this.last = last;
    
    let privateFn = function(first,last) {
        //private function
    }
    
    this.setName = function(first, last){
        this.first = first;
        this.last = last;
    }
}

// Extend prototype (add function/method)

Person.prototype.fullName = function() {
    return this.first + " " + this.last;
}

snorre = new Person("Robin", "Börjesson");
console.log(snorre.fullName());
snorre.setName("Rolle", "Bolle");
console.log(snorre.fullName());

function newFunction() {
    this.myFunc1 = function () {
        return console.log("Hallå!!");
    };
    timer = setTimeout("myFunc1()", 3000);
}

