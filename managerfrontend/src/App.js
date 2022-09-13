import './App.css';
import Box from '@mui/material/Box';
import Login from './LoginPage/Login';
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <Box flexGrow={1}>
      <CssBaseline />
      <Login/>
    </Box>
  );
}

export default App;
