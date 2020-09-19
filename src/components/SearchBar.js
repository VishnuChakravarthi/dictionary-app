import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

//Styling the component
const useStyle = makeStyles((theme) => ({
  searchbar: {
    width: "100vw",
    padding: "10px 24px",
    top: 5,
  },
}));

//Main component
const SearchBar = ({ setShowSearch, setSearchValue, value }) => {
  const classes = useStyle();

  //Closing search bar
  const closeSearch = () => {
    setShowSearch(false);
    setSearchValue("");
  };

  //Implemented a textfield for search.
  //InputAdorment is used to display the close icon
  return (
    <div>
      <TextField
        placeholder="Search..."
        value={value}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
        className={classes.searchbar}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CloseIcon onClick={closeSearch} />
            </InputAdornment>
          ),
          disableUnderline: true,
          style: { color: "white" },
        }}
        autoFocus
      />
    </div>
  );
};

export default SearchBar;
