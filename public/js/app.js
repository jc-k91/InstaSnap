// HERE IS THE APP!
// App is the custom React component that will hold all of the render-able information for this app.

class App extends React.Component{
  /* State represents certain values of the App, which can be updated.
     - loggedIn begins as false, and is changed by the login function once it's triggered by a form on the landing page.
     - currentView begins as profile --- this isn't fully done yet
     - allUsers is an array
     - currentUser will be updated with a user's data, triggered by the login function from the landing page */
    state = {
        loggedIn: false,
        currentView: "profile",
        allUsers: [],
        currentUser: {}
    }

    // ========== FUNCTIONS ==========
    // ------ USER ACCOUNT ------
    /* createAccount is a method that belongs to the App component.
       It queries the database at the /users route, and intakes the component's current state.
          !!! How does this.state translate into a new piece of user data?! !!!
       Then, it takes the response from the database and console logs the response. */
    createAccount = () => {
        axios.post(
            '/users',
            this.state
        ).then((response) => {
            console.log(response) // THIS IS WHERE WE SHOULD AUTOMATICALLY LOG THE USER IN WITH THE NEW USER CREDENTIALS
        })
    }
    // This App method hits the delete method in our database, and deletes an account.
    deleteAccount = () => {
        axios.delete(

        )
    }

    // ------ SESSION ------
    /* This is the login method for the App.
       - First, it prevents a form's default behavior of reseting on page refresh, ensuring that the user-entered data is passed through.
       - Then, it hits the database's post route at session/login, with this.state (again, what is this.state?).
       - Next, it takes the response from the database, and checks a conditional: if the app current has a logged in user (and the user is not an empty object), then update the state of the app as follows:
       - Set loggedIn to true
       - Set the App's currentUser to the database response
       - Set the current author to the username from the database response (this will allow all created posts to automatically be pushed into a user's post array.) */
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

    /* This is the App's logout method.
       - It hits the session controller's delte route (which destroys the session), then takes the database response and updates the state of the App for loggedIn to be false and the currentUser to be an empty object. */
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
    /* This is the App method that creates a new post.
       - First, it prevents the form's default behavior so we don't lose the user's entered data when the form sends.
       - Then it hits the router's postController and sends the current state of the form through as an argument for creating a piece of post data.
       - We send this.state because it takes into account all of the current data from the app, which is then parsed by our posts Schema, which saves only what it needs from the current state. this.state replaces req.body */
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
    /* This is our App's edit post method.
       - it makes a put request to our database, and hits the posts controller's posts route, concatenated with the event target's name -- the event target in this case is the selected post.
       - We pass it { new: true } to make sure we can see the updated post right away.
       - Then it queries the database with the updated post included and makes sure that allPosts now includes the updated response data. */
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
    /*  */
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
                currentView: "profile"
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
