class SearchView extends React.Component{
    state = {
        searchResults: []
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
            <form onSubmit={this.search}>
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
