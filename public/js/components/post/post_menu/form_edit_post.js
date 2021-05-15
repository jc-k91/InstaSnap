// props needed:
//     post's _id to update post's content

class EditForm extends React.Component {
    render = () => {
        return <form onSubmit={this.props.editPost2} name={this.props.activePost1._id} className="hide">
            <input
                type="text"
                name="author"
                hidden
            /><br/>
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                onKeyUp={this.props.handleChange2}
            /><br/>
            <input
                type="text"
                name="caption"
                placeholder="Start typing your caption here"
                onKeyUp={this.props.handleChange2}
            /><br/>
            <input
                type="submit"
                value="Submit Changes"
            />
            <button onClick={this.props.deletePost2}>Delete Post</button>
        </form>
    }
}
