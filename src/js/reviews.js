import axios from 'axios';

const reviewsWrapper = document.querySelector('.reviews-swiper-wrapper');
const prevBtn = document.querySelector('.reviews-prev-btn');
const nextBtn = document.querySelector('.reviews-next-btn');
const reviewsContainer = document.querySelector('.reviews-container');
const BASE_URL = 'https://portfolio-js.b.goit.study/api-docs';

// Функція для отримання відгуків
async function fetchReviews() {
  try {
    const response = await axios.get('${BASE_URL}');
    const reviews = response.data;

    if (!reviews || reviews.length === 0) {
      reviewsWrapper.innerHTML = '<li>Not Found</li>';
      return;
    }

    // Створення розмітки для всіх відгуків
    const reviewsMarkup = reviews
      .map(
        review => `
          <li class="swiper-slide reviews-swiper-slide">
            <img 
              src="${review.avatar_url}" 
              loading="lazy" 
              alt="${review.author}" 
              class="reviews-img" 
              width="48" 
              height="48">
            <div class="reviews-desc">
              <h3 class="reviews-item-subtitle">${review.author}</h3>
              <div class="reviews-text">${review.review}</div>
            </div>
          </li>
        `
      )
      .join('');

    reviewsWrapper.innerHTML = reviewsMarkup;

    initSwiper();
  } catch (error) {
    console.error('Error fetching reviews:', error);
    Error('Failed to load reviews. Please try again later.');
    reviewsWrapper.innerHTML = '<li>Not Found</li>';
  }
}

function Error(message) {
  const errorElement = document.createElement('div');
  errorElement.classList.add('error-message');
  errorElement.textContent = message;
  reviewsContainer.appendChild(errorElement);
}

function initSwiper() {
  new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.reviews-next-btn',
      prevEl: '.reviews-prev-btn',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    on: {
      slideChange: checkButtonsState,
      afterInit: checkButtonsState,
    },
  });
}

function checkButtonsState() {
  const swiperInstance = document.querySelector('.swiper-reviews').swiper;
  if (swiperInstance.isBeginning) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }

  if (swiperInstance.isEnd) {
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }
}

fetchReviews();
