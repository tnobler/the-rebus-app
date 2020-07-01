import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MiniDrawer from "../../navigation/MiniDrawer";
import setAxiosHeaders from "../AxiosHeaders";

export default class Property extends Component {
  constructor(props) {
    super(props);

    this.state = {
      property: {},
    };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.getProperty = this.getProperty.bind(this);
    this.getEditProperty = this.getEditProperty.bind(this);
    this.deleteProperty = this.deleteProperty.bind(this);
    // this.path = `/api/v1/properties/${property.id}`;
  }

  componentDidMount() {
    this.getProperty();
    this.getEditProperty();
  }

  deleteProperty() {
    setAxiosHeaders();
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const confirmation = confirm("Are you sure?");
    if (confirmation) {
      axios
        .delete(`/api/v1/properties/${id}`)
        .then(this.props.history.push(`/properties`))
        .catch((error) => {
          console.log(error);
        });
    }
  }

  getProperty() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    axios
      .get(`/api/v1/properties/${id}`)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  getEditProperty() {
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
          <h1 className="display-3 position-relative">{property.name}</h1>
        </div>
        <div className="position-relative d-flex align-items-center justify-content-center">
          <div className="overlay bg-dark position-absolute" />

          <h5 className="position-relative">fka {property.fka}</h5>
        </div>

        <div className="container py-5 ml-5">
          <div className="row mb-3 py-3 px-3">
            <div className="col-sm-6 col-md-3 col-lg-2 py-3">
              <ul className="list-group">
                <h5 className="mb-2">Address</h5>
                {property.street_address}
                <br />
                {property.city}, {property.state} {property.zipcode}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 py-3">
              <ul className="list-group">
                <h5 className="mb-2">Unit Count</h5>
                {property.unit_count}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 py-3">
              <ul className="list-group">
                <h5 className="mb-2">Year Built</h5>
                {property.year_built}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 py-3">
              <ul className="list-group">
                <h5 className="mb-2">Analysis Year</h5>
                {property.analysis_year}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 py-3">
              <ul className="list-group">
                <h5 className="mb-2">Status:</h5>
                {property.status}
              </ul>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2 py-3">
              <ul className="list-group">
                <h5 className="mb-2">MSA</h5>
                {property.msa}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 py-3">
              <ul className="list-group">
                <h5 className="mb-2">Submarket</h5>
                {property.submarket}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 py-3">
              <ul className="list-group">
                <h5 className="mb-2">Broker</h5>
                {property.broker}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 py-3">
              <ul className="list-group">
                <h5 className="mb-2">Asking Price</h5>
                {property.asking_price}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 py-3">
              <ul className="list-group">
                <h5 className="mb-2">Price/Unit</h5>
                {property.price_per_unit}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 py-3">
              <ul className="list-group">
                <h5 className="mb-2">Offer Price</h5>
                {property.offer_price}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 py-3">
              <ul className="list-group">
                <h5 className="mb-2">Sales Price</h5>
                {property.sales_price}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 py-3">
              <ul className="list-group">
                <h5 className="mb-2">Notes</h5>
                <p>{property.notes}</p>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-2 py-3">
              <ul className="list-group">
                <h5 className="mb-2">AE Flood Zone?</h5>
                {property.ae_flood_zone ? "Yes" : "No"}
              </ul>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <Link
                to={`/property/edit/${property.id}`}
                className="btn btn-lg btn-dark"
                role="button"
              >
                Edit Property
              </Link>
            </div>
          </div>

          <div>
            <div className="col">
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.deleteProperty}
              >
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
