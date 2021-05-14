// props needed:
//     user's _id (not username) to call user info to render onto page
// username, profilePic, bio
class UserProfile extends React.Component {
    render = () => {
      return <section className="user-profile ">
        <h2>{this.props.currentUser1.username}</h2>
        <img src={this.props.currentUser1.profilePic} alt={this.props.currentUser1.username} />
        <div>
          <p>{this.props.currentUser1.bio}</p>
        </div>
      </section>
    }
}
