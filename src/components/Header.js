import React from "react";
import { Typography, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";

//Styling the component
const useStyles = makeStyles((theme) => ({
  header: {
    background: "inherit",
    boxShadow: "none",
  },
  toolbar: {
    alignItems: "flex-start",
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  multilineColor: {
    color: "white",
  },
  searchicon: {
    top: 5,
  },
}));

//Main component
const Header = ({ setShowSearch }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h5" noWrap>
            Vocab
          </Typography>
          <IconButton
            className={classes.searchicon}
            aria-label="search"
            color="inherit"
            onClick={() => setShowSearch(true)}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
