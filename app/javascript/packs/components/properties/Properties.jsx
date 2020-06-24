import React, { Component } from "react";
import PropertiesTable from "./PropertiesTable";

export default class Properties extends Component {
  render() {
    return (
      <>
        <div>
          <h4>
          Property1 
          </h4>
          <h4>
          Property2
          </h4>
          <PropertiesTable />
        
        </div>
      </>
    )
  }
}
