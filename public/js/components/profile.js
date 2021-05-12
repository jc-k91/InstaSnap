// props needed:
//     user's _id (not username) to call user info to render onto page

class UserProfile extends React.Component {
    render = () => {
      return <section>
        <h1>{this.props.username}</h1>
        <img src={this.props.profilePic} alt={this.props.username} />
        <p>{this.props.bio}</p>
      </section>
    }
}
