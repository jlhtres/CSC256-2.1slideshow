const images = [
  "Project2.1/beach1.jpg",
  "Project2.1/beach2.jpg",
  "Project2.1/beach3.jpg",
  "Project2.1/beach4.jpg"
];

let currentIndex = 0;
const slideshow = document.getElementById("slideshow");

function showNextImage() {
  slideshow.src = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

showNextImage();
setInterval(showNextImage, 3000);
