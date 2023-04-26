import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Hero, About, Skills, Contact } from "./components/index";
import NavBar from "./components/shared/NavBar";
import Error from "./pages/Error";
import * as React from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Projects from "./pages/projects";
import SingleProject from "./pages/SinglePRoject";
let theme = createTheme();
theme = responsiveFontSizes(theme);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<SingleProject />} />
          <Route path="/lets-talk" element={<Contact />} />

          {/* <Route path="/skills" element={<Skills />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
