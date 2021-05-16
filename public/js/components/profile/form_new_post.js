class NewPostForm extends React.Component{
    state = {
        thisUser: this.props.loggedInUser2,
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
    createPost = (e) => {
        e.preventDefault()
        axios.post(
            '/posts',
            this.state
        ).then((response) => {
        // axios.get(
        //     '/users/' + this.props.loggedInUser2._id
        // ).then((userResponse) => {
            const updatedUser = response.data
            this.setState(
                {
                    image: "",
                    caption: ""
                }
            )
            this.props.liftStateToApp2(
                {
                    loggedInUser: updatedUser,
                    activeProfile: updatedUser
                }
            )
        })
        e.target.reset()
    }
    render = () => {
        return <form onSubmit={this.createPost}>
            <input
                type="text"
                id="create-post-form-image"
                name="image"
                placeholder="Image URL"
                onKeyUp={this.handleFormInput}
            /><br/>
            <input
                type="text"
                id="create-post-form-caption"
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
