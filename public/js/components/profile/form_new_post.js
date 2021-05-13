class NewPostForm extends React.Component{
    render = () => {
        return <form onSubmit={this.props.createPost}>
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                onKeyUp={this.props.handleChange}
            /><br/>
            <input
                type="text"
                name="caption"
                placeholder="Start typing your caption here"
                onKeyUp={this.props.handleChange}
            /><br/>
            <input
                type="submit"
                value="Create Post"
            />

        </form>
    }
}
