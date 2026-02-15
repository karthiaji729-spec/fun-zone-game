// games.js

// Tic-Tac-Toe with AI
const ticTacToe = {
    board: ['','',''],
    currentPlayer: 'X',

    play: function(index) {
        if(this.board[index] === '') {
            this.board[index] = this.currentPlayer;
            if(this.checkWin(this.currentPlayer)) {
                console.log(this.currentPlayer + ' wins!');
                this.reset();
            } else {
                this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
                this.aiMove();
            }
        }
    },

    aiMove: function() {
        for(let i=0; i<3; i++) {
            for(let j=0; j<3; j++) {
                if(this.board[i*3+j] === '') {
                    this.board[i*3+j] = 'O';
                    if(this.checkWin('O')) {
                        console.log('AI wins!');
                        this.reset();
                        return;
                    }
                    this.board[i*3+j] = '';
                }
            }
        }
        this.board[this.board.indexOf('')] = 'O';
        this.currentPlayer = 'X';
    },

    checkWin: function(player) {
        const winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        return winPatterns.some(pattern => pattern.every(index => this.board[index] === player));
    },

    reset: function() {
        this.board = ['','',''];
        this.currentPlayer = 'X';
    }
};


// Snake and Ladder
const snakeAndLadder = {
    position: 0,

    rollDice: function() {
        return Math.floor(Math.random() * 6) + 1;
    },

    move: function() {
        const roll = this.rollDice();
        this.position += roll;
        console.log('You rolled: ' + roll);  
        this.checkPosition();
    },

    checkPosition: function() {
        // Assume ladder starting from 3 to 22, snake from 17 to 8
        if(this.position === 3) this.position = 22;
        else if(this.position === 17) this.position = 8;
        if(this.position >= 30) {
            console.log('You reached the end!');
            this.reset();
        }
    },

    reset: function() {
        this.position = 0;
    }
};


// Rock Paper Scissors
const rockPaperScissors = {
    play: function(playerChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        if(playerChoice === computerChoice) return 'Draw!';
        if(
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) return 'You win!';
        return 'You lose!';
    }
};


// Number Guessing Game
const numberGuessingGame = {
    numberToGuess: Math.floor(Math.random() * 100) + 1,
    attempts: 0,
    limit: 5,

    guess: function(playerGuess) {
        this.attempts++;
        if(playerGuess === this.numberToGuess) {
            console.log('Congratulations! You guessed correctly.');
            this.reset();
        } else if(this.attempts >= this.limit) {
            console.log('Game over! The number was ' + this.numberToGuess + '.');
            this.reset();
        } else {
            console.log(playerGuess < this.numberToGuess ? 'Higher!' : 'Lower!');
        }
    },

    reset: function() {
        this.numberToGuess = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
    }
};


// Saving scores to localStorage
const saveScore = (gameName, score) => {
    localStorage.setItem(gameName, score);
};
