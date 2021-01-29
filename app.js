// variables
const cards = document.querySelectorAll('.cards div'),
  sounds = document.querySelectorAll('audio'),
  bubbleContainer = document.querySelector('.bubbel'),
  colors = [
    "#22e707",
    "#e76107",
    "#3707e7",
    "#e7079c",
    "#e70707",
    "#07e7c2"
  ];

// Listner for cards 
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    card.style.transform = "scale(0.9)";
    sounds[index].currentTime = 0;
    sounds[index].play();
    createBubble(index);
    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 400);
  })
});

// Create bubble
function createBubble(index) {
  const bubble = document.createElement('div');
  bubbleContainer.appendChild(bubble);
  bubble.style.backgroundColor = colors[index];
  bubble.addEventListener('animationend', () => {
    bubble.remove();
  });
};

console.log(sounds);