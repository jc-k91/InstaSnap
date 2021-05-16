class LandingView extends React.Component{
    liftStateToLandingView = (stateObject) => {
        this.setState(stateObject)
    }
    render = () => {
        return <div className="profile-page">
            <header>
                <img
                    src="../../../img/instasnap-horiz-logo.png"
                    alt="instasnap logo"/>
            </header>
            <LoginForm
                liftStateToLandingView1={this.liftStateToLandingView}
                liftStateToApp2={this.props.liftStateToApp1}
            ></LoginForm>
            <hr></hr>
            <CreateAccount
                liftStateToApp2={this.props.liftStateToApp1}
            ></CreateAccount>
            <Footer></Footer>
        </div>
    }
}
