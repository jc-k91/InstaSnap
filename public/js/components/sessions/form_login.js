class LoginForm extends React.Component {
    render = () => {
        return <form onSubmit={this.props.login} className="form-group">
            <h4>User Login</h4>
            <input
                type="text"
                name="username"
                placeholder="username"
                onKeyUp={this.props.handleChange}
                className="form-control"
            /><br/>
            <input
                type="password"
                name="password"
                placeholder="password"
                onKeyUp={this.props.handleChange}
                className="form-control"
            /><br/>
            <input
                type="submit"
                value="Login"
            />
        </form>
    }
}
