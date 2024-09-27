const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const message = document.getElementById('message');
const teaseMessage = document.getElementById('teaseMessage');
const imageContainer = document.getElementById('imageContainer');

// Load sound elements
const hoverSound = document.getElementById('hoverSound');
const clickSound = document.getElementById('clickSound');

const teaseMessages = [
  "Are you sure you want to click that Jaipur Girl?",
  "Rathore,Come on, don't say no!",
  "Navya,I know you really want to say YES!",
  "Shorty,The NO button is not the answer!",
  "Marwadi,You can't escape this love!"
];

// Function to move the "NO" button randomly and display messages
noButton.addEventListener('mouseover', () => {
  const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));

  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;

  // Play sound effect when hovering over "NO" button
  hoverSound.play();

  // Display random teasing messages
  const randomMessageIndex = Math.floor(Math.random() * teaseMessages.length);
  teaseMessage.textContent = teaseMessages[randomMessageIndex];
});

// Action when the "YES" button is clicked
yesButton.addEventListener('click', () => {
  message.textContent = "I knew you'd say YES!";
  document.querySelector('.buttons').style.display = 'none';
  document.body.style.backgroundColor = '#ffeb3b';
  message.style.opacity = '1';
  
  // Play click sound when "YES" is clicked
  clickSound.play();
  
  
});
