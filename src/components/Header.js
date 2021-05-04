import React from 'react'
import {AppBar, Toolbar, Grid, InputBase, IconButton, Badge ,makeStyles, createMuiTheme } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
            root: {
                backgroundColor: "#fff"
            },
            searchInput: {
                opacity: '0.6',
                padding: '0px 8px',
                fontSize: '0.8rem',
                '&:hover': {
                    backgroundColor: '#f2f2f2'
                },
                '& .MuiSvgIcon-root': {
                    marginRight: theme.spacing(1)
                },
                btnRoot: {
                    backgroundColor: "yellow"
                },
                btnLabel: {
                    backgroundColor: 'red'
                }
            }}
            ))


export default function Header() {
const classes = useStyles();
    return (
       <AppBar position="static" className={classes.root} >
<Toolbar>
<Grid container>
<Grid item >
<InputBase className={classes.searchInput} placeholder="Search topics" startAdornment={<SearchIcon fontSize="small"/>} />
</Grid>
<Grid item sm>
</Grid>
<Grid item >
<IconButton classes={{root:classes.btnRoot,label:classes.btnLabel}} >
    <Badge badgeContent={4} color="secondary">
<NotificationsIcon fontSize="small"/>
    </Badge>
    </IconButton>
    <IconButton>
    <Badge badgeContent={3} color="secondary">

<ChatIcon fontSize="small"/>
    </Badge>
</IconButton>
    <IconButton>
   <PowerSettingsNewIcon fontSize="small"/>
</IconButton>
</Grid>
</Grid>

</Toolbar>
       </AppBar>
    )
}
