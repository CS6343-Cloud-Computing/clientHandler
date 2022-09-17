import React from "react";
import NavBar from "../Helper/NavBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("workflow-7", "In Progress", "17th Sept 2022"),
  createData("workflow-5", "In Queue", "17th Sept 2022"),
  createData("workflow-3", "In Queue", "16th Sept 2022"),
  createData("workflow-2", "Completed", "16th Sept 2022"),
  createData("workflow-1", "Completed", "15th Sept 2022"),
];

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
            <Grid item p={2}>
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
            <Grid item p={2}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Workflow Name</TableCell>
                      <TableCell align="right">Status</TableCell>
                      <TableCell align="right">Date Created</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
export default Home;
