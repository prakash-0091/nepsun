import { Divider, Stack } from '@mui/material';
import { Box } from '@mui/system';
import Body from '../body/Body';
import Navbar from '../navbar/Navbar';




function App() {
  return (
    <Stack direction='column'>
      <Box sx={{backgroundColor:'white'}} >
        <Navbar/>

      </Box>
      <Divider/>
      <Box>
        <Body/>
      </Box>
      <Box>
        footer  
      </Box>
    </Stack>
  );
}

export default App;
