import React, { useState } from "react";
import {
  Backdrop,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListSubheader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import WordDisplay from "./WordDisplay";

//Styling the component
const useStyles = makeStyles((theme) => ({
  backdrop: {
    background: "white",
    top: 60,
    overflowY: "scroll",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  list: {
    width: "100%",
    position: "absolute",
    top: 0,
    backgroundColor: theme.palette.background.paper,
  },
  listitem: {
    maxHeight: 80,
    overflow: "hidden",
    alignItems: "baseline",
  },
  inline: {
    display: "inline",
  },
  italictexts: {
    fontStyle: "italics",
    fontSize: 12,
  },
}));

//Main component
const WordList = ({ data }) => {
  const classes = useStyles();
  const [wordDisplay, setWordDisplay] = useState(false);
  const [singleList, setSingleList] = useState([]);

  const displayWord = (list) => {
    setWordDisplay(true);
    setSingleList(list);
  };

  //function to render the lists from db
  const renderedList = data.map((filteredList) => {
    return (
      <React.Fragment key={filteredList.id}>
        <ListItem
          component="div"
          button
          className={classes.listitem}
          onClick={() => displayWord(filteredList)}
        >
          <ListItemText
            component="div"
            primary={<div>{filteredList.id}</div>}
            secondary={
              <React.Fragment>
                <div>
                  {filteredList.lexicalEntries.map((lex) => {
                    return (
                      <div key={lex.lexicalCategory.id}>
                        <span className={classes.italictexts}>
                          ({lex.lexicalCategory.id})
                        </span>
                        <span style={{ color: "#000" }}>
                          {lex.entries[0].senses.map((meaning) => {
                            return meaning.definitions;
                          })}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  });

  //rendering the component
  return (
    <div>
      <Backdrop className={classes.backdrop} open={true}>
        <List
          component="div"
          className={classes.list}
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Words List
            </ListSubheader>
          }
        >
          <Divider />
          {renderedList}
        </List>
        {wordDisplay ? (
          <WordDisplay
            open={wordDisplay}
            setWordDisplay={setWordDisplay}
            word={singleList || []}
          />
        ) : null}
      </Backdrop>
    </div>
  );
};

export default WordList;
