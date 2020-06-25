import React from "react";
import ReactDOM from "react-dom";

import axios from 'axios'

import Properties from "./properties/Properties";
import Property from "./properties/Property";
import PropertiesTable from "./properties/PropertiesTable";

class RebusApp extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      properties: []
    }
    this.getProperties = this.getProperties.bind(this)
  }

  componentDidMount() {
    this.getProperties()
  }

  getProperties() {
    axios
      .get("/api/v1/properties")
      .then(response => {
        const properties = response.data
        this.setState({ properties })
      })
      .catch(error => {
        console.log(error);
        
      })
  }
  
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
        </ul>
        <ul>
          <li>
            <PropertiesTable />
          </li>
        </ul>
        <ul>
          <li>
            <Properties>
              {this.state.properties.map(property => (
                <Property key={property.id} property={property} />
              ))}
            </Properties>
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
