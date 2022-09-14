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

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitData() {
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

  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box px={3} pb={1} sx={{ bgcolor: "#E1E1E1" }}>
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
                  <Button variant="contained" onClick={() => submitData()}>
                    Login
                  </Button>
                  <Button variant="contained">Signup</Button>
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
