import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import axios from 'axios';

const reviewsWrapper = document.querySelector('.reviews-swiper-wrapper');
const prevBtn = document.querySelector('.reviews-prev-btn');
const nextBtn = document.querySelector('.reviews-next-btn');
const reviewsContainer = document.querySelector('.reviews-container');
const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';

async function fetchReviews() {
  try {
    const response = await axios.get(BASE_URL);
    const reviews = response.data;
    console.log('response', response);

    if (!reviews || reviews.length === 0) {
      reviewsWrapper.innerHTML = '<li class="list_reviews">Not Found</li>';
      return;
    }

    const reviewsMarkup = reviews
      .map(
        review => `
          <li class="swiper-slide reviews-swiper-slide">
            
            <div class="reviews-desc">
             
              <div class="reviews-text">${review.review}</div>
            </div>
            <div class="reviews-info-author">
                <img 
                  src="${review.avatar_url}" 
                  loading="lazy" 
                  alt="${review.author}" 
                  class="reviews-img" 
                  width="48" 
                  height="48">
                   <h3 class="reviews-item-subtitle">${review.author}</h3>
            </div>
          </li>
        `
      )
      .join('');

    reviewsWrapper.innerHTML = reviewsMarkup;

    initSwiper();
  } catch (error) {
    console.error('Error fetching reviews:', error);

    reviewsWrapper.innerHTML = `<li class="list_reviews"><div class="error"><p>Not Found</p><p>Failed to load reviews. Please try again later.</p></div></li>`;
  }
}
Error('');

function Error(message) {
  const errorElement = document.createElement('div');
  errorElement.classList.add('error-message');
  errorElement.textContent = message;
  reviewsContainer.appendChild(errorElement);
}

function initSwiper() {
  new Swiper('.swiper-reviews', {
    modules: [Navigation, Keyboard],
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
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    allowTouchMove: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 2,
      },
    },
  });
}

function checkButtonsState() {
  // Кнопка "Назад" (Previous)
  if (swiperInstance.isBeginning) {
    prevBtn.classList.add('disabled'); // Додаємо клас "disabled"
    prevBtn.setAttribute('disabled', true); // Встановлюємо атрибут disabled
  } else {
    prevBtn.classList.remove('disabled'); // Видаляємо клас "disabled"
    prevBtn.removeAttribute('disabled'); // Забираємо атрибут disabled
  }

  // Кнопка "Далі" (Next)
  if (swiperInstance.isEnd) {
    nextBtn.classList.add('disabled'); // Додаємо клас "disabled"
    nextBtn.setAttribute('disabled', true); // Встановлюємо атрибут disabled
  } else {
    nextBtn.classList.remove('disabled'); // Видаляємо клас "disabled"
    nextBtn.removeAttribute('disabled'); // Забираємо атрибут disabled
  }
}

fetchReviews();
