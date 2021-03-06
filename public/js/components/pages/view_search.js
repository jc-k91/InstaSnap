class SearchView extends React.Component{
    state = {
        searchResults: []
    }
    logout = () => { // PARTIALLY REFACTORED; NEED TO MOVE WHEREVER LOGOUT BUTTON GOES
        axios.delete(
            '/session'
        ).then((response) => {
            this.props.liftStateToApp1(
                {
                    loggedInUser: response.data.currentUser,
                    sessionInfo: response.data
                }
            )
        })
    }
    handleFormInput = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    search = (e) => {
        e.preventDefault()
        axios.get(
            '/users/' + this.state.query.toLowerCase()
        ).then((response) => {
            console.log(response.data[0])
            if (response.data[0]) {
                this.setState(
                    {
                        searchResults: response.data
                    }
                )
            } else {
                alert('no user found')
            }
        })
    }
    render = () => {
        return <div className="search-page">
            <ProfileNav
                changeView2={this.props.changeView1}
                logout1={this.logout}
                loggedInUser2={this.props.loggedInUser1}
                liftStateToApp2={this.props.liftStateToApp1}
                activeProfile2={this.props.activeProfile1}
            ></ProfileNav>
            <form onSubmit={this.search} id="search-form" className="form-group">
                <input type="text" name="query" placeholder="Search for users..." onKeyUp={this.handleFormInput}
                className="form-control"/>
                <input
                    type="submit"
                    value="Search"
                    className="btn"/>
            </form>
            <AllSearchResults
                changeView2={this.props.changeView1}
                searchResults1={this.state.searchResults}
                liftStateToApp2={this.props.liftStateToApp1}
            ></AllSearchResults>
        </div>
    }
}
