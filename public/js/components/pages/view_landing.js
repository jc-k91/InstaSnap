class LandingView extends React.Component{
    render = () => {
        return <div className="profile-page">
            <h1>This is the landing page</h1>
            <LoginForm
                handleChange={this.props.handleChange}
                login={this.props.login}
            ></LoginForm>
        </div>
    }
}
