import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Card, CardContent, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

//Styling the component
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    outline: 0,
    width: "100vw",
    height: "100ch",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflowY: "scroll",
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
  closeicon: {
    float: "right",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    boxShadow: "none",
  },
  center: {
    textAlign: "center",
  },
  italictexts: {
    fontStyle: "italics",
    fontSize: 12,
  },
}));

//Main Component
const WordDisplay = ({ open, setWordDisplay, word }) => {
  const classes = useStyles();
  const bullet = <span className={classes.bullet}>•</span>;
  const modalbody = (
    <div className={classes.paper}>
      <CloseIcon
        className={classes.closeicon}
        onClick={() => setWordDisplay(false)}
      />

      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {word.id}
          </Typography>
          <Typography
            component={"div"}
            className={classes.pos}
            color="textSecondary"
          >
            {word.lexicalEntries.map((lex) => {
              return (
                <p style={{ color: "black" }} key={lex.lexicalCategory.id}>
                  <p className={classes.italictexts}>
                    {lex.lexicalCategory.id}
                  </p>
                  <p>
                    <span className={classes.italictexts}>etymology :</span>{" "}
                    {lex.entries[0].etymologies};
                    {lex.entries[0].senses.map((sense) => {
                      return (
                        <div>
                          <p>
                            {bullet}
                            {sense.definitions[0]}
                          </p>
                          <p>
                            <span className={classes.italictexts}>
                              synonyms:
                            </span>{" "}
                          </p>
                        </div>
                      );
                    })}
                  </p>
                </p>
              );
            })}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setWordDisplay(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalbody}
      </Modal>
    </div>
  );
};

export default WordDisplay;
