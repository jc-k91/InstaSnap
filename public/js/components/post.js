// props needed:
//     post so we can render each key into the view

class PostEach extends React.Component {
    render = () => {
        return <div className="hide">
            <h4>{this.props.post.author}</h4>
            <img src={this.props.post.image} />
            <p>{this.props.post.caption}</p>
        </div>
    }
}
