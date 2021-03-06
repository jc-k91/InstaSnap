class ProfileNav extends React.Component {
    goHome = () => {
        console.log("clicked");
        console.log(this.props.loggedInUser2);
        this.props.liftStateToApp2(
            {
                activeProfile: this.props.loggedInUser2,
                currentView: "profile"
            }
        )
    }
    render = () => {
        return <nav id="profile-nav" className="navbar navbar-default">
            <img
                src="../../../img/instasnap-sq-logo.png" alt="Instasnap"
                onClick={this.goHome}
            />
            <ul>
                <li>
                    <p id="user-greeting">
                        <em>Hello, {this.props.loggedInUser2.username}!</em>
                    </p>
                </li>
                <li>
                    <a
                        onClick={this.props.changeView2}
                        value="search">
                            Search
                    </a>
                </li>
                <li>
                    <a
                        onClick={this.props.logout1}>
                            Log Out
                    </a>
                </li>
            </ul>
        </nav>
    }
}
