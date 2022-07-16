import { Divider, Stack } from '@mui/material';
import { Box } from '@mui/system';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Profile from '../profile/Profile';


function App() {







  return (
    <Router>
      <Stack direction='column'>
        <Box sx={{ backgroundColor: 'white' }} >
          <Navbar />

        </Box>
        <Divider />

        <Routes>
          <Route exact path='/' element={
            <>
              <Box>
                <Body />
              </Box>

              <Box>
                <Footer />
              </Box>
            </>}
          ></Route>
          <Route exact path='/profile' element={< Profile />}></Route>
        </Routes>
      </Stack>
    </Router>
  );
}

export default App;
