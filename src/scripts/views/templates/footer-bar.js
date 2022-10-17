class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <p>Foodie Apps &#169; 2022, Muhammad Rayhan Rohadi</p>
        </footer>
        `;
  }
}

customElements.define('footer-bar', FooterBar);
