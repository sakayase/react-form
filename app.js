class App extends React.Component {


    state = {
        name: "",
        message: "",
        posts: []
    }

    handleNameChange = (event) => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
        console.log(this.state.message)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name)
        const allInput = {
            name: this.state.name,
            message: this.state.message,
        }
        this.setState({
            posts: this.state.posts.concat(allInput)
        })
        console.log(this.state.posts);
    }
    render(){
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h2 className="form-title">Say something</h2>
                <input className="input-name" id="inputName" type="text" 
                onChange={this.handleNameChange}  
                />
                <input className="input-message" id="inputMessage" type="textarea" 
                onChange={this.handleMessageChange}
                />       
                <input className="input-submit" type="submit" value="submit"/>        
            </form>
        )
        
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));