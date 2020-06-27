import React from "react";
import PropertiesTable from "../components/properties/PropertiesTable";
import { Link } from "react-router-dom";
import MiniDrawer from "../navigation/MiniDrawer";
import { makeStyles, useTheme } from "@material-ui/core/styles";

// import PropertiesTable from './PropertiesTable'

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

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className="container ml-0 mt-3">
      <div className={classes.root}>
        <MiniDrawer selectedIndex={0} />

        <div className={classes.toolbar}>
          <div className="row">
            <div className="col">
              <h2 className="mt-2 mb-5">Dashboard</h2>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Company Wide</h3>
              <br />

              <div className="row m-2 text-center">
                <div className="row">
                  <div className="col-3">
                    <h4>91%</h4>
                  </div>
                  <div className="col-3">
                    <h4>97%</h4>
                  </div>
                  <div className="col-3">
                    <h4>84%</h4>
                  </div>
                  <div className="col-3">
                    <h4>1.29</h4>
                  </div>
                </div>

                <div className="row">
                  <div className="col-3">
                    <h6>Income</h6>
                  </div>
                  <div className="col-3">
                    <h6>Expense</h6>
                  </div>
                  <div className="col-3">
                    <h6>Occupancy</h6>
                  </div>
                  <div className="col-3">
                    <h6>DSCR</h6>
                  </div>
                </div>
              </div>

              <div className="row m-2">
                <div className="row">
                  <div className="col-3">
                    <h4>32%</h4>
                  </div>
                  <div className="col-3">
                    <h4>83%</h4>
                  </div>
                  <div className="col-3">
                    <h4>315%</h4>
                  </div>
                  <div className="col-3">
                    <h4>$7,354</h4>
                  </div>
                </div>

                <div className="row">
                  <div className="col-3">
                    <h6>Utilities</h6>
                  </div>
                  <div className="col-3">
                    <h6>NOI</h6>
                  </div>
                  <div className="col-3">
                    <h6>Available Units</h6>
                  </div>
                  <div className="col-3">
                    <h6>Total Unit Cost</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="row m-3 justify-content-end">
                <Link
                  to="/property"
                  className="btn btn-lg btn-dark"
                  role="button"
                >
                  New Property
                </Link>
              </div>

              <div className="row m-3 justify-content-end">
                <Link to="/" className="btn btn-lg btn-dark" role="button">
                  Analyze
                </Link>
              </div>
            </div>
          </div>

          <div className="row">{/* <PropertiesTable /> */}</div>
        </div>
      </div>
    </div>
  );
}
