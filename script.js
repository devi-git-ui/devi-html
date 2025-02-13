document.getElementById('heartButton').addEventListener('click', () => {
    createHearts();
  });
  
  function createHearts() {
    const numberOfHearts = 50; // Number of hearts to create
    for (let i = 0; i < numberOfHearts; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = '❤️';
      heart.classList.add('heart-float');
      heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
      heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random animation speed
      document.body.appendChild(heart);
  
      // Remove hearts after animation ends to avoid clutter
      setTimeout(() => {
        heart.remove();
      }, 10000); // Matches the animation duration
    }
  }
  