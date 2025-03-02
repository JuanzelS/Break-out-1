Breakout Game (OOP Refactor)

Project Overview
This is a refactored version of the classic Breakout game, built using JavaScript, HTML5 Canvas, and Object-Oriented Programming (OOP) principles. The game was originally implemented using a procedural approach and has been improved by creating modular classes for different game components like the Ball, Paddle, Bricks, Score, and Lives.

Features
- Classic Breakout gameplay
- Object-Oriented Programming (OOP) structure
- Modular and reusable codebase
- Improved code organization and readability
- Responsive game loop

Project Structure
/BreakoutGame
  /index.html       - Main HTML file
  /style.css        - Styling for the game
  /app.js           - Main game logic and event handlers
  /game.js          - Game class (manages game flow)
  /paddle.js        - Paddle class
  /ball.js          - Ball class
  /brick.js         - Brick class
  /score.js         - Score class
  /lives.js         - Lives class
  /.gitignore       - Files to exclude from version control
  /README.md        - Project documentation

Technologies Used
- JavaScript (ES6+)
- HTML5 Canvas
- CSS
- Git & GitHub for version control

How to Play
1. Open index.html in your browser.
2. Move the paddle using the left and right arrow keys.
3. Break all the bricks by bouncing the ball off the paddle.
4. If you lose all your lives, the game is over.
5. Try to get the highest score!

Installation & Setup
1. Clone the repository:
   git clone https://github.com/your-username/BreakoutGame.git
2. Navigate to the project folder:
   cd BreakoutGame
3. Open index.html in your browser.

Development & Contribution
Running the Game:
- Open the index.html file in a browser.
- Modify JavaScript files as needed.

Linting & Code Quality:
- This project follows the Airbnb JavaScript Style Guide.
- Install ESLint and run:
  npx eslint .

Creating a New Branch:
1. Create a new branch for any changes:
   git checkout -b feature-branch-name
2. Commit and push your changes:
   git commit -m "Added feature X"
   git push origin feature-branch-name
3. Open a pull request on GitHub.

Stretch Challenges (Optional)
- Implement a Game class to manage all game elements.
- Improve collision detection.
- Replace alert() messages with a custom modal overlay.
- Recreate the original Breakout game look.

License
This project is open-source and available under the MIT License.

