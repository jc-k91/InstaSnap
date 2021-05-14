class AllSearchResults extends React.Component{
    render = () => {
        return <div>
            {
                this.props.allUsers1.map((user) => {
                    return <Result
                        user={user}
                    ></Result>
                })
            }
        </div>
    }
}
