// Array holding the relative file paths to each beach image
const images = [
  "Project2.1/beach1.jpg",
  "Project2.1/beach2.jpg",
  "Project2.1/beach3.jpg",
  "Project2.1/beach4.jpg"
];

// Index to keep track of the current image in the slideshow
let currentIndex = 0;

// Get a reference to the <img> element where the slideshow will display
const slideshow = document.getElementById("slideshow");

// Function to update the image source to the next image in the array
function showNextImage() {
  // Set the src attribute of the image to the current image path
  slideshow.src = images[currentIndex];

  // Move to the next index, looping back to the start when reaching the end
  currentIndex = (currentIndex + 1) % images.length;
}

// Show the first image immediately when the page loads
showNextImage();

// Change the image every 3 seconds (3000 milliseconds)
setInterval(showNextImage, 3000);
