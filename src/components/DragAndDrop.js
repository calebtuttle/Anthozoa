import React, { Component } from 'react';
import { Container, Modal, Button, Header } from 'semantic-ui-react';
import Dropzone from 'react-dropzone'

import BasicDropzone from './BasicDropzone';


class DragAndDrop extends Component {

  state = { open: false };

  render() {
    return (
      <div >
        <Container>
          <Modal
            onClose={() => this.setState({ open: false}) }
            onOpen={() => this.setState({ open: true}) }
            open={this.state.open}
            trigger={<Button>Drag and Drop</Button>}
          >
            <Modal.Header>Upload a File</Modal.Header>
            <Modal.Content> 

              <BasicDropzone />

            </Modal.Content>
            <Modal.Actions>
              <Button
                content="Ok"
                labelPosition='right'
                icon='checkmark'
                onClick={() => this.setState({ open: false}) }
                positive
              />
            </Modal.Actions>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default DragAndDrop;
