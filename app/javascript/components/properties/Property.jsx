import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MiniDrawer from "../../navigation/MiniDrawer";

export default class Property extends Component {
  constructor(props) {
    super(props);

    this.state = {
      property: {},
    };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.getProperty = this.getProperty.bind(this);
  }

  componentDidMount() {
    this.getProperty();
  }

  getProperty() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    axios
      .get(`/api/v1/properties/${id}`)
      .then((response) => {
        const property = response.data;
        this.setState({ property });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  render() {
    const { property } = this.state;
    let unitList = "No units available";

    if (property.unit_count > 0) {
      unitList = property.unit_count;

      // WHEN THERE ARE ACTUAL UNITS
      // .split(",")
      // .map((unit, index) => (
      //   <li key={index} className="list-group-item">
      //     {unit}
      //   </li>
      // ));
    }
    const propertyNotes = this.addHtmlEntities(property.notes);

    return (
      <div className="container">
        <MiniDrawer selectedIndex={2} />
        <div className="position-relative d-flex align-items-center justify-content-center">
          {/* <img
            src={property.photo}
            alt={`${property.name} photo`}
            className="img-fluid position-absolute"
          /> */}
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative">{property.name}</h1>
        </div>
        <div className="container py-5 ml-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">units</h5>
                {unitList}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Deal Notes</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${propertyNotes}`,
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger">
                Delete Property
              </button>
            </div>
          </div>
          <Link to="/properties" className="btn btn-link">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }
}
