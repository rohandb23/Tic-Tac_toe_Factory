const Cell = require("./Cell")
class Board{
    constructor(){
        this.cells = [new Cell, new Cell, new Cell, new Cell, new Cell, new Cell, new Cell, new Cell, new Cell]
    }

    isEmpty(cellNumber){
        return this.cells[cellNumber].isEmpty()
    }

    printBoard(){
        console.log(this.cells);
    }
    
    analyse(){
        console.log("in analyse method");
        //Check rows
        for (let i = 0; i < 9; i += 3) {
            if (this.cells[i] !== '' && this.cells[i] === this.cells[i + 1] && this.cells[i] === this.cells[i + 2]) {
                console.log("in checking method");
                return true;
            }
        }

        // Check columns
        for (let i = 0; i < 3; i++) {
            //console.log("in coloumn checking mrthod");
            if (this.cells[i] !== '' && this.cells[i] === this.cells[i + 3] && this.cells[i] === this.cells[i + 6]) {
                console.log("in if methd");
                return true;
            }
        }
    
        // Check diagonals
        if (this.cells[0] !== '' && this.cells[0] === this.cells[4] && this.cells[0] === this.cells[8]) {
            return true
        }
    
        if (this.cells[2] !== '' && this.cells[2] === this.cells[4] && this.cells[2] === this.cells[6]) {
            return true
        }
    
        // Check for a tie
        if (this.cells.forEach(element => {
            !this.cells.includes('')
        })) {
            console.log("in tie");
            return 'T';
        }

        return false
    }

    checkWinner(symbol, analyzeWinner){
        console.log("in check winner method");
        if(analyzeWinner == true){
            return [symbol, "win"]
        }
        if(analyzeWinner == 'T'){
            return ["", "draw"]
        }
        if(analyzeWinner == false){
            return ["", ""]
        }

    }
}

module.exports = Board