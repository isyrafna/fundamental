class SearchResult extends HTMLElement {
  set recommendations(value) {
    this.innerHTML = "";

    for (const item of value) {
      const li = document.createElement("li");
      li.textContent = item;
      this.appendChild(li);
    }
  }
}

customElements.define("search-result", SearchResult);
