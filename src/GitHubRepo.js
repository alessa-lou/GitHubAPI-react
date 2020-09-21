import React, { Component } from 'react'

class GitHubRepo extends Component{
    constructor(props){
    super(props)
    this.state = { items: {}}
    }

    componentDidMount(){
        fetch("https://api.github.com/users/alessa-lou")
          .then(response => response.json())
          .then(data => {
            //   console.log(data)
            this.setState({items: data})
          })
      }

    render() {
        return (
          <div className="GitHubName">
            {this.state.items.name}
          </div>
        )
      }
    
}

export default GitHubRepo