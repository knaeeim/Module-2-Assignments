//1. 

const button = document.getElementById('changeContentButton');
const contentDiv = document.getElementById('contentDiv');

button.addEventListener('click', () => {
    // Change the content of the div element
    contentDiv.textContent = 'New Message or Image';
    // You can also update the content with HTML elements, e.g., contentDiv.innerHTML = '<img src="image.jpg">';
});


//2. 

const clickButton = document.getElementById('clickButton');
const countDisplay = document.getElementById('countDisplay');

let clickCount = 0;

clickButton.addEventListener('click', () => {
    clickCount++;
    countDisplay.textContent = `Click count: ${clickCount}`;
});

//3.

const imageElement = document.getElementById('imageElement');
const switchToImage1Button = document.getElementById('switchToImage1');
const switchToImage2Button = document.getElementById('switchToImage2');

switchToImage1Button.addEventListener('click', () => {
    imageElement.src = 'image1.jpg';
});

switchToImage2Button.addEventListener('click', () => {
    imageElement.src = 'image2.jpg';
});

//4. 

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

