function Board(props){
    const board =props.board
    const onCellClick = props.onCellClick

    return <div className="board">
        <div className ="board-cell" data-index="0" onClick={onCellClick}>{board[0]}</div>
        <div className ="board-cell" data-index="1" onClick={onCellClick}>{board[1]}</div>
        <div className ="board-cell" data-index="2" onClick={onCellClick}>{board[2]}</div>
        <div className ="board-cell" data-index="3" onClick={onCellClick}>{board[3]}</div>
        <div className ="board-cell" data-index="4" onClick={onCellClick}>{board[4]}</div>
        <div className ="board-cell" data-index="5" onClick={onCellClick}>{board[5]}</div>
        <div className ="board-cell" data-index="6" onClick={onCellClick}>{board[6]}</div>        
        <div className ="board-cell" data-index="7" onClick={onCellClick}>{board[7]}</div>
        <div className ="board-cell" data-index="8" onClick={onCellClick}>{board[8]}</div>

    </div>
}