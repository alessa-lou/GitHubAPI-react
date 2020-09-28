import React, { Component } from 'react'
// import creds from creds
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class GitHubRepo extends Component{
    constructor(props){
    super(props)
    this.state = { items: [] }
    }

    componentDidMount(){
        fetch("https://api.github.com/users/alessa-lou/repos")
          .then(response => response.json())
          .then(data => {
              console.log(data)
            this.setState({items: data})
          })
      }

    render() {
        return (
          <div className="GitHubName">
            <h1>Alessa's GitHub</h1>
            {this.state.items.map((item, index) => {
              return (
            <Card key={index} >
              
              <CardContent>
                <Typography>
                <a href={item["html_url"]}>{item["name"]}</a>
                </Typography>
              </CardContent>
            </Card>
              )
            })}
          </div>
        )
      }
    
}

export default GitHubRepo