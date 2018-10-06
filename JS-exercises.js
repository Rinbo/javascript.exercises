//Exercise 1

//1
a = [1,2,3]

//2
secondNumber = a[1]

//3
typeof(123/12) => 'number'
typeof("Hello") => 'string'
typeof(undefined) 'undefined'

//4
if (3>2) {
    true
}

//5

myArray = ['Thomas', 'Amber', 'Raoul']
emptyArray = []
for (let i = 0; i<myArray.length; i++)  {
    emptyArray.push(myArray[i])
}

console.log(emptyArray)

//Exercise 2

//1
// 'self' refers to the instantiation of Person. However, one has to be careful when using
// self in JavaScript since it is context dependent: https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/

//2 

class Person {
    constructor(first, last) {
        this.first = first
        this.last = last
    }

    setName(first, last) {
        this.first = first
        this.last = last
    }

    fullname() {
        return `${this.first} ${this.last}`;
    }

}

robin = new Person("Robin", "Borjesson");
robin.first
robin.setName("Bob", "Bobson");
robin.fullname()
