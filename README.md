# Tic-Tac-Toe Game

This project is a simple implementation of the classic Tic-Tac-Toe game built with React. It allows two players to play against each other in a traditional 3x3 grid.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### Installation
- Clone the repository:
```bash
git clone https://github.com/pritamkumarshahi/tic-tac-toe.git
```

- Navigate to the project directory:
```bash
cd tic-tac-toe
```

- Install, Run, Build:

```bash
npm install
npm start
npm run build
```

### Gameplay Instructions

1. The game is played by two players: Player 1 is "X" and Player 2 is "O".
2. Players take turns to click on the squares of the grid to place their symbol ("X" or "O").
3. The first player to get three of their marks in a horizontal, vertical, or diagonal row wins the game.
4. After the game ends, the winning squares are highlighted, and the game board fades out.
5. A "Reset Game" button allows you to start a new game.

### Features

1. Classic 3x3 Tic-Tac-Toe gameplay.
2. Visual feedback with highlighted winning combination.
3. A smooth fade-out effect for the game board after the game ends.
4. Reset button to play again.
5. Responsive design for different screen sizes.

## File Structure

- `tic-tac-toe/`: Root directory of the project.
- `public/`: Directory for public files, containing:
  - `index.html`: Entry point for the app.
- `src/`: Source files for the project:
  - `components/`: Contains React components.
    - `GameInfo.js`: Component for displaying game info (player turn, winner).
    - `Square.js`: Component for individual game squares.
    - `TicTac.js`: Main game component.
  - `styles/`: Directory for stylesheets.
    - `TicTac.css`: CSS file for the Tic-Tac-Toe game styles.
  - `App.js`: Main app component.
  - `index.js`: JavaScript entry point for React.
- `package.json`: File that lists project dependencies and scripts.
- `README.md`: Project documentation file.


### Future Enhancements
- Add a scoring system to keep track of wins.
- Implement an AI opponent for single-player mode.
- Add a timer or turn-based limit for each move.

## Deployment

```bash
npm run build
```

This will create an optimized production build of the game, which you can then deploy to platforms like GitHub Pages, Netlify, or Vercel.

### Now you're all set to enjoy a fun game of Tic-Tac-Toe!