const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


// my next birthday
const newDate = new Date('12-25-2024 00:00:00').getTime()
const countdown = setInterval(() =>{
  
const date = new Date().getTime()
const diff = newDate - date

const month =  Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12) * 365)) / (1000 * 60 * 60 * 24 * (365.25 / 12)))
const days = Math.floor(diff % (1000 * 60 * 60 * 24 * (365.25 / 12)) / (1000 * 60 * 60 * 24))
const hours =  Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))


     
      document.querySelector(".minutes").innerHTML = minutes < 10 ? '0' + minutes :minutes
      document.querySelector(".hours").innerHTML = hours < 10 ? '0' + hours : hours
      document.querySelector(".days").innerHTML = days < 10 ? '0' + days : days
      document.querySelector(".months").innerHTML = month < 10 ? '0' + month : month

if(diff <= 0){
  clearInterval(countdown)
        document.querySelector(".countdown").innerHTML = 'Merry Christmas'
}

}, 1000)



document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelector('.slides');
  const slideCount = document.querySelectorAll('.slide').length;
  let currentIndex = 0;

  function showSlide(index) {
      const offset = -index * 100;
      slides.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      showSlide(currentIndex);
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds
});


