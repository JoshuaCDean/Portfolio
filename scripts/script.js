function toggleMenu() {
    document.getElementById("hamburgerNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("burgerBox").classList.toggle("open");
    document.getElementById("headFind").classList.toggle("open");
}

function checkToggleOff(tar)
{
    if ((document.getElementById("hamburgerNav").classList.contains("open") ) && (tar != "navCheck"))
    {
        toggleMenu();
    }
}

document.addEventListener('click', function(e) {
    tar = e.target.id;
    checkToggleOff(tar)
});

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}