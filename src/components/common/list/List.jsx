import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { Divider } from '@mui/material';


export default function NestedList({ categories }) {

  const keys = Object.keys(categories)
  const keysOpen = {}

  for (const key in keys) {
    keysOpen[key] = false
  }
  const [open, setOpen] = React.useState(keysOpen);







  const handleClick = (keyIndex) => {

    setOpen({ ...open, [keyIndex]: !open[keyIndex] }) //toggling state of clicked item only

  };



  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"

    >
      {
        keys.map(key => {
          return (
            <>

              <ListItemButton key={key} onClick={() => handleClick(keys.indexOf(key))} sx={{
                backgroundColor: open[keys.indexOf(key)] ? 'rgb(231, 231, 231)' : ''
              }} >

                <ListItemText primary={key} />
                {open[keys.indexOf(key)] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Divider />

              {
                categories[key].map(item => {
                  return (
                    <Collapse key={item} in={open[keys.indexOf(key)]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{
                        backgroundColor: 'rgb(231, 231, 231)'
                      }} >
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <SubdirectoryArrowRightIcon />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItemButton>
                      </List>
                    </Collapse>

                  )
                })
              }
            </>

          )
        })
      }


    </List >
  );
}
