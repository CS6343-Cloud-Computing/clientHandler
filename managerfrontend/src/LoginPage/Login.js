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

function Login() {
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
          <Card sx={{p:2}}>
            <CardContent>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                rowSpacing={2}
              >
                <Typography sx={{ mt: 2, fontFamily: 'sans-serif', fontSize: '25px' }}>
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
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  margin="dense"
                />
                <ButtonGroup
                  orientation="horizontal"
                  aria-label="vertical outlined button group"
                  sx={{ my: 2 }}
                >
                  <Button variant="contained">Login</Button>
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
