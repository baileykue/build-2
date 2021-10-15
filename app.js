import { food } from './food.js';

const foodList = document.getElementById('food-list');



function renderFood(food){

    const foodItem = document.createElement('li');
    foodItem.classList.add('food-item');

    const foodImg = document.createElement('img');
    foodImg.src = food.img;

    const foodSpan = document.createElement('span');
    foodSpan.textContent = food.name;

    foodItem.append(foodImg, foodSpan);
   
    return foodItem;
}


for (let i of food){
    const itemList = renderFood(i);
    foodList.append(itemList);
}