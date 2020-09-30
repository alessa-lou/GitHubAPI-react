import React, { Component } from 'react'
// import creds from creds
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class GitHubRepoNew extends Component{
    constructor(props){
    super(props)
    this.state = { pinnedItems: [] }
}

componentDidMount(){
    
    const options = {
        method: "POST",
        headers: {
            Authorization: "Bearer" + process.env.REACT_APP_GITHUP_API_TOKEN
        },
        body: JSON.stringify({
            query: "query { user(login:\"alessa-lou\") { pinnedItems(first: 6, types: [REPOSITORY, GIST]) { totalCount edges { node { ... on Repository { name } } } } } }"
        })
    }

    fetch("https://api.github.com/graphql", options)
        .then(response => response.json())
        // .then(parsedResponse => console.log(parsedResponse))
        .then(data => {
            console.log(data.data.user.pinnedItems.edges)
            this.setState({pinnedItems: data.data.user.pinnedItems.edges})
        })
}

    render() {
        return (
          <div className="GitHubName">
            <h1>Alessa's GitHub</h1>
            {this.state.pinnedItems.map((item, index) => {
              return (
            <Card key={index} >
              
              <CardContent>
                <Typography>
                {item.node["name"]}
                </Typography>
              </CardContent>
            </Card>
              )
            })}
          </div>
        )
      }
    
}

export default GitHubRepoNew