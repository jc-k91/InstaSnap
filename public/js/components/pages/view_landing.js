class LandingView extends React.Component{
    render = () => {
        return <div className="profile-page">
            <header>
                <img src="../../../img/instasnap-horiz-logo.png" alt="instasnap logo" />
            </header>
            <LoginForm
                handleFormInput1={this.handleFormInput}
                login1={this.props.login}
                liftStateToApp2={this.props.liftStateToApp1}
            ></LoginForm>
            <hr></hr>
            <CreateAccount
                handleFormInput1={this.handleFormInput}
                /* ADD LOGIN CALLBACK FUNCTION TO LOG IN WHEN CREATING ACCOUNT */
            ></CreateAccount>
        </div>
    }
}
