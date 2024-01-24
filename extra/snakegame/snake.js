document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.querySelector('.game-container');
    const snakeElement = document.getElementById('snake');
    const foodElement = document.getElementById('food');
  
    let snake = [{ x: 10, y: 10 }];
    let direction = 'right';
    let food = getRandomPosition();
  
    function getRandomPosition() {
      const x = Math.floor(Math.random() * 15) * 20;
      const y = Math.floor(Math.random() * 15) * 20;
      return { x, y };
    }
  
    function update() {
      // Move the snake
      const head = { ...snake[0] };
      switch (direction) {
        case 'up':
          head.y -= 20;
          break;
        case 'down':
          head.y += 20;
          break;
        case 'left':
          head.x -= 20;
          break;
        case 'right':
          head.x += 20;
          break;
      }
  
      // Check if the snake eats the food
      if (head.x === food.x && head.y === food.y) {
        snake.push({ ...head });
        food = getRandomPosition();
        renderFood();
      } else {
        // Remove the tail of the snake
        snake.pop();
      }
  
      // Check for collisions with walls or itself
      if (
        head.x < 0 ||
        head.x >= 300 ||
        head.y < 0 ||
        head.y >= 300 ||
        checkCollision(head)
      ) {
        alert('Game Over!');
        resetGame();
      }
  
      // Update the snake array and render the snake
      snake.unshift(head);
      renderSnake();
    }
  
    function checkCollision(head) {
      return snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
    }
  
    function renderSnake() {
      snakeElement.innerHTML = '';
      snake.forEach(segment => {
        const segmentElement = document.createElement('div');
        segmentElement.style.left = segment.x + 'px';
        segmentElement.style.top = segment.y + 'px';
        snakeElement.appendChild(segmentElement);
      });
    }
  
    function renderFood() {
      foodElement.style.left = food.x + 'px';
      foodElement.style.top = food.y + 'px';
    }
  
    function resetGame() {
      snake = [{ x: 10, y: 10 }];
      direction = 'right';
      food = getRandomPosition();
      renderSnake();
      renderFood();
    }
  
    document.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowUp':
          direction = 'up';
          break;
        case 'ArrowDown':
          direction = 'down';
          break;
        case 'ArrowLeft':
          direction = 'left';
          break;
        case 'ArrowRight':
          direction = 'right';
          break;
      }
    });
  
    setInterval(update, 200);
  });
  