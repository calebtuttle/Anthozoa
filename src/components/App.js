import React, { Component } from 'react';
// import { create } from 'ipfs-http-client';
import { Label } from '@fluentui/react/lib/Label';
import { TextField } from '@fluentui/react/lib/TextField';
import { useId } from '@fluentui/react-hooks';
import { Container, Header, Content, Footer, Sidebar, Divider, Button, ButtonToolbar, Modal } from 'rsuite';

import DragAndDrop from './DragAndDrop';
import TitleBar from './TitleBar';
// import FilesList from './FilesList';


function App() {

  return (
    <div >
      {/* React Suite */}
      {/* <Container>
        <Header>
          <h1>This is a header</h1>
        </Header>
        <Divider />
        <Button>Hello World</Button>
      </Container> */}

      <TitleBar />

      <Container>
        <DragAndDrop />
        <hr/>
      </Container>

      {/* <Container>
        <Header as="h3">
          Files
        </Header> */}


        {/* <FilesList /> */}

        {/* TODO: Integrate with IPFS */}


      {/* </Container> */}
          
    </div>
  );
}

export default App;
