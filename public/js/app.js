class App extends React.Component{
    state = {
        loggedIn: false,
        currentView: "profile",
        allPosts: [],
        image: "",
        caption: "",
        currentUser: {}
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
    createPost = (e) => {
        e.preventDefault()
        axios.post(
            '/posts',
            this.state
        ).then((response) => {
            this.setState(
                {
                    allPosts: response.data,
                    author: "",
                    image: "",
                    caption: ""
                }
            )
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
        // console.log(e.target.value) // What the Farquad. This won't pull the value attritube for some reason...
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
    renderProfile = () => {
        this.setState(
            {
                pageView: "profile"
            }
        )
    }

    renderFunction = (pageViewComponent) => {
        this.render(pageViewComponent)
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


    // ------ RENDER ------
    render = () => {
        if (this.state.loggedIn === true) {
            if (this.state.currentView === "profile") {
                return <ProfileView
                    logout={this.logout}
                    allPosts={this.state.allPosts}
                    currentUser={this.state.currentUser}
                    changeView={this.changeView}
                    handleChange={this.handleChange}
                    createPost={this.createPost}
                ></ProfileView>
        /* RENDER OTHER PAGE VIEWS HERE */
            } else if (this.state.currentView === "a") {
                return null
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
