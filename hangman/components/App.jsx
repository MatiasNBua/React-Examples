
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { view: 'select word', result: null, wordShown: null, counter: 10 }
    }
    handleOnChooseWordFormSubmit = event => {
        // event.preventDefault()
        const wordSelected = event.target.input.value

        event.target.reset()

        this.setState({ result: wordSelected, view: 'playing', wordShown: "_".repeat(wordSelected.length) })
    }

    handleOnCharacterForm = event => {
        const charTried = event.target.input.value

        event.target.reset()
        let newWordShown = this.state.wordShown.split('')
        if (this.state.result.includes(charTried)) {
    
            for (let i = 0; i < this.state.result.length; i++)
                if (this.state.result[i] === charTried)
                    newWordShown[i] = charTried
                    
            this.setState({ wordShown: newWordShown.join('') })
           
            // newWordShown = newWordShown.map((word, index) => {
            //     if (indexes.inclides(index))

            // })
        } 
        else {
            const newCounter = this.state.counter - 1
            this.setState({ counter: newCounter })
            if (newCounter === 0) {
                this.setState({ view: 'lose' })
            }
            
        }
        if (this.state.result===newWordShown.join('')){
            this.setState({view: 'win'})
        }
        

    }




    render() {
        return (
            <main>
                {
                    this.state.view === "select word" &&
                    <Form placeholder="enter a word" onSubmit={this.handleOnChooseWordFormSubmit} buttonText="START" />
                }
                {
                    this.state.view === "playing" &&
                    <>
                        <h1 className="wordShown">{this.state.wordShown}</h1>
                        <Form placeholder="enter a character" buttonText="TRY" onSubmit={this.handleOnCharacterForm} />
                        <div className="tries">Tries:{this.state.counter}</div>
                    </>
                }
                {this.state.view === "lose" &&
                    <>
                        <h1 className="wordShown">{this.state.wordShown}</h1>
                        <div className="tries">Tries:{this.state.counter}</div>
                        <div className="resultado">You lose the game</div>
                        <div className="palabra-corecta">{this.state.result}</div>
                        <button className="button">Try again</button>
                    </>
                }
                {this.state.view === "win" &&
                    <>
                        <h1 className="wordShown">{this.state.wordShown}</h1>
                        <div className="tries">Tries:{this.state.counter}</div>
                        <div className="resultado">You won the game</div>
                        <button className="button">Try again</button>
                    </>
                }

            </main>
        )
    }
}