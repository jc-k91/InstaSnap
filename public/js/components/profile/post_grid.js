// props needed:
//     allPosts to render each individual post into a grid (probably just the image for each post; like IG grid view)

class GridView extends React.Component {
    render = () => {
        return <section className="post-grid">
            {
                this.props.userPosts.map((post) => {
                    return <div className="post-square" key={post._id} >
                        <img src={post.image} />
                    </div>
                })
            }
        </section>
    }
}
