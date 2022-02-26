import React, { Component } from 'react';
import { Container, Header, Grid, Row, Col } from 'rsuite';


function TitleBar() {
  return (
    <div >

      <Grid fluid>
        <Row className="show-grid">
          <Col xs={4}></Col>
          <Col xs={16}><h1>Anthozoa</h1></Col>
          <Col xs={4}></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={4}></Col>
          <Col xs={16}><p className="subtitle" >A class of marine invertebrates</p></Col>
          <Col xs={4}></Col>
        </Row>
      </Grid>


      {/* <Container>
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
      </Container> */}
      <hr />
    </div>
  );
}

export default TitleBar;
