import React from 'react'
import {AppBar, Toolbar, Grid, InputBase, IconButton, Badge} from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
export default function Header() {
    return (
       <AppBar position="static">
<Toolbar>
<Grid container>
<Grid item >
<InputBase/>
</Grid>
<Grid item sm>
</Grid>
<Grid item >
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
    <IconButton>
   <PowerSettingsNewIcon/>
</IconButton>
</Grid>
</Grid>

</Toolbar>
       </AppBar>
    )
}
