class AllSearchResults extends React.Component{
    render = () => {
        return <div>
            {
                this.props.allUsers1.map((user) => {
                    return <Result
                        user={user}
                        changeView2={this.props.changeView1}
                        key={user._id}
                    ></Result>
                })
            }
        </div>
    }
}
