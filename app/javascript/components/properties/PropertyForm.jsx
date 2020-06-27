import React, { Component } from "react";

import axios from "axios";
import setAxiosHeaders from "../AxiosHeaders";
import MiniDrawer from "../../navigation/MiniDrawer";

export default class PropertyForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameRef = React.createRef();
    this.streetAddressRef = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    setAxiosHeaders();
    axios
      .post("/api/v1/properties", {
        property: {
          name: this.nameRef.current.value,
          street_address: this.streetAddressRef.current.value,
        },
      })
      .then((response) => {
        this.props.history.push(`api/v1/property/${response.id}`);
      })
      // .then(response => {
      //   const property = response.data
      //   console.log(property);

      //   // this.props.createProperty(property)
      // })
      .catch((error) => {
        console.log(error);
      });
    event.target.reset();
  }

  render() {
    return (
      <div className="container mt-3">
        <MiniDrawer selectedIndex={null} />
        <form onSubmit={this.handleSubmit} className="my-3">
          <div className="form-row">
            <div className="form-group col-md-8">
              <input
                type="text"
                name="name"
                ref={this.nameRef}
                required
                className="form-control"
                id="name"
                placeholder="Property Name"
              />
              <input
                type="text"
                name="street_address"
                ref={this.streetAddressRef}
                required
                className="form-control"
                id="street_address"
                placeholder="Street Address"
              />
            </div>
            <div className="form-group col-md-4">
              <button
                type="submit"
                className="btn btn-outline-success btn-block"
              >
                Create Property
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
