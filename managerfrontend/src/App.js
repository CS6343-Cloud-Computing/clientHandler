import "./App.css";
import Box from "@mui/material/Box";
import Login from "./LoginPage/Login";
import Home from "./HomePage/Home";
import CssBaseline from "@mui/material/CssBaseline";
import { ProtectedRoute } from "./Helper/ProtectedRoute";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box flexGrow={1}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
