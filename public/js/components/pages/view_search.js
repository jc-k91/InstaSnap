class SearchView extends React.Component{
    render = () => {
        return <div className="search-page">
            <form onSubmit={this.props.search}>
                <input type="text" name="query" placeholder="Search for users..." onKeyUp={this.props.handleChange} />
                <input type="submit" value="Search" />
            </form>
            <AllSearchResults
                allUsers1={this.props.allUsers}
            ></AllSearchResults>
        </div>
    }
}
