class CreateAccount extends React.Component {
    handleFormInput = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    createAccount = (e) => {
        e.preventDefault()
        axios.post(
            '/users',
            this.state
        ).then((response) => {
            // LOG IN WITH NEWLY CREATED CREDENTIALS HERE
        })
    }
    render = () => {
        return <form onSubmit={this.createAccount} className="form-group">
            <h4>Create an Account</h4>
            <input
                type="text"
                placeholder="Username"
                name="username"
                onKeyUp={this.handleFormInput}
                className="form-control"
            />
            <br/>
            <input
                type="password"
                placeholder="Password"
                name="password"
                onKeyUp={this.handleFormInput}
                className="form-control"
            />
            <br/>
            <input
                type="text"
                placeholder="Profile Pic URL"
                name="profilePic"
                onKeyUp={this.handleFormInput}
                className="form-control"
            />
            <br/>
            <input
                type="text"
                placeholder="Bio"
                name="bio"
                onKeyUp={this.handleFormInput}
                className="form-control"
            />
            <br/>
            <input type="submit" value="Create Account"/>
        </form>
    }
}
