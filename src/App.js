import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:8080/Posts_war_exploded/api/posts")
            .then(result => {
                return result.json()
            })
            .then( result => {
                let contents = result.map((content) => {
                    return <Card key={content.id}>
                        <Card.Body>
                            <Card.Title>{content.username}</Card.Title>
                            <Card.Text>{content.content}</Card.Text>
                        </Card.Body>
                    </Card>
                });
                this.setState({posts: contents});
                console.log(result)
            })

    }

    render() {
    return (
      <Container>
          <CardGroup>
              {this.state.posts}
          </CardGroup>
      </Container>
    );
  }
}

export default App;
