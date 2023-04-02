class SearchBar extends HTMLElement {
connectedCallback() {
  this.render();
}

set clickEvent(event) {
  this._clickEvent = event;
  this.render();
}

get value() {
  return this.querySelector('#searchElement').value;
}
  
render() {
  this.innerHTML = `
  <search-Element class="searchbox">
                    <search-Element class="searchicon">
                        <i class=" fa-solid fa-magnifying-glass"></i>
                    </search-Element>
                    <search-Element class="searchinput">
                        <div>
                            <input type="text" class="input" placeholder="">
                            <button id="searchButtonElement" class="searchbtn" type="submit">Search</button>
                        </div>
                    </search-Element>
                </search-Element>
  `;

  this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);

}
}

customElements.define('search-bar', SearchBar);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       