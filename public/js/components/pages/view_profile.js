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
            <ProfileNav
                changeView2={this.props.changeView1}
                logout1={this.logout}
                loggedInUser2={this.props.loggedInUser1}
                liftStateToApp2={this.props.liftStateToApp1}
                activeProfile2={this.props.activeProfile1}
            ></ProfileNav>
            <UserProfile
                activeProfile2={this.props.activeProfile1}
            ></UserProfile>
            <GridView
                activeProfile2={this.props.activeProfile1}
                toggleActivePost1={this.toggleActivePost}
            ></GridView>
            { this.props.activeProfile1 === this.props.loggedInUser1
                ?
                    <NewPostForm
                        loggedInUser2={this.props.loggedInUser1}
                        liftStateToProfileView1={this.liftStateToProfileView}
                        liftStateToApp2={this.props.liftStateToApp1}
                    ></NewPostForm>
                :
                    null
            }
            <PostEach
                activePost1={this.state.activePost}
                activeProfile2={this.props.activeProfile1}
                loggedInUser2={this.props.loggedInUser1}
                liftStateToApp2={this.props.liftStateToApp1}
                liftStateToProfileView1={this.liftStateToProfileView}
            ></PostEach>
            <Footer></Footer>
        </div>
    }
}

// REPLACED BY <PROFILENAV> - OKAY TO DELETE?
// <button
//     onClick={this.props.changeView1}
//     value="search"
//     className="btn">
//         Search
// </button>
// <button
//     onClick={this.logout}
//     className="btn">
//         Log Out
// </button>
