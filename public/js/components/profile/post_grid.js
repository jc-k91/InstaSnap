// props needed:
//     allPosts to render each individual post into a grid (probably just the image for each post; like IG grid view)

class GridView extends React.Component {
    state = {
        userPosts: this.props.userPosts
    }
    findPost = (e) => {
        let userPosts = this.state.userPosts
        console.log(`the click target is ` + e.target)
        console.log(`the target's value is: ` + e.target.getAttribute('value'))
        for (let i = 0; i < userPosts.length; i++) {
            if (userPosts[i]._id === e.target.getAttribute('value')) {
                this.props.updateActivePost(userPosts[i])
            }
        }
        // document.getElementById('post-modal').classList.toggle('hide')
    }
    render = () => {
        return <section className="post-grid">
            {
                this.props.userPosts.map((post) => {
                    return <div className="post-square" key={post._id} onClick={this.findPost} >
                        <img src={post.image} value={post._id} />
                    </div>
                })
            }
        </section>
    }
}
