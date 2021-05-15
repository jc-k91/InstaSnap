// props needed:
//     allPosts to render each individual post into a grid (probably just the image for each post; like IG grid view)
// this.props.userPosts (changed to this.props.currentUser1.posts) is coming from view_profile page in the pages folder
class GridView extends React.Component {
    state = {
        renderedProfile: this.props.activeProfile2
    }
    findPost = (e) => {
        let userPosts = this.state.renderedProfile.posts
        for (let i = 0; i < userPosts.length; i++) {
            if (userPosts[i]._id === e.target.getAttribute('value')) {
                this.props.toggleActivePost1(userPosts[i])
            }
        }
    }

    // https://reactjs.org/docs/react-component.html#componentdidupdate
    // componentDidUpdate() takes 3 params, 2 of which are more important, and the first being more important to us than the second: previousProps and previousState.
    // This won't trigger anything unless you compare a previous prop/state with the updated one.
    // In our case, the activeProfile2 prop is being updated when we upload a new post, so it triggers the setState, which re-renders the grid with the new post
    componentDidUpdate = (prev) => {
        if (this.props.activeProfile2 !== prev.activeProfile2) {
            this.setState(
                {
                    renderedProfile: this.props.activeProfile2
                }
            )
        }
    }
    render = () => {
        return <section className="post-grid">
            {
                this.state.renderedProfile.posts.map((post) => {
                    return <div className="post-square" key={post._id} onClick={this.findPost} >
                        <img src={post.image} value={post._id} />
                    </div>
                })
            }
        </section>
    }
}
