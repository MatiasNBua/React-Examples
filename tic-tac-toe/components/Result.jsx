function Result(props){
    const result = props.result
    const onPlayAgainClick = props.onPlayAgainClick

    return result && <>
    <p>{result.lenght ===1 ?'winner' : 'draw'}:{result}</p>
    <button classname=""onClick ={onPlayAgainClick}>Play again</button>
    </>
}