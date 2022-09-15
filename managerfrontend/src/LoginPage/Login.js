import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
// import CloseIcon from '@mui/icons-material/Close';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  function loginAction() {
    const url = "/login";
    const formData = { username: username, password: password };
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function signupAction() {
    const url = "/register";
    const formData = { username: username, password: password };
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response);
        
      })
      .catch((error) => {
        console.log(error);
      });
      setOpen(true)
  }

  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box px={3} pb={1} sx={{ bgcolor: "#E1E1E1" }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {setOpen(false)}}
              >
                {/* <CloseIcon fontSize="inherit" /> */}
              </IconButton>
            }
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRigt: "auto",
            }}
          >
            Registration successfully completed!
          </Alert>
        </Collapse>
        <Grid
          container
          columnSpacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                rowSpacing={2}
              >
                <Typography
                  sx={{ mt: 2, fontFamily: "sans-serif", fontSize: "25px" }}
                >
                  WorkBoard
                </Typography>
                <Typography variant="caption">
                  the <b>w</b>orkflow dash<b>b</b>oard
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  margin="dense"
                  onChange={(event) => setUsername(event.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  margin="dense"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <ButtonGroup
                  orientation="horizontal"
                  aria-label="vertical outlined button group"
                  sx={{ my: 2 }}
                >
                  <Button variant="contained" onClick={() => loginAction()}>
                    Login
                  </Button>
                  <Button variant="contained" onClick={() => signupAction()}>
                    Signup
                  </Button>
                </ButtonGroup>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </Container>
  );
}

export default Login;
