import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import TitleBar from './TitleBar';


class Home extends Component {
  render() {
    return (
      <div >
        <TitleBar />
        <Container>
          <p className="welcome-message">
            Welcome to the Knowledge Agora! Navigate to the "Drag and Drop" page to add data to the Agora.
          </p>
        </Container>
            
      </div>
    );
  }
}

export default Home;
