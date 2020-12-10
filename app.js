class App extends React.Component {
    state = {
        name: "",
        message: "",
        posts: []
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const allInput = {
            name: this.state.name,
            message: this.state.message,
        }
        this.setState({
            posts: this.state.posts.concat(allInput)
        })

    }

    render(){
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h2 className="form-title">Say something</h2>
                <input className="input-name" id="inputName" type="text" placeholder="Your Name"
                onChange={this.handleNameChange}  
                />
                <textarea className="input-message" id="inputMessage" rows="5" placeholder="Your comment"
                onChange={this.handleMessageChange}
                />       
                <input className="input-submit" type="submit" value="Envoyer"/>        
            </form>
        )
        
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));