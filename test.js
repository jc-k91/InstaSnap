class App extends React.Component{
    state = {
        // FOR RENDERING POSTS
        allPosts: [],
        // SESSION
        currentUser: {},
        // FOR NEW POST CREATION/EXISTING POST EDIT
        author: "",
        image: "",
        caption: "",
        //
    }
    createPost = (e) => {
        e.preventDefault()
        axios.post(
            '/',
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
            console.log(response.data)
        })
    }
    render = () => {
        return <div>
            <UserProfile
                currentUser={this.state.currentUser}
            ></UserProfile>
            <GridView
                allPosts={this.state.allPosts}
            ></GridView>
            <PostEach
                post={this.state.allPosts[0]}
            ></PostEach>
            <NewPostForm
                handleChange={this.handleChange}
            ></NewPostForm>
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
