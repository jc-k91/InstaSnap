class AllSearchResults extends React.Component{
    render = () => {
        return <div>
            {
                this.props.searchResults1.map((user) => {
                    return <div id="result-container">
                        {this.props.searchResults1 ? <h4>Nice, these users match your search!</h4> : null }
                        <Result
                            user1={user}
                            changeView2={this.props.changeView1}
                            key={user._id}
                            liftStateToApp3={this.props.liftStateToApp2}
                        ></Result>
                    </div>
                })
            }
        </div>
    }
}
