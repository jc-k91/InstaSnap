// props needed:
//     allPosts to render each individual post into a grid (probably just the image for each post; like IG grid view)

class GridView extends React.Component {
    state = {
        userPosts: this.props.userPosts,
        activePost: {}
    }
    findPost = (e) => {
        console.log("clicked")
        for (let post of this.state.userPosts) {
            if (post._id === e.target.key) {
                this.setState(
                    {
                        activePost: post
                    }
                )
            }
        }
        document.getElementById('post-modal').classList.toggle('hide')
    }
    render = () => {
        return <section className="post-grid">
            {
                this.props.userPosts.map((post) => {
                    return <div className="post-square" key={post._id} onClick={this.findPost} >
                        <img src={post.image} />
                    </div>
                })
            }
            <PostEach
                activePost={this.state.activePost}
            ></PostEach>
        </section>
    }
}
