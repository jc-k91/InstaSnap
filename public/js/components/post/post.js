// props needed:
//     post so we can render each key into the view

class PostEach extends React.Component {
    state = {
        renderedPost: this.props.activePost1
    }
    toggleMenu = () => {
        document.getElementById('post-menu').classList.toggle('hide')
    }
    closeModal = (e) => {
        const modal = document.querySelector('.post-modal-background')
        if (e.target.classList.contains('post-modal-background')) {
            modal.classList.toggle('hide')
        }
    }
    toggleEditForm = () => {
        const editForm = document.getElementById('edit-form')
        editForm.classList.toggle('hide')
    }
    deletePost = (e) => {
        console.log(e.target)
        axios.delete(
            '/posts/' + e.target.getAttribute('name')
        ).then((response) => {
            this.props.liftStateToApp2(
                {
                    loggedInUser: response.data,
                    activeProfile: response.data
                }
            )
        })
        const modal = document.querySelector('.post-modal-background')
        modal.classList.toggle('hide')
    }
    componentDidUpdate = (prev) => {
        if (this.props.activePost1 !== prev.activePost1) {
            this.setState(
                {
                    renderedPost: this.props.activePost1
                }
            )
        }
    }
    render = () => {
        return <section id="post-modal" className="post-modal-background hide" onClick={this.closeModal}>
            <button onClick={this.toggleMenu} className="menu-btn">THIS IS THE MENU TOGGLE</button>
            <PostMenu
                toggleEditForm1={this.toggleEditForm}
                deletePost1={this.deletePost}
                post_id={this.state.renderedPost._id}
            ></PostMenu>
            <div className="post-modal">
                <h4>{this.state.renderedPost.author}</h4>
                <img src={this.state.renderedPost.image} />
                <p>{this.state.renderedPost.caption}</p>
                <EditForm
                    editPost2={this.props.editPost1}
                    handleChange2={this.props.handleChange1}
                    activePost2={this.props.activePost1}
                    deletePost2={this.props.deletePost1}
                ></EditForm>
            </div>
        </section>
    }
}
