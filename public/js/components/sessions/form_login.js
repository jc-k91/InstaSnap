class LoginForm extends React.Component {
  render = () => {
    return <form onSubmit={this.props.login}>
      <h4>User Login</h4>
      <input type="text" name="username" onKeyUp={this.props.handleChange} /><br/>
      <input type="password" name="password" onKeyUp={this.props.handleChange} /><br/>
      <input type="submit" value="Login" />
    </form>
  }
}
