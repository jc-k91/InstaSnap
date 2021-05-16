class Result extends React.Component{
    updateView = () => {
        this.props.liftStateToApp3(
            {
                activeProfile: this.props.user1,
                currentView: 'profile'
            }
        )
    }
    render = () => {
        return <button
            onClick={this.updateView}
            value='profile'
            profileid={this.props.user1._id}
            className="btn"
        >{this.props.user1.username}</button>
    }
}
