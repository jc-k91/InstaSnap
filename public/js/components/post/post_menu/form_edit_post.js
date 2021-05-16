// props needed:
//     post's _id to update post's content

class EditForm extends React.Component {
    handleFormInput = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    editPost = (e) => {
        e.preventDefault()
        axios.put(
            '/posts/' + e.target.name,
            this.state,
            { new: true }
        ).then(
            (response) => {
                console.log(response)
                this.props.liftStateToApp3(
                    {
                        loggedInUser: response.data[1],
                        activeProfile: response.data[1]
                    }
                )
                this.props.liftStateToProfileView2(
                    {
                        activePost: response.data[0]
                    }
                )
            }
        )
    }
    render = () => {
        return <form
            onSubmit={this.editPost}
            name={this.props.activePost2._id}
            id="edit-form"
            className="hide"
        >
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
                value="Submit Changes"
            />
        </form>
    }
}
