class App extends React.Component{
    constructor(){
        super()
        this.state = startGame()
    }
    handleCellClick = event =>{
        const cell = event.target
        const index = cell.dataset.index
        const state = makeAMove(index, this.state)
        this.setState(state)

    }
    handlePlayAgainClick =()=>this.setState(startGame())
    render(){
        return <div className="container">
            <Board board = {this.state.board} onCellClick ={this.handleCellClick}/>
            <Result  result = {this.state.result} onPlayAgainClick ={this.handlePlayAgainClick}/>

        </div>
    }
}