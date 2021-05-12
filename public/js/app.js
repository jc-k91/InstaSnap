class App extends React.Component{
    state = {
        allPosts: [
            { // JUST FOR TESTING PURPOSES
                "author":"josh",
                "image":"https://www.marylandzoo.org/wp-content/uploads/2017/11/Ostrich2-1024x683.jpg",
                "caption":"ostrich, I stretch my neck out for ya"
            }
        ],
        author: "",
        image: "",
        caption: "",
        currentUser: { // JUST FOR TESTING PURPOSES
            "followers": [],
            "following": [],
            "profilePic": "https://www.hl.co.uk/__data/assets/thumbnail/0010/11359108/294x215-ostrich.jpg",
            "bio": "this is josh's bio",
            "posts": [],
            "_id": "609bedcee919e633335da19b",
            "username": "josh",
            "password": "$2b$10$zrSD99RqyLiWB7J3Yw.cXuKTreD8Pq9jmzAbKsshOQrcuBFvFPksC",
            "__v": 0
        }
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
