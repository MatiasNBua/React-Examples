function Result(props) {
    const result = props.result
    const onPlayAgainClick = props.onPlayAgainClick

    return result && <>
        <p>{result.length === 2 ? 'Draw' : 'Winner'}: {result}</p>
        <button onClick={onPlayAgainClick}>Play again</button>
    </>
}