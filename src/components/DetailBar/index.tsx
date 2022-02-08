import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function SideBar() {
    const [state, setState] = React.useState(false)

    const toggler = (open: boolean) => () => (setState(open))

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggler(true)}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor={'right'}
                open={state}
                onClose={toggler(false)}
            >
                {<h1>TEST</h1>}
            </Drawer>
        </>
    )
}
