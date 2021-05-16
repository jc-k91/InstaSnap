class PostMenu extends React.Component {
    render = () => {
        return <div id="post-menu" className="hide">
            <ul>
                <li>
                    <h6 onClick={this.props.toggleEditForm1}>Edit Post</h6>
                </li>
                <li>
                    <h6 name={this.props.post_id} onClick={this.props.deletePost1}>Delete Post</h6>
                </li>
            </ul>
        </div>
    }
}
