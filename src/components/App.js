import React from 'react';
import { create } from 'ipfs-http-client';
import { Label } from '@fluentui/react/lib/Label';
import { TextField } from '@fluentui/react/lib/TextField';
import { useId } from '@fluentui/react-hooks';
import { Container, Header, Content, Footer, Sidebar, Divider, Button, ButtonToolbar, Modal } from 'rsuite';

import DragAndDrop from './DragAndDrop';
import TitleBar from './TitleBar';
// import FilesList from './FilesList';


const ipfs = create('http://localhost:5001');

function App() {

  const uploadToIPFS = async (files) => {
    try {
      const added = await ipfs.add(files[0])
      if (added) console.log('File(s) successfully uploaded...', files);
      const url = `https://ipfs.io/${added.path}`
      console.log('file URL: ', url)
    } catch (error) {
      console.log('Error uploading file: ', error)
    }
  }

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
        <DragAndDrop uploadFunc={uploadToIPFS} />
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
