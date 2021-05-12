// props needed:
//     post's _id to update post's content

class EditForm extends React.Component {
    render = () => {
        return <form onSubmit={this.props.editPost} name={this.props.post._id}>
            <input type="text" name="author" hidden /><br/>
            <input type="text" name="image" placeholder="Image URL" onKeyUp={this.props.handleChange} /><br/>
            <input type="text" name="caption" placeholder="Start typing your caption here" onKeyUp={this.props.handleChange} /><br/>
            <input type="submit" value="Submit Changes" />
        </form>
    }
}
