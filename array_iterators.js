// array_iterators.js


let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

let secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

let smallNumbers = bigNumbers.map(number => number/100);

console.log(smallNumbers)

let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruit => console.log("I want to eat a " + fruit)
);

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

let smallNumbers = randomNumbers.filter(number => number < 250)
console.log(smallNumbers);


let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

let longFavoriteWords = favoriteWords.filter(word => word.length > 7);
console.log(longFavoriteWords)

let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(function(word) {
  return word.length < 6;
}));

let interestingWords = words.filter(word => word.length > 5);
console.log(interestingWords)

console.log(interestingWords.every(word => word.length > 5));


let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];

cities.forEach(city => console.log('Have you visited ' + city + '?'));

let longCities = cities.filter(city => city.length > 7);

let smallerNums = nums.map(num => num - 5);

nums.some(num => num < 0);
