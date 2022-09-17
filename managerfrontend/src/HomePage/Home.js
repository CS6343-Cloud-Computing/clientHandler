import React from "react";
import styled from "styled-components";
import NavBar from "../Helper/NavBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Button from "@mui/material/Button";
const Home = () => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const submitFile = (event) => {
    const fileUploaded = event.target.files[0];
    const config = {
      headers: {
        "Contetnt-Type": "multipart/form-data",
      },
    };

    const formData = new FormData();
    formData.append("file", fileUploaded);
    console.log(fileUploaded);
    axios
      .post("http://localhost:8000/api/config/upload", formData, config)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <>
      <NavBar />
      <Container maxWidth={false} disableGutters={true}>
        <Box px={3} pb={1} sx={{ bgcolor: "#E1E1E1" }}>
          <Grid container direction="column" style={{ minHeight: "100vh" }}>
            <Grid item>
              <input
                type="file"
                accept=".yml"
                ref={hiddenFileInput}
                onChange={submitFile}
                style={{ display: "none" }}
                id="button-file"
              />
              <label htmlFor="button-file">
                <Button variant="contained" onClick={handleClick}>
                  Upload File
                </Button>
              </label>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Home;
