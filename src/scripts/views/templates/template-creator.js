import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <img class="restaurant__poster" src="${CONFIG.BASE_URL_IMAGE + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
        <h3>Information</h3>
        <h4>City</h4>
        <p>${restaurant.city}</p>
        <h4>Address</h4>
        <p>${restaurant.address}</p>
        <h4>Rating</h4>
        <p>⭐️ ${restaurant.rating}</p>
        
    </div>
    <div class="restaurant__menu">
        <h4>Food:</h4>
        <p>${restaurant.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
        
    </div>
    <div class="restaurant__menu">
    <h4>Drinks:</h4>
        <p>${restaurant.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
    </div>
    <div class="restaurant__description">
        <h3>Description</h3>
        <p>${restaurant.description}</p>
    </div>
    <div class="restaurant__review">
        <h3>Customer Reviews:</h3>
        ${restaurant.customerReviews.reduce((show, value) => show.concat(`<br>

        <h5>${value.name}</h5>

        <p>${value.review}</p>

        <p>${value.date}</p>

        `), '')}
    </div>
`;

const createRestoItemTemplate = (restaurant) => `
<article class="post-item">
  <img class="post-item__thumbnail lazyload" src="${CONFIG.BASE_URL_IMAGE + restaurant.pictureId}" alt="${restaurant.name}">
  <div class="post-item__content">
    <h2 class="post-item__location"><a href="#">${restaurant.city}</a></h2>
    <h2 class="post-item__rate">Rating: ⭐️ ${restaurant.rating}</h2>
    <h2 class="post-item__title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h2>
    <p class="post-item__description">${restaurant.description}</p>
  </div>
</article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">❤
  </button>
`;

const createLikedRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="liked">❤
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createLikedRestaurantButtonTemplate,
};
