import React, { useState } from "react";
import { Button, Fab, Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

//Styling the component
const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    background: "#5d1049",
    color: "#fff",
  },
  paper: {
    position: "absolute",
    outline: 0,
    minWidth: "25%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textfield: {
    width: "100%",
  },
  modalbutton: {
    margin: theme.spacing(1),
  },
  modalbuttongroup: {
    textAlign: "right",
  },
}));

//Main component
const AddWord = ({ addNewWord }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  //Addword button function
  const addWord = () => {
    if (value) {
      addNewWord(value);
      setOpen(false);
      setValue("");
    }
  };

  //Modal to add new word
  const modalbody = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Add To Dictionary</h2>
      <div id="simple-modal-description">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            className={classes.textfield}
            id="standard-basic"
            label="New Word"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <div className={classes.modalbuttongroup}>
            <Button
              className={classes.modalbutton}
              variant="contained"
              color="primary"
              onClick={() => {
                setOpen(false);
                setValue("");
              }}
            >
              Cancel
            </Button>
            <Button
              className={classes.modalbutton}
              variant="contained"
              color="primary"
              onClick={addWord}
            >
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );

  //rendering the component
  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          setValue("");
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalbody}
      </Modal>
      <Fab
        className={classes.fab}
        aria-label="add"
        onClick={() => setOpen(true)}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default AddWord;
