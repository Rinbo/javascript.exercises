// functions.js


let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (itemCount) => {
  return getSubTotal(itemCount) * 0.06;
}

const getTotal = (itemCount) => {
  const result = getSubTotal(itemCount) + getTax(itemCount);
  return result;
}

console.log(getTotal(orderCount));


// Function declaration (deos not end with semicolon)
function isGreaterThan(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isGreaterThan(3, 4))


// Function expression using arrow token (does end in semicolon)
  const isGreaterThan = (numberOne, numberTwo) =>{
    if(numberOne > numberTwo){
      return true;
    } else {
      return false;
    }
  };
  
  console.log(isGreaterThan(4, 8))

// Condensed body declaration if only one parameter and block in on line
// This mean we can omit the parenthesis, return-keyword and the curly-braces

const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;
console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');