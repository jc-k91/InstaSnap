class LandingView extends React.Component{
    render = () => {
        return <div className="profile-page">
            <h1>INSTASNAP LOGO GOES HERE</h1>
            <LoginForm
                handleChange1={this.props.handleChange}
                login1={this.props.login}
            ></LoginForm>
            <hr></hr>
            <CreateAccount
                handleChange1={this.props.handleChange}
                createAccount1={this.props.createAccount}
            ></CreateAccount>
        </div>
    }
}
