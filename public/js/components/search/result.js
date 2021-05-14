class Result extends React.Component{
    render = () => {
        return <h3
            onClick={this.props.changeView2}
            value='profile'
            profileId={this.props.user._id}
        >{this.props.user.username}</h3>
    }
}
