class PostMenu extends React.Component {
    render = () => {
        return <div id="post-menu" className="hide">
            <ul>
                <li>
                    <a onClick={this.props.toggleEditForm1}>Edit Post</a>
                </li>
                <li>
                    <a name={this.props.post_id} onClick={this.props.deletePost1}
                    id="delete-btn">Delete Post</a>
                </li>
            </ul>
        </div>
    }
}
