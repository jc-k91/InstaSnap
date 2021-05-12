class CreateAccount extends React.Component {
    render = () => {
        return <form onSubmit={this.props.createAccount}>
            <input type="text" placeholder="Username" name="username" onKeyUp={this.props.handleChange} />
            <input type="password" placeholder="Password" name="password" onKeyUp={this.props.handleChange} />
            <input type="text" placeholder="Profile Pic URL" name="profilePic" onKeyUp={this.props.handleChange} />
            <input type="text" placeholder="Bio" name="bio" onKeyUp={this.props.handleChange} />
            <input type="submit" value="Create Account"/>
        </form>
    }
}
