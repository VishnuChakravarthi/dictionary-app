import React, { useState, useEffect } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import WordList from "./WordList";
import Header from "./Header";
import SearchBar from "./SearchBar";
import AddWord from "./AddWord";
import Message from "./Message";
import axios from "../axios/dict";

//Creating app theme
const theme = createMuiTheme({
  palette: {
    background: {
      default: "#5d1049",
    },
  },
});

//Main component
const App = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [list, setList] = useState([]);

  console.log(list);

  //filtering records based on user input
  useEffect(() => {
    setList(
      listItems.filter((lists) =>
        lists.id.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  //function to add new word to the record
  const addNewWord = async (value) => {
    const response = await axios.get(`/add/${value}`);
    getData();
    setShowMessage(true);
  };

  //fetching initial render records
  useEffect(() => {
    getData();
  }, []);

  //function to fetch the records from api
  const getData = async () => {
    const response = await axios.get(`/words`);
    setListItems(
      response.data.map((d) => {
        return d.word[0];
      })
    );
    setList(
      response.data.map((d) => {
        return d.word[0];
      })
    );
  };

  //rendering the component
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Message open={showMessage} setShowMessage={setShowMessage} />

        {showSearch ? (
          <SearchBar
            setShowSearch={setShowSearch}
            setSearchValue={setSearchValue}
            value={searchValue}
          />
        ) : (
          <Header setShowSearch={setShowSearch} />
        )}
        <AddWord addNewWord={addNewWord} listItems={listItems} />
        <WordList data={list} />
      </MuiThemeProvider>
    </div>
  );
};

export default App;
