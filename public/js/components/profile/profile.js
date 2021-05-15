// props needed:
//     user's _id (not username) to call user info to render onto page
// username, profilePic, bio
class UserProfile extends React.Component {
    state = {
        loggedInUser: this.props.loggedInUser2
    }
    componentDidUpdate = (prev) => {
        if (this.props.loggedInUser2 !== prev.loggedInUser2) {
            this.setState(
                {
                    loggedInUser: this.props.loggedInUser2
                }
            )
        }
    }
    render = () => {
      return <section className="user-profile ">
        <h2>{this.state.loggedInUser.username}</h2>
        <img src={this.state.loggedInUser.profilePic} alt={this.state.loggedInUser.username} />
        <div>
          <p>{this.state.loggedInUser.bio}</p>
        </div>
      </section>
    }
}
