function Form(props){
    return(
        <form 
        className ="form" onSubmit = {function (event){
            event.preventDefault()

            props.onSubmit(event)
        }}>
        <input placeholder = {props.placeholder} name ="input"/>
        <button type="submit">{props.buttonText}</button>
        </form>
    )
}
