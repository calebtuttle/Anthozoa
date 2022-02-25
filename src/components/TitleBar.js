import React, { Component } from 'react';
import { Container, Grid, Header, Button } from 'semantic-ui-react'

class TitleBar extends Component {
  render() {
    return (
      <div >
        <Container>
          <Grid columns='equal'>
            <Grid.Column>
                <Header as='h1' className="title">Anthozoa</Header>
                <Header as='h4' className="subtitle">A class of marine invertebrates</Header>
            </Grid.Column>

            <Grid.Column width={5}>
            </Grid.Column>

            <Grid.Column>
            </Grid.Column>
          </Grid>
        </Container>
        <hr />
      </div>
    );
  }
}

export default TitleBar;
