// props needed:
//     user's _id (not username) to call user info to render onto page
// username, profilePic, bio
class UserProfile extends React.Component {
    state = {
        renderedProfile: this.props.activeProfile2
    }
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
      return <section className="user-profile ">
        <h2>{this.state.renderedProfile.username}</h2>
        <img src={this.state.renderedProfile.profilePic} alt={this.state.renderedProfile.username} />
        <div>
          <p>{this.state.renderedProfile.bio}</p>
        </div>
      </section>
    }
}
