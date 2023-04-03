class SearchInput extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    const inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.placeholder = "Search";

    shadowRoot.appendChild(inputEl);

    inputEl.addEventListener("input", this._onInput.bind(this));

    const autoRecEl = document.createElement("search-result");

    shadowRoot.appendChild(autoRecEl);
  }

  async _onInput(event) {
    const inputValue = event.target.value;

    if (inputValue === "") {
      const autoRecEl = this.shadowRoot.querySelector("search-result");
      autoRecEl.recommendations = [];
      return;
    }

    const recommendations = await this._fetchRecommendations(inputValue);

    const autoRecEl = this.shadowRoot.querySelector("search-result");

    autoRecEl.recommendations = recommendations;
  }

  async _fetchRecommendations(query) {
    const data = [
      "Apple",
      "Banana",
      "Cherry",
      "Date",
      "Elderberry",
      "Fig",
      "Grapefruit",
      "Honeydew",
      "Iced tea",
      "Jicama",
      "Kale",
      "Lemon",
      "Mango",
      "Nectarine",
      "Olive",
      "Papaya",
      "Quince",
      "Raspberry",
      "Spinach",
      "Tomato",
      "Ugli fruit",
      "Vanilla",
      "Watermelon",
      "Xigua",
      "Yellow squash",
      "Zucchini",
    ];

    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    return filteredData.slice(0, 5);
  }
}

customElements.define("search-input", SearchInput);
