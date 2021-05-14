// Profile, Grid

class ProfileView extends React.Component{
    state = {
        activePost: {}
    }
    showActivePost = (postObject) => {
        this.setState(
            {
                activePost: postObject
            }
        )
        document.getElementById('post-modal').classList.toggle('hide')
    }
    render = () => {
        return <div className="profile-page">
            <button onClick={this.props.logout}>Log Out</button>
            <UserProfile
                currentUser1={this.props.currentUser}
            ></UserProfile>
            <GridView
                currentUser1={this.props.currentUser}
                updateActivePost={this.showActivePost}
            ></GridView>
            <NewPostForm
                handleChange1={this.props.handleChange}
                createPost1={this.props.createPost}
                currentUser1={this.props.currentUser}
            ></NewPostForm>
            <PostEach
                activePost={this.state.activePost}
            ></PostEach>
        </div>
    }
}
