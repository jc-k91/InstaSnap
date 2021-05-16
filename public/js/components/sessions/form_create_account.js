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
            // THIS AUTOMATICALLY LOGS IN USER WITH NEWLY CREATED CREDENTIALS
            axios.post(
                '/session/login',
                this.state
            ).then((response) => {
                if (response.data.currentUser) {
                    this.props.liftStateToApp2(
                        {
                            loggedInUser: response.data.currentUser,
                            activeProfile: response.data.currentUser,
                            sessionInfo: response.data,
                            currentView: "profile",
                            author: response.data.currentUser.username
                        }
                    )
                } else if (response.data === "Invalid") {
                    alert('Invalid login credentials. Please try again.')

                }
            })
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
