class App extends React.Component{
    state = {
        // username: 'jesse',// DELETE FOR FULL PRODUCTION DEPLOYMENT
        // password: 'test'// DELETE FOR FULL PRODUCTION DEPLOYMENT
    }
    // ========== FUNCTIONS ==========
    // ------ POSTS ------
    editPost = (e) => {
        e.preventDefault()
        axios.put(
            '/posts/' + e.target.name,
            this.state,
            { new: true }
        ).then(
            (postResponse) => {
                // console.log("Response from editPost axios call: " + response.data);
                axios.get(
                    '/users/' + this.state.currentUser._id
                ).then((userResponse) => {
                    console.log(userResponse);
                    this.setState(
                        {
                            allPosts: postResponse.data
                        }
                    )
                })
            }
        )
    }

    // ------ SETTING STATE TO FORM INPUT ------
    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    // ------ ONLOAD DATA RETRIEVAL ------
    componentDidMount = () => {
        console.log('Page loaded')
        // FORCES LOGOUT ON PAGE LOAD/RELOAD
        axios.delete(
            '/session'
        ).then((response) => {
            this.setState(
                {
                    loggedInUser: response.data.currentUser,
                    sessionInfo: response.data
                }
            )
        })
    }

    changeView = (e) => {
        this.setState(
            {
                currentView: e.target.getAttribute('value')
            }
        )
    }

    liftStateToApp = (stateObject) => {
        this.setState(stateObject)
    }

    // ------ RENDER ------
    render = () => {
        /* IF SESSION IS DETECTED */
        if (this.state.sessionInfo) {
            /* PROFILE VIEW */
            if (this.state.currentView === "profile") {
                return <ProfileView
                    loggedInUser1={this.state.loggedInUser}
                    activeProfile1={this.state.activeProfile}
                    changeView1={this.changeView}
                    liftStateToApp1={this.liftStateToApp}
                ></ProfileView>
            /* SEARCH VIEW */
            } else if (this.state.currentView === "search") {
                return <SearchView
                    changeView1={this.changeView}
                    liftStateToApp1={this.liftStateToApp}
                    loggedInUser1={this.state.loggedInUser}
                    activeProfile1={this.state.activeProfile}
                ></SearchView>
            /* NEXT VIEW */
            } else if (this.state.currentView === "b") {
                return null
            } else if (this.state.currentView === "c") {
                return null
            } /* LOGGED IN VIEWS END ========== */
        } else { /* IF NO SESSION DETECTED */
            return <LandingView
                liftStateToApp1={this.liftStateToApp}
            ></LandingView>
        }
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
