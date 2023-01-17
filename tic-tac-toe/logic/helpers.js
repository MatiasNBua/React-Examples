function checkLine(board , a, b , c){
    return board[a] !== null && board[a] === board[b]&& board[b]=== board[c]
}
function checkDraw(board){
    return board.every(element => element !== null)
}