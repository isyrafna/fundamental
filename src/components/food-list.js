import './food-item.js';

class foodList extends HTMLElement {
constructor () {
  super();
  this.shadowDOM = this.attachShadow ({mode : "open"});
}

  set foods(foods) {
    this._foods = foods;
  this.render();
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = '';
    this._foods.forEach((food) => {
    const foodItemElement = document.createElement('food-item');
    foodItemElement.food = food;
    this.shadowDOM.appendChild(foodItemElement);
  })
  }
}

customElements.define('food-list', foodList);