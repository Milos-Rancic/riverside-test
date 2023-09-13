import _ from 'lodash';
import './nesto.less';

console.log('aaaaaaa');

///////////////////////////////////////
// Code for homepage numbers incrementation
///////////////////////////////////////
let incrementTime = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
      incrementCount(".goals_increment-time")
}, { threshold: [1] });

incrementTime.observe(document.querySelector(".goals_increment-time"));

let incrementCost = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
      incrementCount(".goals_increment-cost")
}, { threshold: [1] });

incrementCost.observe(document.querySelector('.goals_increment-cost'));

let incrementQuality = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
      incrementCount(".goals_increment-quality")
}, { threshold: [1] });

incrementQuality.observe(document.querySelector('.goals_increment-quality'));

function incrementCount(element){
   const counters = document.querySelectorAll(element);
   const speed = 300;

   counters.forEach((counter) => {
   const updateCount = () => {
      // data-target holds the value to which the number will be incremented
      // and is set in the editor
      let target = parseInt(counter.getAttribute('data-target'));
      let count = parseInt(counter.innerText);
      let increment = Math.ceil(target / speed);

      // element with class '.goals_increment-quality' needs to be incremented by 0.1
      // and other elements are incremented by target / speed
      if(element === '.goals_increment-quality'){
         increment = 0.1;
         target = parseFloat(counter.getAttribute('data-target'));
         count = parseFloat(counter.innerText);
         if (count < target) {
             counter.innerText = (count + increment).toFixed(1);
             setTimeout(updateCount, 1);
          } else {
             counter.innerText = target;
             counter.parentElement.style.color = '#fff';
          }
      } else {
      	if (count < target) {
           counter.innerText = count + increment;
           setTimeout(updateCount, 1);
        } else {
           counter.innerText = target;
           counter.parentElement.style.color = '#fff';
        }
      }
      
   };
   updateCount();
   });
}

///////////////////////////////////////
// Code for homepage swiper slider 
///////////////////////////////////////
window.addEventListener('DOMContentLoaded', function(){
  const swiper = new Swiper('.users-swiper', {

    // Optional parameters
    direction: 'horizontal',
    loop: false,
    dynamicBullets: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    slidesPerView: "auto",
    spaceBetween: 16,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 767px
      767: {
        slidesPerView: 2.5,
        spaceBetween: 16
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 16
      },
    },
    
  });
});

  //////////////////////////////////////////////////
  // Stop body scroll when mobile menu is open
  //////////////////////////////////////////////////
  const body = document.body;
  let isMenuOpen = false;

  const navigationButton = document.getElementById("w-nav-button");
  navigationButton.addEventListener('click', function (event) {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
   });



