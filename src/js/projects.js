const images = [
  {
    alt: 'Mimino website',
    img: './images/projects/projects-desk-03-min.png',
    sources: {
      mobile: {
        '1x': './images/projects/projects-mob-03-min.png',
        '2x': './images/projects/projects-mob-03@2x-min.png',
      },
      tablet: {
        '1x': './images/projects/projects-tabl-03-min.png',
        '2x': './images/projects/projects-tabl-03@2x-min.png',
      },
      desktop: {
        '1x': './images/projects/projects-desk-03-min.png',
        '2x': './images/projects/projects-desk-03@2x-min.png',
      },
    },
  },
  {
    alt: 'Vyshyvanka vibes Landing Page',
    img: './images/projects/projects-desk-04-min.png',
    sources: {
      mobile: {
        '1x': './images/projects/projects-mob-04-min.png',
        '2x': './images/projects/projects-mob-04@2x-min.png',
      },
      tablet: {
        '1x': './images/projects/projects-tabl-04-min.png',
        '2x': './images/projects/projects-tabl-04@2x-min.png',
      },
      desktop: {
        '1x': './images/projects/projects-desk-04-min.png',
        '2x': './images/projects/projects-desk-04@2x-min.png',
      },
    },
  },
  {
    alt: 'Power pulse webservice',
    img: './images/projects/projects-desk-05-min.png',
    sources: {
      mobile: {
        '1x': './images/projects/projects-mob-05-min.png',
        '2x': './images/projects/projects-mob-05@2x-min.png',
      },
      tablet: {
        '1x': './images/projects/projects-tabl-05-min.png',
        '2x': './images/projects/projects-tabl-05@2x-min.png',
      },
      desktop: {
        '1x': './images/projects/projects-desk-05-min.png',
        '2x': './images/projects/projects-desk-05@2x-min.png',
      },
    },
  },
  {
    alt: 'Chego jewelry website',
    img: './images/projects/projects-desk-06-min.png',
    sources: {
      mobile: {
        '1x': './images/projects/projects-mob-06-min.png',
        '2x': './images/projects/projects-mob-06@2x-min.png',
      },
      tablet: {
        '1x': './images/projects/projects-tabl-06-min.png',
        '2x': './images/projects/projects-tabl-06@2x-min.png',
      },
      desktop: {
        '1x': './images/projects/projects-desk-06-min.png',
        '2x': './images/projects/projects-desk-06@2x-min.png',
      },
    },
  },
  {
    alt: 'Energy flow webservice ',
    img: './images/projects/projects-desk-07-min.png',
    sources: {
      mobile: {
        '1x': './images/projects/projects-mob-07-min.png',
        '2x': './images/projects/projects-mob-07@2x-min.png',
      },
      tablet: {
        '1x': './images/projects/projects-tabl-07-min.png',
        '2x': './images/projects/projects-tabl-07@2x-min.png',
      },
      desktop: {
        '1x': './images/projects/projects-desk-07-min.png',
        '2x': './images/projects/projects-desk-07@2x-min.png',
      },
    },
  },
  {
    alt: 'Starlight studio landing page',
    img: './images/projects/projects-desk-08-min.png',
    sources: {
      mobile: {
        '1x': './images/projects/projects-mob-08-min.png',
        '2x': './images/projects/projects-mob-08@2x-min.png',
      },
      tablet: {
        '1x': './images/projects/projects-tabl-08-min.png',
        '2x': './images/projects/projects-tabl-08@2x-min.png',
      },
      desktop: {
        '1x': './images/projects/projects-desk-08-min.png',
        '2x': './images/projects/projects-desk-08@2x-min.png',
      },
    },
  },
  {
    alt: 'Fruitbox online store',
    img: './images/projects/projects-desk-09-min.png',
    sources: {
      mobile: {
        '1x': './images/projects/projects-mob-09-min.png',
        '2x': './images/projects/projects-mob-09@2x-min.png',
      },
      tablet: {
        '1x': './images/projects/projects-tabl-09-min.png',
        '2x': './images/projects/projects-tabl-09@2x-min.png',
      },
      desktop: {
        '1x': './images/projects/projects-desk-09-min.png',
        '2x': './images/projects/projects-desk-09@2x-min.png',
      },
    },
  },
];

const listProjects = document.querySelector('.projects-list_img');
const loadMoreButton = document.querySelector('.projects-button_loading');

loadMoreButton.addEventListener('click', loadProjects);

let loadedProjectsCount = 0;

function loadProjects() {
  const batchSize = 3;
  const remainingProjects = images.slice(
    loadedProjectsCount,
    loadedProjectsCount + batchSize
  );

  listProjects.insertAdjacentHTML(
    'beforeend',
    createMarkupProjects(remainingProjects)
  );

  loadedProjectsCount += remainingProjects.length;

  if (loadedProjectsCount >= images.length) {
    loadMoreButton.classList.add('hidden');
  }
}

function createMarkupProjects(images) {
  return images
    .map(
      ({ alt, img, sources: { mobile, tablet, desktop } }) => `
      <li>
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="${mobile['1x']} 1x, ${mobile['2x']} 2x"
          />
          <source
            media="(max-width: 1279px)"
            srcset="${tablet['1x']} 1x, ${tablet['2x']} 2x"
          />
          <source
            media="(min-width: 1280px)"
            srcset="${desktop['1x']} 1x, ${desktop['2x']} 2x"
          />
          <img
            class="projects-img"
            src="${img}"
            alt="${alt}"
          />
        </picture>  
        <div class="projects-blok_descr">
          <p class="projects-img_descr">React, JavaScript, Node JS, Git</p>
          <div class="projects-box_descr">
            <h3 class="projects-img_title">${alt}</h3>
            <a
              href="https://bulatovatati.github.io/landing-page-2.0/"
              class="projects-button_link"
              target="_blank"
            >
              <span class="projects-button_text">VISIT</span>
              <svg class="projects-button_icon" width="24" height="24">
                <use href="./icons/icons.svg#icon-arrow-projects"></use>
              </svg>
            </a>
          </div>
        </div> 
      </li>`
    )
    .join('');
}
