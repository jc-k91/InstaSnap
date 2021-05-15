// props needed:
//     post so we can render each key into the view

class PostEach extends React.Component {
    toggleMenu = () => {
        document.getElementById('post-menu').classList.toggle('hide')
    }
    toggleHide = (e) => {
        const modal = document.querySelector('.post-modal-background')
        if (event.target.classList.contains('post-modal-background')) {
            modal.classList.toggle('hide')
        }
    }
    render = () => {
        return <section id="post-modal" className="post-modal-background hide" onClick={this.toggleHide}>
        <button onClick={this.toggleMenu} className="menu-btn">THIS IS THE MENU TOGGLE</button>
        <PostMenu></PostMenu>
            <div className="post-modal">
                <h4>{this.props.activePost.author}</h4>
                <img src={this.props.activePost.image} />
                <p>{this.props.activePost.caption}</p>
                <EditForm
                    editPost2={this.props.editPost1}
                    handleChange2={this.props.handleChange1}
                    activePost1={this.props.activePost}
                    deletePost2={this.props.deletePost1}
                ></EditForm>
            </div>
        </section>
    }
}
