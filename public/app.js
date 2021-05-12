class App extends React.Component{
    state = {
        allPosts: [],
        author: "",
        image: "",
        caption: ""
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
            {this.state.allPosts.map((post) => {
                return <div key={post._id}>
                    <h5>{post.author}</h5><br/>
                    <p>{post.image}</p><br/>
                    <p>{post.caption}</p>
                </div>
            })}
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
