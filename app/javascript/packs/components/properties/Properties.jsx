import React, { Component } from "react";
import PropertiesTable from "./PropertiesTable";

export default class Properties extends Component {
  constructor(props) {
    super(props)
    
  }
  
  render() {
    return (
      <>
        <div>
          
          
          {this.props.children}
        
        </div>
      </>
    )
  }
}
