class ProfileView extends React.Component{
    render = () => {
        return <div className="profile-page">
            <h1>This is the profile page</h1>
            <button onClick={this.props.logout}>Log Out</button>
        </div>
    }
}
