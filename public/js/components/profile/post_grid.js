// props needed:
//     allPosts to render each individual post into a grid (probably just the image for each post; like IG grid view)
// this.props.userPosts (changed to this.props.currentUser1.posts) is coming from view_profile page in the pages folder
class GridView extends React.Component {
    state = {
        loggedInUser: this.props.loggedInUser2,
        userPosts: []
    }
    componentDidMount = () => {
        this.setState(
            {
                userPosts: this.props.loggedInUser2.posts
            }
        )
    }
    findPost = (e) => {
        let userPosts = this.state.userPosts
        for (let i = 0; i < userPosts.length; i++) {
            if (userPosts[i]._id === e.target.getAttribute('value')) {
                this.props.toggleActivePost1(userPosts[i])
            }
        }
        // document.getElementById('post-modal').classList.toggle('hide')
    }
    render = () => {
        return <section className="post-grid">
            {
                this.state.userPosts.map((post) => {
                    return <div className="post-square" key={post._id} onClick={this.findPost} >
                        <img src={post.image} value={post._id} />
                    </div>
                })
            }
        </section>
    }
}
