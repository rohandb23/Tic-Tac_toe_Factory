
class Cell{
    constructor(){
        this.mark = ''
    }

    isEmpty(){
        return this.mark == ''
    }

    markCell(symbol){
        //console.log("in cell class");
        return this.mark = symbol
    }
}

module.exports = Cell