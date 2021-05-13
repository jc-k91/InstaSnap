class LandingView extends React.Component{
    render = () => {
        return <div className="profile-page">
            <h1>INSTASNAP LOGO GOES HERE</h1>
            <LoginForm
                handleChange={this.props.handleChange}
                login={this.props.login}
            ></LoginForm>
            <hr></hr>
            <CreateAccount
                handleChange={this.props.handleChange}
                createAccount={this.props.createAccount}
            ></CreateAccount>
        </div>
    }
}
