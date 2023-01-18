class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = { view: 'select word', result: null, wordShown: null, counter: 6}
    }

    handleOnChooseWordFormSubmit = event => {
        event.preventDefault()
        
        const wordSelected = event.target.input.value

        event.target.reset()

        this.setState({ result: wordSelected, view: 'playing', wordShown: "_".repeat(wordSelected.length) })
    }

    handleOnCharacterForm = event => {
        const charTried = event.target.input.value

        event.target.reset()
        
        let newWordShown = this.state.wordShown.split('')
        // VERIFICO SI EL CARACTER ESTÁ EN EL RESULTADO
        if (this.state.result.includes(charTried)) {
            // TRANSFORMO LA PALABRA MOSTRADA EN ARRAY

            // LOCALIZO LOS ÍNDICES EN LOS QUE ESTÁ EL CARACTER Y MODIFICO LA PALABRA MOSTRADA EN ESOS ÍNDICES
            for (let i = 0; i < this.state.result.length; i++)
                if (this.state.result[i] === charTried)
                    newWordShown[i] = charTried

            // MODIFICO EL ESTADO
            this.handleWinOrLose(newWordShown)
            this.setState({ wordShown: newWordShown.join('')})

        } else {
            const newCounter = this.state.counter - 1

            this.handleWinOrLose(newWordShown)
            this.setState({ counter: newCounter})
        }
    }

    handleWinOrLose = newWordShown => {
        if (this.state.counter === 0) this.setState({ view: "loser" })

        if (newWordShown.join("") === this.state.result) this.setState({ view: "winner" })
    }

    handlePlayAgain = (event) => {
        event.preventDefault()

        this.setState({ view: 'select word', result: null, wordShown: null, counter: 6})
    }

    render() {
        return (
            <main>

                {this.state.view === "select word" && <div className="container">
                    <h1>Hangman</h1>
                    <Form placeholder="enter a word" onSubmit={this.handleOnChooseWordFormSubmit} buttonText="¡Start Game!" />
                    </div>
                }

                {this.state.view === "playing" &&
                    <div className="container">
                        <p> ▼ Guess the word ▼ </p>
                        <h1 className="wordShown">{this.state.wordShown}</h1>
                        <Form placeholder="enter a character" buttonText="Try" onSubmit={this.handleOnCharacterForm} />
                        <h2> Remaining lives: {this.state.counter} </h2>
                    </div>
                }

{this.state.view === "loser" &&
                    <div div className="container">
                        <h1 className="wordShown">{this.state.wordShown}</h1>
                        <p>Loser!</p>
                        <p>The word was '{this.state.result}'</p>
                        <button onClick={this.handlePlayAgain}>Play again</button>
                    </div>
                }

{this.state.view === "winner" &&
                    <div className="container">
                        <h1 className="wordShown">{this.state.wordShown}</h1>
                        <p>Winner!</p>
                        <button onClick={this.handlePlayAgain}>Play again</button>
                    </div>
                }

            </main>
        )
    }
}