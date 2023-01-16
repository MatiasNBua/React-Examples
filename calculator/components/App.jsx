class App extends React.Component {
    constructor() {
        super()
        this.state = {result: null}
    }

    handleSubmit = event => {
        event.preventDefault()
        const form= event.target
        const operationsTextarea = form.operations
        const operations = operationsTextarea.value

        const result= eval(operations)

        this.setState({result})
    }
    // clearSubmit = event => {
    //     const form=event.target
    //     const clear= form.operations
    //     event.target.reset()
        
    // }

    render() {
        return <main>
            <form className="form" onSubmit={this.handleSubmit}>
                <textarea name="operations"></textarea>
                <div className="formButtons">
                <p>{this.state.result}</p>
                <button>=</button>
                {/* <button onSubmit={this.clearSubmit}>clear</button> */}
                </div>
            </form>
        </main>
    }
}