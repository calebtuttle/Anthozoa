import React, { Component } from 'react';
import BasicDropzone from './BasicDropzone';
import { Container, Header, Content, Footer, Sidebar, Divider, Button, ButtonToolbar, Modal, Grid, Row, Col } from 'rsuite';


function DragAndDrop() {

  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();
  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div >
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={4}></Col>
          <Col xs={16}>
            <ButtonToolbar>
              <Button size="lg" onClick={() => handleOpen('lg')}>
                Upload file(s)
              </Button>
            </ButtonToolbar>
          </Col>
          <Col xs={4}></Col>
        </Row>
      </Grid>

      <Modal size={size} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Upload file(s)</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <BasicDropzone />
        
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DragAndDrop;
