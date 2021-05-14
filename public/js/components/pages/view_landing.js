class LandingView extends React.Component{
    render = () => {
        return <div className="profile-page">
            <header>
            {(window.matchMedia('(max-width: 768px)').matches) ?
                <img src="../../../img/instasnap-sq-logo.png" alt="instasnap logo" />
            :
                null }
            </header>
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
