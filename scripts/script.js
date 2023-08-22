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


let slideIndex = 1;
if (document.querySelector(".slideshow-container"))
{
  showSlides(slideIndex);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

/* TAB SELECTOR */

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

/* BANNER */

function keepBannerClosed()
{
  let newSubmit = parseInt(1);
  localStorage.setItem("banner-closed", newSubmit);
  document.querySelector("#small-banner").style.display = "none";
}

function openBannerFirst()
{
  let bannerClosed = window.localStorage.getItem("banner-closed");
  if (bannerClosed != null)
  {
    document.querySelector("#small-banner").style.display = "none";
  } 
}

openBannerFirst();
/* HOVER EVENT LISTENER */
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

/* CLICK EVENT LISTENER*/

document.addEventListener('click', function(e) {
  let tar = e.target.id;
  checkToggleOff(tar)
  if (e.target.classList.contains("tablinks"))
  {
    openTab(e, e.target.innerText);
  }

  if (tar == "closeBanner")
  {
    keepBannerClosed()
  }

  if (e.target.classList.contains("prev"))
  {
    plusSlides(-1);
  }

  if (e.target.classList.contains("next"))
  {
    plusSlides(1);
  }
});

/* LAZY IMAGE LOADING */
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src");};
};

if("IntersectionObserver" in window) {
  console.log("In")
  const imgObserver = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
          if (item.isIntersecting) {
              loadImages(item.target);
              observer.unobserve(item.target);
          }
      });
  }, imgOptions);

  imagesToLoad.forEach((img) => {
      imgObserver.observe(img);
  });
} else {
  console.log("Failed")
  imagesToLoad.forEach((item) => {
      loadImages(item);
  });
}