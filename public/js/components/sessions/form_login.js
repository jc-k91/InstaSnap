class LoginForm extends React.Component {
    handleFormInput = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    login = (e) => {
        e.preventDefault()
        axios.post(
            '/session/login',
            this.state
        ).then((response) => {
            // if (response.currentUser) {
                this.props.liftStateToApp2(
                    {
                        loggedInUser: response.data.currentUser,
                        sessionInfo: response.data,
                        currentView: "profile"
                    }
                )
            // }
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
