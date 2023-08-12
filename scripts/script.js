function toggleMenu() {
    document.getElementById("hamburgerNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("burgerBox").classList.toggle("open");
    document.getElementById("headFind").classList.toggle("open");
}

function checkToggleOff(tar)
{
    if ((document.getElementById("hamburgerNav").classList.contains("open") ) && (tar != "navCheck") && (tar !="hamburgerBtn"))
    {
        console.log("Shutting Nav Toggle")
        toggleMenu();
    }
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;


/*let slideIndex = 1;
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
}*/

function openTab(target, tab)
{
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("tabActive", "");
  }

  document.getElementById(tab).style.display = "block";
  target.target.classList.toggle("tabActive");
}

document.addEventListener('mouseover', (e)=>{
  let tar = e.target.id;
  if (tar == "hover-image")
  {
    if (!document.getElementById("hover-image").classList.contains("hover-blur"))
    {
      document.getElementById("hover-image").classList.add("hover-blur")
    }
    document.getElementById("hover-info").style.display = "block";
  }
});

document.addEventListener('click', function(e) {
  let tar = e.target.id;
  checkToggleOff(tar)
  if (e.target.classList.contains("tablinks"))
  {
    openTab(e, e.target.innerText);
  }
});