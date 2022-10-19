const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((navLink) => navLink.addEventListener('click', () => {
  hamburgerMenu.classList.remove('active');
  navMenu.classList.remove('active');
}));

const data = [
  {
    id: 1,
    name: 'John Doe',
    position: 'manager',
    feedback: 'The Global Summit brings together the community of experts, academics, and activists who comprise the Creative Commons',
    img: {
      src: './img/customer_img_1.jpg',
      alt: 'tonic project preview',
    },
  },
  {
    id: 2,
    name: 'John Doe',
    position: 'manager',
    feedback: 'The Global Summit brings together the community of experts, academics, and activists who comprise the Creative Commons',
    img: {
      src: './img/customer_img_2.jpg',
      alt: 'tonic project preview',
    },
  },
  {
    id: 3,
    name: 'John Doe',
    position: 'manager',
    feedback: 'The Global Summit brings together the community of experts, academics, and activists who comprise the Creative Commons',
    img: {
      src: './img/customer_img_3.jpg',
      alt: 'tonic project preview',
    },
  },
  {
    id: 4,
    name: 'John Doe',
    position: 'manager',
    feedback: 'The Global Summit brings together the community of experts, academics, and activists who comprise the Creative Commons',
    img: {
      src: './img/customer_img_4.jpg',
      alt: 'tonic project preview',
    },
  },
  {
    id: 5,
    name: 'John Doe',
    position: 'manager',
    feedback: 'The Global Summit brings together the community of experts, academics, and activists who comprise the Creative Commons',
    img: {
      src: './img/customer_img_5.jpg',
      alt: 'tonic project preview',
    },
  },
  {
    id: 6,
    name: 'John Doe',
    position: 'manager',
    feedback: 'The Global Summit brings together the community of experts, academics, and activists who comprise the Creative Commons',
    img: {
      src: './img/customer_img_6.jpg',
      alt: 'tonic project preview',
    },
  },
];

const futureSpeakers = document.querySelector('.future-speakers');

function renderSpeakers() {
  data.forEach((speaker) => {
    futureSpeakers.innerHTML += `
        
        
            
    
            <div class="speakers-items">
                <img src="${speaker.img.src}" alt="" />
                <div>
                    <h4>${speaker.name}</h4>
                    <p class="position-item">${speaker.position}</p>
                    <p>
                        ${speaker.feedback}
                    </p>
                </div>
                
            </div>
        
        

        `;
  });
}

renderSpeakers();
