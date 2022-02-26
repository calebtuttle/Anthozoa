import React from 'react';
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
      <hr />
    </div>
  );
}

export default TitleBar;
