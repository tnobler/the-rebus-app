import React from "react";
import ReactDOM from "react-dom";
import Properties from "./properties/Properties";

class RebusApp extends React.Component {
  render() {
    return (
      <>
        <h2>RebusApp</h2>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <h3>Company Wide</h3>
            <ul>
              <li>
                <button>New Property</button>
              </li>
              <li>
                <button>Analyze</button>
              </li>
            </ul>
          </li>
          <li>
            <Properties />
          </li>
          
        </ul>
      </>
    );
  }
}

document.addEventListener("turbolinks:load", () => {
  const app = document.getElementById("rebus-app");
  app && ReactDOM.render(<RebusApp />, app);
});
