// Profile, Grid

class ProfileView extends React.Component{
    state = {
        activePost: {}
    }
    logout = () => { // PARTIALLY REFACTORED; NEED TO MOVE WHEREVER LOGOUT BUTTON GOES
        axios.delete(
            '/session'
        ).then((response) => {
            this.props.liftStateToApp1(
                {
                    loggedInUser: response.data.currentUser,
                    sessionInfo: response.data
                }
            )
        })
    }
    showActivePost = (postObject) => {
        this.setState(
            {
                activePost: postObject
            }
        )
        document.getElementById('post-modal').classList.toggle('hide')
    }
    componentDidMount = () => {
        this.setState(
            {
                activePost: {}
            }
        )
    }
    render = () => {
        return <div className="profile-page">
            <button onClick={this.props.changeView} value="search">Search</button>
            <button onClick={this.logout}>Log Out</button>
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
                editPost1={this.props.editPost}
                handleChange1={this.props.handleChange}
                deletePost1={this.props.deletePost}
            ></PostEach>
        </div>
    }
}
