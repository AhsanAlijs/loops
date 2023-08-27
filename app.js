

const fruits = ["Apple", "Mango", "Banana", "Orange", "Watermelon", "Peach"];
const p = document.querySelector("p");
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits[i]);
    fruits[4] = "Nashpati";
    p.innerHTML+=(`${fruits[i]}<br>`)
    
}