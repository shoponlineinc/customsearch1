    const elementsToChangeColor = document.querySelectorAll('.container, #search-bar, .custom-button');
    let colorIndex = 0;
    const colors = ['#ff0000', '#00ff00', '#0000ff']; // You can add more colors

    function changeColors() {
      colorIndex = (colorIndex + 1) % colors.length;
      const color = colors[colorIndex];

      elementsToChangeColor.forEach(element => {
        element.style.borderColor = color;
      });
    }

    setInterval(changeColors, 700); // Change border colors every 0.7 seconds

    function searchOnEnter(event) {
      if (event.key === 'Enter') {
        const query = document.getElementById('search-bar').value;
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
      }
    }

    // Clear the search input when the page is reloaded
    window.onload = function() {
      document.getElementById('search-bar').value = '';
    };

    // JavaScript code for creating fireflies
    function createFireflies() {
      const container = document.querySelector('.fireflies-container');
      const numFireflies = 5; // Number of fireflies you want every 600ms

      setInterval(() => {
        for (let i = 0; i < numFireflies; i++) {
          const firefly = document.createElement('div');
          firefly.className = 'firefly';
          const x = Math.random() * 100; // Random X position
          const y = Math.random() * 100; // Random Y position
          const randomColor = getRandomColor(); // Get a random color
          firefly.style.left = `${x}%`;
          firefly.style.top = `${y}%`;
          firefly.style.backgroundColor = randomColor;
          container.appendChild(firefly);

          setTimeout(() => {
            container.removeChild(firefly);
          }, 5000); // Remove firefly after 5 seconds
        }
      }, 300); // Add fireflies every 600 milliseconds
    }

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    createFireflies();