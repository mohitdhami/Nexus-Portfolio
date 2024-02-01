
const texts = [
    "Setting standards and quality in web products",
    "Elevating brands and fostering growth",
    "Providing a dynamic and personalized educational experience",
];
let currentIndex = 0;

// Function to change text
function changeText() {
    const changingText = document.getElementById('changingText');
    changingText.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}

// Set interval to change text every 3 seconds
setInterval(changeText, 2000);
