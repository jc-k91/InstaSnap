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
    toggleActivePost = (postObject) => {
        this.setState(
            {
                activePost: postObject
            }
        )
        document.getElementById('post-modal').classList.toggle('hide')
    }
    liftStateToProfileView = (stateObject) => {
        console.log('ProfileView state updated');
        this.setState(stateObject)
    }
    render = () => {
        return <div className="profile-page">
            <button onClick={this.props.changeView1} value="search">Search</button>
            <button onClick={this.logout}>Log Out</button>
            <UserProfile
                activeProfile2={this.props.activeProfile1}
            ></UserProfile>
            <GridView
                activeProfile2={this.props.activeProfile1}
                toggleActivePost1={this.toggleActivePost}
            ></GridView>
            <NewPostForm
                loggedInUser2={this.props.loggedInUser1}
                liftStateToProfileView1={this.liftStateToProfileView}
                liftStateToApp2={this.props.liftStateToApp1}
            ></NewPostForm>
            <PostEach
                activePost1={this.state.activePost}
                liftStateToApp2={this.props.liftStateToApp1}
                liftStateToProfileView1={this.liftStateToProfileView}
            ></PostEach>
        </div>
    }
}
