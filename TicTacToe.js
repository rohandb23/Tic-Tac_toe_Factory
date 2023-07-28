const Board = require("./Board")
const Player = require("./Player")

class TicTacToe{
    constructor(board, player1, player2){
        this.board = board
        this.player1 = player1
        this.player2 = player2
        this.turn = 0
        this.isGameOver = false
    }

    static newTicTacToe(player1Name, player2Name){
        if(typeof player1Name != "string" || typeof player2Name != "string"){
            return "invalid input type for name"
        }
        let board = new Board()
        let player1 = new Player(player1Name, "X")
        let player2 = new Player(player2Name, "O")
        return new TicTacToe(board, player1, player2)
    }

    play(cellNumber){
        if(this.isGameOver){
            return "game over"
        }
        if(typeof cellNumber !="number" || (cellNumber<0 && cellNumber>8)){
            return "invalid input for cell number"
        }
        let isCellEmpty = this.board.isEmpty(cellNumber)
        if(!isCellEmpty){
            return "cell is already filled"
        }
        let currentPlayer
        if(this.turn % 2 == 0){
            currentPlayer = this.player1
        }
        else{
            currentPlayer = this.player2
        }

        this.turn++

        currentPlayer.markCell(this.board.cells[cellNumber])

        this.board.printBoard()

        let analyzeWinner = this.board.analyse()

        let [winnerSymbol, gameState] = this.board.checkWinner(currentPlayer.symbol, analyzeWinner)

        console.log(winnerSymbol);
        console.log(gameState);
        if(gameState == ""){
            //console.log("in continue");
            return "continue playing"
        }
        if(gameState == "win"){
            if(winnerSymbol == "X"){
                this.isGameOver = true
                return this.player1.name + " win"
            }
            else{
                this.isGameOver = true
                return this.player2.name + " win"
            }
        }
        if(gameState == "draw"){
            return "game is draw"
        }
    }
}

let g1 = TicTacToe.newTicTacToe("rohan", "sarvesh")
console.log(g1.play(0))
console.log(g1.play(2))
console.log(g1.play(3));
console.log(g1.play(4));
console.log(g1.play(6));
console.log(g1.play(7));
console.log(g1.play(5));
console.log(g1.play(8));
console.log(g1.play(1));

// let g2 = TicTacToe.newTicTacToe("shubham", "ganesh")
// console.log(g2.play(1));