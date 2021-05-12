// props needed:
//     allPosts to render each individual post into a grid (probably just the image for each post; like IG grid view)

class GridView extends React.Component {
    render = () => {
        return <section className="post-grid">
            {
                this.props.allPosts.map((post) => {
                    return <div className="post-square" key={post._id} >
                        <img src={post.image} />
                        <EditForm
                          handleChange={this.props.handleChange}
                          editPost={this.props.editPost}
                          post={post}
                        ></EditForm>
                        <form onSubmit={this.props.deletePost} value={post._id}>
                            <input type="submit" value="Delete" />
                        </form>
                    </div>
                })
            }
        </section>
    }
}
