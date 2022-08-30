import { Divider, Stack } from '@mui/material';
import { Box } from '@mui/system';
import Body from '../body/Body';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';





import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Profile from '../profile/Profile';
// import Chats from '../chats/Chats';



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

            </>}
          ></Route>

          <Route exact path='/profile' element={
            < Profile />}
          ></Route>
{/* 
          <Route exact path='/chats' element={
            < Chats/>}
          ></Route> */}

        </Routes>
        <Box  >
          <Footer />
        </Box>
      </Stack>
    </Router>
  );
}

export default App;
