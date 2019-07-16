import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

const Header = () => {
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
      </Menu>
    </header>
  );
};

export default Header;
