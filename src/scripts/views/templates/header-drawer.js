class HeaderDrawer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="header__inner">
            <h1 class="header__title">
            Foodie Apps
            </h1>
            <a id="menu" class="header__menu" href="javascript:void(0);">☰</a>
        </div>
          <nav id="drawer" class="nav">
          <ul class="nav__list">
              <li class="nav__item"><a href="#/home">Home</a></li>
              <li class="nav__item"><a href="#/favorite">Favorite</a></li>
              <li class="nav__item"><a href="https://www.linkedin.com/in/mrayhanr4869/">About</a></li>
          </ul>
          </nav>
          <div class="hero">
          <div class="hero__inner">
          <h2 class="hero__title">Nikmati Makanan Berkualitas Dari Berbagai Restaurant</h2>
          <p class="hero__tagline">Jadikan harimu semakin berharga dengan menikmati makanan berkualitas dari restaurant terpecaya.</p>
          </div>
          `;
  }
}

customElements.define('header-drawer', HeaderDrawer);
