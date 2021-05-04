import './App.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import {makeStyles, CssBaseline,createMuiTheme, ThemeProvider } from '@material-ui/core'
import { light } from '@material-ui/core/styles/createPalette';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
const theme = createMuiTheme({
  palette:{
      primary:{
          main:'#333966',
          light:'#3c44b126'
      },
      secondary:{
          main : "#f83245",
          light :"#f8324526"
      },
      background:{
        default:"#f4f5fd"
      }

  }
});

const useStyles = makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
   <SideMenu/>
   <div className={classes.appMain}>
   <Header/>
   <PageHeader title="Page Title" subtitle="Description " icon={<PeopleOutlineOutlinedIcon/>} ></PageHeader>
   </div>
   <CssBaseline/>
   </ThemeProvider>
  );
}

export default App;
