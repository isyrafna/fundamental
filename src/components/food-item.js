class foodItem extends HTMLElement {
  set foods(foods) {
    this._foods = foods;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="food-info">
      <img class="fan-food" src="../src/fotocont.jpg">
      <h2>${this._foods.name}</h2>
      <p>${this._foods.description}</p>
  </div>
    `;
  }
}

customElements.define("food-item", foodItem);
