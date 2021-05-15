class LoginForm extends React.Component {
    handleFormInput = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    login = (e) => { // in setState, the author part makes it so the 'author' of a session will always be that person's username
        e.preventDefault()
        axios.post(
            '/session/login',
            this.state
        ).then((response) => {
            if (response.data.currentUser) {
                this.props.liftStateToApp2(
                    {
                        loggedInUser: response.data.currentUser,
                        sessionInfo: response.data,
                        currentView: "profile",
                        author: response.data.currentUser.username
                    }
                )
            } else if (response.data === "Invalid") {
                alert('Invalid login credentials. Please try again.')

            }
        })
    }
    render = () => {
        return <form onSubmit={this.login} className="form-group">
            <h4>User Login</h4>
            <input
                type="text"
                name="username"
                placeholder="username"
                onKeyUp={this.handleFormInput}
                className="form-control"
            /><br/>
            <input
                type="password"
                name="password"
                placeholder="password"
                onKeyUp={this.handleFormInput}
                className="form-control"
            /><br/>
            <input
                type="submit"
                value="Login"
            />
        </form>
    }
}
