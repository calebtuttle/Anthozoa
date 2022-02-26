import React from 'react';
import Dropzone from 'react-dropzone';


function BasicDropzone(props) {

  return (
    <div className="text-center mt-5">
      <Dropzone onDrop={props.uploadFunc}>
        {({getRootProps, getInputProps}) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            Drag & Drop
          </div>
        )}
      </Dropzone>
    </div>
  );
}

export default BasicDropzone;
