class ProfileNav extends React.Component {
    render = () => {
        return <nav id="profile-nav" className="navbar navbar-default">
            <img src="../../../img/instasnap-sq-logo.png" alt="Instasnap" />
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
                        onClick={this.props.logout}>
                            Log Out
                    </a>
                </li>
            </ul>
        </nav>
    }
