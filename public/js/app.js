class App extends React.Component{
    state = {
        allPosts: [],
        author: "",
        image: "",
        caption: "",
        currentUser: { // JUST FOR TESTING PURPOSES
            // "followers": [],
            // "following": [],
            // "profilePic": "https://www.hl.co.uk/__data/assets/thumbnail/0010/11359108/294x215-ostrich.jpg",
            // "bio": "this is josh's bio",
            // "posts": [],
            // "_id": "609bedcee919e633335da19b",
            // "username": "josh",
            // "password": "$2b$10$zrSD99RqyLiWB7J3Yw.cXuKTreD8Pq9jmzAbKsshOQrcuBFvFPksC",
            // "__v": 0
        }
    }
    createAccount = () => {
        axios.post(
            '/users',
            this.state
        ).then((response) => {
            console.log(response) // THIS IS WHERE WE SHOULD AUTOMATICALLY LOG THE USER IN WITH THE NEW USER CREDENTIALS
        })
    }
    login = (e) => {
      e.preventDefault()
      axios.post(
        '/session/login',
        this.state
      ).then(
        (response) => {
          this.setState({
            currentUser: response.data
          })
        }
      )
    }
    logout = () => {
      axios.delete(
        '/session'
      ).then(
        (response) => {
          this.setState({
            currentUser: {}
          })
        }
      )
    }
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
            '/posts/' + e.target.name, this.state, { new: true }).then(
              (response) => {
                this.setState({
                  allPosts: response.data
                })
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
    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    componentDidMount = () => {
        axios.get('/posts').then((response) => {
            this.setState(
                {
                    allPosts: response.data
                }
            )
        })
    }
    render = () => {
        return <div>
            <CreateAccount
                createAccount={this.createAccount}
                handleChange={this.handleChange}
            ></CreateAccount>
            <LoginForm
                handleChange={this.handleChange}
                login={this.login}
            ></LoginForm>
            <UserProfile
                currentUser={this.state.currentUser}
            ></UserProfile>
            <GridView
                allPosts={this.state.allPosts}
                deletePost={this.deletePost}
                handleChange={this.handleChange}
                editPost={this.editPost}
            ></GridView>
            <NewPostForm
                handleChange={this.handleChange}
                createPost={this.createPost}
            ></NewPostForm>
            <button onClick={this.logout}>Log Out</button>
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
