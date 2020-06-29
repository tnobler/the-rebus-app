import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import MiniDrawer from "../../navigation/MiniDrawer";
import { useState } from "react";
import PropertyCard from "./PropertyCard";

export default class Properties extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: [],
    };
    this.getProperties = this.getProperties.bind(this);
  }

  componentDidMount() {
    this.getProperties();
  }

  getProperties() {
    axios
      .get("/api/v1/properties")
      .then((response) => {
        const properties = response.data;
        this.setState({ properties });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { properties } = this.state;
    const allProperties = properties.map((property, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={property.photo}
            className="card-img-top"
            alt={`${property.name} photo`}
          />
          <div className="card-body">
            <h5 className="card-title">{property.name}</h5>
            <Link to={`/property/${property.id}`} className="btn custom-button">
              View Property
            </Link>
          </div>
        </div>
      </div>
    ));
    const noProperty = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No properties yet. Why not <Link to="/new_property">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <div className="container ml-5 mt-2">
          <MiniDrawer selectedIndex={1} />
          <div className="row">
            <div className="col">
              <h2 className="ml-4 pl-2 mb">Properties</h2>
            </div>
          </div>
          <div className="py-2">
            <main className="container">
              <div className="text-right mb-3">
                <Link to="/property" className="btn btn-lg btn-dark">
                  Create New Property
                </Link>
              </div>

              <div className="col-md-6 col-lg-4 mb-5">
                <div className="row">
                  <PropertyCard />
                </div>
              </div>

              <div className="row">
                {properties.length > 0 ? allProperties : noProperty}
              </div>
              <Link to="/" className="btn btn-sm btn-dark">
                Home
              </Link>
            </main>
          </div>
        </div>
      </>
    );
  }
}
