import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#3fafaf",
    color: "white"
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,

  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: 'space-evenly'
  },
}));

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  /* Checking to see if the screen size is small
     If it is small, the menu icon will show */
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#3fafaf" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Join the Bloc
          </Typography>

          <div>
            {isMobile ? (
              <>
                <IconButton edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}>
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem root classes={{ root: classes.root }} target="_blank" component="a" href="https://jointhebloc.com/">Contact</MenuItem>
                </Menu>
              </>
            ) : (
                /*Button*/
                <div className={classes.headerOptions} >
                  <Button
                    color="inherit"
                    size="large"
                    target="_blank" href="https://jointhebloc.com/">Contact</Button>
                </div>
              )
            }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header