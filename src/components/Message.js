import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/core";

//Styling the component
const styles = {
  root: {
    background: "#353232",
    color: "#fff",
    width: "100%",
    bottom: 0,
  },
};
//Main component
const Message = ({ classes, open, setShowMessage }) => {
  const vertical = "bottom";
  const horizontal = "center";

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={2000}
        open={open}
        onClose={() => {
          setShowMessage(false);
        }}
        message="Queued Successfully."
        key={"bottom" + "center"}
        ContentProps={{
          classes: {
            root: classes.root,
            bar: classes.bar,
          },
        }}
      />
    </div>
  );
};

export default withStyles(styles)(Message);
