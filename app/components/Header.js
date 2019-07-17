import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between'
  },
  toolbarLink: {
    // padding: theme.spacing(1),
    flexShrink: 0,
  }
})

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return(
    <header>
      <Typography component="h1" variant="h2" align="center" gutterBottom>
        Alex Shopov
      </Typography>
      <Button 
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavLink exact to="/">Home</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/books">Books</NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <NavLink to="/links">Links</NavLink>
        </MenuItem>
      </Menu>
      <Container maxWidth="xs">
        <Toolbar component="nav" className={classes.toolbar}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/links">Links</NavLink>
        </Toolbar>
      </Container>
    </header>
  );
};

export default Header;
