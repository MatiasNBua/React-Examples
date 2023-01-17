function makeAMove(index, state) {
    let result = state.result
    if (result)
        return
    const board = state.board.slice(0)
    if (board[index])
        return
    let player = state.player
    board[index] = player
    if (checkLine(board, 0, 1, 2)
        || checkLine(board, 3, 4, 5)
        || checkLine(board, 6, 7, 8)
        || checkLine(board, 0, 3, 6)
        || checkLine(board, 1, 4, 7)
        || checkLine(board, 2, 5, 8)
        || checkLine(board, 0, 4, 8)
        || checkLine(board, 2, 4, 6)) 
        result = player
        else if (checkDraw(board))
        result ='xo'
        player = player === 'x'?'o':'x'
        return { player , board , result }
      
}