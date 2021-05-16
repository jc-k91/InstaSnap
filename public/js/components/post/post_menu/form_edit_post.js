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
    render = () => {
        return <form
            onSubmit={this.props.editPost2}
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
