// props needed:
//     allPosts to render each individual post into a grid (probably just the image for each post; like IG grid view)

class GridView extends React.Component {
    render = () => {
        return <section className="post-grid">
            {
                this.props.allPosts.map((post) => {
                    return <div className="post-square" >
                        <img src={post.image} />
                        <form onSubmit={this.props.deletePost} value={post._id}>
                            <input type="submit" value="Delete" />
                        </form>
                    </div>
                })
            }
        </section>
    }
}
