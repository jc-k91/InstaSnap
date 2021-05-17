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
        e.target.reset()
    }
    render = () => {
        return <form
            onSubmit={this.editPost}
            name={this.props.activePost2._id}
            id="edit-form"
            className="form-group hide"
        >
            <h4>Edit Post</h4>
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                onKeyUp={this.handleFormInput}
                className="form-control"
            /><br/>
            <input
                type="text"
                name="caption"
                placeholder="Caption"
                onKeyUp={this.handleFormInput}
                className="form-control"
            /><br/>
            <input
                type="submit"
                value="Submit Changes"
                className="btn"
            />
        </form>
    }
}
