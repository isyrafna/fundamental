import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
import '../src/components/food-item.js';
import '../src/components/food-list.js';                          

const main = () => {
const searchElement = document.querySelector('search-bar');
const foodListElement = document.querySelector('food-list');

const onButtonSearchClicked = async () => {
    try {
    const result = await DataSource.searchFood(searchElement.value);
    renderResult(result);
    } catch (message) {
    fallbackResult(message);
    }
};

const renderResult = (results) => {
    foodListElement.foods = results;


    
    // results.forEach(food => {
    //   const {name, fanFood, description} = food;
    //   const foodElement = document.createElement('div');
    //   foodElement.setAttribute('class', 'food');
 
    //   foodElement.innerHTML = `
    //     <img class="fan-food" src="${fanFood}" alt="Fan Food">
    //     <div class="food-info">
    //       <h2>${name}</h2>
    //       <p>${description}</p>
    //     </div>
    //   `;
    //   foodListElement.appendChild(clubElement);
    // });
  };
 
  const fallbackResult = message => {
    clubListElement.innerHTML = '';
    clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };
 
  searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;
