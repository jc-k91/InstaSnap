class NewPostForm extends React.Component{
    state = {
        image: "",
        caption: ""
    }
    handleFormInput = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    // Had an issue with userResponse - after console logging it, determined we needed userResponse.data AND it was returning an array so we added [0] to return first result
    // double axios call reppin up in here
    createPost = (e) => {
        e.preventDefault()
        console.log(this.props.loggedInUser2);
        axios.post(
            '/posts',
            this.state
        ).then((postResponse) => {
            axios.get(
                '/users/' + this.props.loggedInUser2._id
            ).then((userResponse) => {
                this.setState(
                    {
                        // loggedInUser: userResponse.data[0],
                        image: "",
                        caption: ""
                    }
                )
                this.props.liftStateToApp2(
                    {
                        loggedInUser: userResponse.data
                    }
                )
            })
        })
    }
    render = () => {
        return <form onSubmit={this.createPost}>
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                onKeyUp={this.handleFormInput}
                defaultValue={this.state.image}
            /><br/>
            <input
                type="text"
                name="caption"
                placeholder="Start typing your caption here"
                onKeyUp={this.handleFormInput}
            /><br/>
            <input
                type="submit"
                value="Create Post"
            />

        </form>
    }
}
