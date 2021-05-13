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
                currentUser={this.props.currentUser}
            ></UserProfile>
            <GridView
                userPosts={this.props.currentUser.posts}
                updateActivePost={this.showActivePost}
            ></GridView>
            <NewPostForm
                handleChange={this.props.handleChange}
                createPost={this.props.createPost}
                currentUser={this.props.currentUser}
            ></NewPostForm>
            <PostEach
                activePost={this.state.activePost}
            ></PostEach>
        </div>
    }
}
