import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/shared/NavBar';
import Loader from './components/shared/Loader';
import { Suspense } from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

import {
  About,
  Error,
  SingleProject,
  Projects,
  Contact,
  Home,
} from './pages/index';
import GlobalContext from './context/GlobalContext';
import Fallback from './components/project/Fallback';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <GlobalContext>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/projects/:slug' element={<SingleProject />} />
              <Route path='/lets-talk' element={<Contact />} />

              {/* <Route path="/skills" element={<Skills />} /> */}
              <Route path='*' element={<Error />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </GlobalContext>
  );
}

export default App;
