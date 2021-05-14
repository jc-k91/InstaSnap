class App extends React.Component{
    state = {
        loggedIn: false,
        currentView: "profile",
        currentUser: {},
        allUsers: [],
        username: 'jesse',// DELETE FOR FULL PRODUCTION DEPLOYMENT
        password: 'test'// DELETE FOR FULL PRODUCTION DEPLOYMENT
    }
    // ========== FUNCTIONS ==========
    // ------ USER ACCOUNT ------
    createAccount = () => {
        axios.post(
            '/users',
            this.state
        ).then((response) => {
            console.log(response) // THIS IS WHERE WE SHOULD AUTOMATICALLY LOG THE USER IN WITH THE NEW USER CREDENTIALS
        })
    }
    deleteAccount = () => {
        axios.delete(

        )
    }
    // ------ SESSION ------
    // in setState, the author part makes it so the 'author' of a session will always be that person's username
    // !== {} checks to make sure there IS a currentUser (not an empty object)
    login = (e) => {
        e.preventDefault()
        axios.post(
            '/session/login',
            this.state
        ).then((response) => {
            if (this.state.currentUser !== {}) {
                this.setState(
                    {
                        loggedIn: true,
                        currentUser: response.data,
                        author: response.data.username
                    }
                )
            }
        })
    }
    logout = () => {
        axios.delete(
            '/session'
        ).then((response) => {
            this.setState(
                {
                    loggedIn: false,
                    currentUser: {}
                }
            )
        })
    }

    // ------ POSTS ------
    // Had an issue with userResponse - after console logging it, determined we needed userResponse.data AND it was returning an array so we added [0] to return first result
    // double axios call reppin up in here
    createPost = (e) => {
        e.preventDefault()
        axios.post(
            '/posts',
            this.state
        ).then((postResponse) => {
            axios.get(
                '/users/' + this.state.currentUser.username
            ).then((userResponse) => {
                this.setState(
                    {
                        currentUser: userResponse.data[0],
                        image: "",
                        caption: ""
                    }
                )
            })
        })
    }
    editPost = (e) => {
        e.preventDefault()
        axios.put(
            '/posts/' + e.target.name,
            this.state,
            { new: true }
        ).then(
            (response) => {
                this.setState(
                    {
                        allPosts: response.data
                    }
                )
            }
        )
    }
    deletePost = (e) => {
        e.preventDefault()
        // console.log(e.target.value) // What the Farquad. This won't pull the value attribute for some reason...
        axios.delete(
            '/posts/' + e.target.getAttribute('value'),
            (err, deletedPost) => {
                console.log(err)
            }
        ).then((response) => {
            this.setState(
                {
                    allPosts: response.data
                }
            )
        })
    }
    // render pageview "profile" to show user's profile
    // once we have other views, we can use this
    renderProfile = () => {
        this.setState(
            {
                currentView: "profile"
            }
        )
    }

    // ------ SEARCH ------
    search = (e) => {
        e.preventDefault()
        axios.get(
            '/users/' + this.state.query
        ).then((response) => {
            console.log(response.data[0]);
            if (response.data[0]) {
                this.setState(
                    {
                        allUsers: response.data
                    }
                )
            } else {
                alert('no user found')
            }
        })
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
        axios.get('/posts').then((response) => {
            this.setState(
                {
                    allPosts: response.data
                }
            )
        })
    }

    changeView = (e) => {
        this.setState(
            {
                currentView: e.target.value
            }
        )
    }

    // ------ RENDER ------
    render = () => {
        if (this.state.loggedIn === true) {
            if (this.state.currentView === "profile") {
                return <ProfileView
                    logout={this.logout}
                    currentUser={this.state.currentUser}
                    changeView={this.changeView}
                    handleChange={this.handleChange}
                    createPost={this.createPost}
                    editPost={this.editPost}
                    deletePost={this.deletePost}
                ></ProfileView>
        /* RENDER OTHER PAGE VIEWS HERE */
            } else if (this.state.currentView === "search") {
                return <SearchView
                    handleChange={this.handleChange}
                    search={this.search}
                    allUsers={this.state.allUsers}
                    changeView={this.changeView}
                ></SearchView>
            } else if (this.state.currentView === "b") {
                return null
            } else if (this.state.currentView === "c") {
                return null
            }
        } else {
            return <LandingView
                handleChange={this.handleChange}
                login={this.login}
                createAccount={this.createAccount}
            ></LandingView>
        }
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
