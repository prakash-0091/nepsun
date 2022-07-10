import React from 'react'

const ListItem = () => {
    return (
        <ListItemButton onClick={() => handleClick(keys.indexOf(key))} sx={{
            backgroundColor: open[keys.indexOf(key)] ? 'rgb(231, 231, 231)' : ''
        }} >
            <ListItemIcon>
                {icons[keys.indexOf(key)]}
            </ListItemIcon>
            <ListItemText primary={key} />
            {open[keys.indexOf(key)] ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
    )
}

export default ListItem