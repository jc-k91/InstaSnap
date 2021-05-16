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
    // double axios call reppin up in here
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
            // })
        })
    }
    render = () => {
        return <form onSubmit={this.createPost}>
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                onKeyUp={this.handleFormInput}
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
