class App extends React.Component{
    state = {

    }
    render = () => {
        return <div>
            <NewPostForm></NewPostForm>
        </div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector('main')
)
