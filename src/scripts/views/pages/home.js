import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="content">
            <div class="restaurant">
                <h1 class="restaurant__label">Explore Restaurant</h1>
                <div id="posts" class="posts"></div>    
            </div>
            <blockquote class="quotes">
              Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. 
              Food has a culture. It has a history. It has a story. It has relationships.
              <span>- Winona LaDuke</span>
            </blockquote>
        </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await TheRestoDbSource.home();
    const restosContainer = document.querySelector('#posts');
    restaurants.forEach((restaurant) => {
      restosContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
