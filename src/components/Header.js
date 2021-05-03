import React from 'react'
import {AppBar, Toolbar, Grid, InputBase, IconButton, Badge} from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
export default function Header() {
    return (
       <AppBar position="static">
<Toolbar>
<Grid container>
<Grid item sm={4} style={{border:'1px'}}>
<InputBase/>
</Grid>
<Grid item sm={8} style={{border:'1px'}}>
<IconButton>
    <Badge badgeContent={4} color="secondary">

<NotificationsIcon/>
    </Badge>
    </IconButton>
    <IconButton>
    <Badge badgeContent={3} color="secondary">

<ChatIcon/>
    </Badge>
</IconButton>
</Grid>
</Grid>

</Toolbar>
       </AppBar>
    )
}
