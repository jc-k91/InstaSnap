// props needed:
//     user's _id (not username) to call user info to render onto page
// username, profilePic, bio
class UserProfile extends React.Component {
    render = () => {
      return <section>
        <h1>{this.props.currentUser.username}</h1>
        <img src={this.props.currentUser.profilePic} alt={this.props.currentUser.username} />
        <p>{this.props.currentUser.bio}</p>
      </section>
    }
}
