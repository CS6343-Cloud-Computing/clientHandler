import React from 'react';
import styled from 'styled-components';
// Style the Button component
const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: blue;
margin: 0 1em;
padding: 0.25em 1em;
`;
const Home = props => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <Button onClick={handleClick}>
        Upload New Workflow
      </Button>
      <input
        type="file"
        accept=".yml"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
      />
    </>
  );
}
export default Home;