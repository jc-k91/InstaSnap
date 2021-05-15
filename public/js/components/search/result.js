class Result extends React.Component{
    updateView = () => {
        this.props.liftStateToApp3(
            {
                activeProfile: this.props.user,
                currentView: 'profile'
            }
        )
    }
    render = () => {
        return <button
            onClick={this.updateView}
            value='profile'
            profileid={this.props.user._id}
        >{this.props.user.username}</button>
    }
}
