// props needed:
//     post so we can render each key into the view

class PostEach extends React.Component {
    render = () => {
        return <section id="post-modal" className="post-modal-background hide">
            <div className="post-modal">
                <h4>{this.props.activePost.author}</h4>
                <img src={this.props.activePost.image} />
                <p>{this.props.activePost.caption}</p>
            </div>
        </section>
    }
}
