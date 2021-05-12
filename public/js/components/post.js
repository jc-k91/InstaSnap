// props needed:
//     post so we can render each key into the view

class PostEach extends React.Component {
    render = () => {
        return <div>
            <h4>{this.props.author}</h4>
            <img src={this.props.image} />
            <p>{this.props.caption}</p>
        </div>
    }
}
