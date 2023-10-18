var counter = 0;
var price = 100;
var total = 0;

// total = price * counter;
// console.log(total);
var items = document.getElementById("items");
var totalPrice = document.getElementById("totalPrice");

function increment() {
  counter = counter + 1;
  total = price * counter;
  items.innerText = counter;
  totalPrice.innerText = total;
}

function decrement() {
  counter = counter - 1;
  items.innerText = counter;
  total = price * counter;
  totalPrice.innerText = total;
}

