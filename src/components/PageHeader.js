import React from 'react'
import { Paper, Card ,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme =>(
{
    root:{
        backgroundColor:'#fdfdff'
    },
    PageHeader :{
        padding:theme.spacing(4),
        display : 'flex',
        marginBottom:theme.spacing(3)
    },
    pageIcon:{
      display :'inline-block',
      padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity : '0.6'
        }
    }
}

))

export default function PageHeader(props) {

    const classes = useStyles();
    const {title ,icon ,subtitle} = props
    return (
        <Paper elevation={0} square className={classes.root}>
<div className={classes.PageHeader}>
    <Card className={classes.pageIcon}>
{icon}
    </Card>
    <div>
        <Typography variant="h6" component="div" className={classes.pageTitle} >
{title}
        </Typography>
        <Typography variant="subtitle2" component="div" className={classes.pageTitle} >
{subtitle}
        </Typography>
    </div>
</div>
        </Paper>
    )
}
