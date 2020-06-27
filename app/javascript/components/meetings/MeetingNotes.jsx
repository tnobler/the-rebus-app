import React from "react";
import MiniDrawer from "../../navigation/MiniDrawer";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    // display: "flex",
    // alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

export default function MeetingNotes() {
  const classes = useStyles();
  return (
    <div className="container mt-3">
      <div className={classes.root}>
        <MiniDrawer selectedIndex={2} />
        <h1>Meeting Notes</h1>
      </div>
    </div>
  );
}
