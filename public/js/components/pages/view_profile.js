// Profile, Grid

class ProfileView extends React.Component{
    render = () => {
        return <div className="profile-page">
            <button onClick={this.props.logout}>Log Out</button>
            <UserProfile
                currentUser={this.props.currentUser}
            ></UserProfile>
            <GridView
                allPosts={this.props.allPosts}
            ></GridView>
        </div>
    }
}
