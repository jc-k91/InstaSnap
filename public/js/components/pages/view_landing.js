class LandingView extends React.Component{
    liftStateToLandingView = (stateObject) => {
        this.setState(stateObject)
    }
    render = () => {
        return <div className="profile-page">
            <header>
            {(window.matchMedia('(max-width: 768px)').matches) ?
                <img src="../../../img/instasnap-sq-logo.png" alt="instasnap logo" />
            :
                null }
            </header>
            <LoginForm
                liftStateToLandingView1={this.liftStateToLandingView}
                liftStateToApp2={this.props.liftStateToApp1}
            ></LoginForm>
            <hr></hr>
            <CreateAccount
                liftStateToApp2={this.props.liftStateToApp1}
            ></CreateAccount>
        </div>
    }
}
