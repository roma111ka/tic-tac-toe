class TicTacToe {
    constructor() {
        this.board =
        [[null,null,null],
        [null,null,null],
        [null,null,null]];
        this.playerSymbol ='x';
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, colIndex) {
        if(this.board[rowIndex][colIndex]===null){
            this.board[rowIndex][colIndex] = this.playerSymbol;
            this.playerSymbol === 'x'? this.playerSymbol = 'o': this.playerSymbol ='x';
        }
    }

    isFinished() {
        return (this.isDraw() || this.getWinner()) ? true : false;
    }

    getWinner() {
        if ( this.board[0][0] !== null && this.board[0][0] ===  this.board[1][1] && this.board[1][1] === this.board[2][2]) {
            return this.board[0][0];
        }else if (this.board[0][2] !== null && this.board[0][2] ===  this.board[1][1] && this.board[1][1] === this.board[2][0]){
            return this.board[0][2];
        }else if (this.board[0][0] !== null && this.board[0][0] ===  this.board[0][1] && this.board[0][1] === this.board[0][2]){
            return this.board[0][0];
        }else if (this.board[1][0] !== null && this.board[1][0] ===  this.board[1][1] && this.board[1][1] === this.board[1][2]){
            return this.board[1][0];
        }else if (this.board[2][0] !== null && this.board[2][0] ===  this.board[2][1] && this.board[2][1] === this.board[2][2]){
            return this.board[2][0];
        }else if (this.board[0][2] !== null && this.board[0][2] ===  this.board[1][1] && this.board[1][1] === this.board[2][0]){
            return this.board[0][2];
        }else if (this.board[0][0] !== null && this.board[0][0] ===  this.board[1][0] && this.board[1][0] === this.board[2][0]){
             return this.board[0][0];
        }else if (this.board[0][1] !== null && this.board[0][1] ===  this.board[1][1] && this.board[1][1] === this.board[2][1]){
             return this.board[0][1];
        }else if (this.board[0][2] !== null && this.board[0][2] ===  this.board[1][2] && this.board[1][2] === this.board[2][2]){
            return this.board[0][2];
        }else return null;    
    }

    noMoreTurns() {
        for(let i =0; i< this.board.length;i++){
            for (let j = 0; j < this.board.length; j++) {
               if(this.board[i][j]===null){
                    return false;
               }
            }
        }
        return true;
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner()) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
