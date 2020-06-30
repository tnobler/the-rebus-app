import React, { Component } from "react";

import axios from "axios";
import setAxiosHeaders from "../AxiosHeaders";
import MiniDrawer from "../../navigation/MiniDrawer";

export default class NewPropertyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleChange = this.toggleChange.bind(this);

    // Refs
    this.nameRef = React.createRef();
    this.streetAddressRef = React.createRef();
    this.statusRef = React.createRef();
    this.cityRef = React.createRef();
    this.stateRef = React.createRef();
    this.zipcodeRef = React.createRef();
    this.unitCountRef = React.createRef();
    this.yearBuiltRef = React.createRef();
    this.aeFloodZoneRef = React.createRef();
    this.msaRef = React.createRef();
    this.submarketRef = React.createRef();
    this.brokerRef = React.createRef();
    this.analysisYearRef = React.createRef();
    this.askingPriceRef = React.createRef();
    this.pricePerUnitRef = React.createRef();
    this.offerPriceRef = React.createRef();
    this.salesPriceRef = React.createRef();
    this.notesRef = React.createRef();
    this.fkaRef = React.createRef();
    this.photoRef = React.createRef();
  }

  // componentDidMount() {
  //   this.toggleChange();
  // }

  toggleChange() {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    setAxiosHeaders();
    axios
      .post("/api/v1/properties", {
        property: {
          name: this.nameRef.current.value,
          street_address: this.streetAddressRef.current.value,
          status: this.statusRef.current.value,
          city: this.cityRef.current.value,
          state: this.stateRef.current.value,
          zipcode: this.zipcodeRef.current.value,
          unit_count: this.unitCountRef.current.value,
          year_built: this.yearBuiltRef.current.value,
          ae_flood_zone: this.state.isChecked,
          msa: this.msaRef.current.value,
          submarket: this.submarketRef.current.value,
          broker: this.brokerRef.current.value,
          analysis_year: this.analysisYearRef.current.value,
          asking_price: this.askingPriceRef.current.value,
          price_per_unit: this.pricePerUnitRef.current.value,
          offer_price: this.offerPriceRef.current.value,
          sales_price: this.salesPriceRef.current.value,
          fka: this.fkaRef.current.value,
          notes: this.notesRef.current.value,
          // photo: this.photoRef.current.value,
        },
      })
      .then((response) => {
        this.props.history.push(`/property/${response.data.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
    event.target.reset();
  }

  render() {
    return (
      <div className="container mt-3">
        <MiniDrawer selectedIndex={null} />.
        <div className="row ml-3">
          <div className="col">
            <h2 className="ml-4 pl-2">New Property</h2>
          </div>
        </div>
        <div className="ml-5">
          <form onSubmit={this.handleSubmit} className="my-3">
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="name">Property Name</label>
                <input
                  type="text"
                  name="name"
                  ref={this.nameRef}
                  required
                  className="form-control"
                  id="name"
                  placeholder="Property Name"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="fka">FKA</label>
                <input
                  type="text"
                  name="fka"
                  ref={this.fkaRef}
                  className="form-control"
                  id="fka"
                  placeholder="Formerly Known As..."
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="inputState">Status</label>
                <select
                  id="inputStatus"
                  className="form-control"
                  ref={this.statusRef}
                >
                  <option defaultValue>New</option>
                  <option>Awaiting Financials</option>
                  <option>Input Financials</option>
                  <option>Awaiting Comps</option>
                  <option>Input Comps</option>
                  <option>Awaiting Tour</option>
                  <option>Deciding</option>
                  <option>LOI Sent</option>
                  <option>Best and Final</option>
                  <option>Offered Lost</option>
                  <option>Deal Won</option>
                  <option>Passed</option>
                  <option>Blank</option>
                  <option>Own</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="street_address">Street Address</label>
              <input
                type="text"
                name="street_address"
                ref={this.streetAddressRef}
                className="form-control"
                id="street_address"
                placeholder="1234 Main St"
              />
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  ref={this.cityRef}
                  className="form-control"
                  id="city"
                />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="state">State</label>
                <select
                  id="state"
                  name="state"
                  ref={this.stateRef}
                  className="form-control"
                >
                  <option defaultValue>Texas</option>
                  <option>Arizona</option>
                  <option>New Mexico</option>
                  <option>Oklahoma</option>
                  <option>Indiana</option>
                  <option>other</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="zipcode">Zipcode</label>
                <input
                  type="text"
                  ref={this.zipcodeRef}
                  className="form-control"
                  id="zipcode"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="unit_count">Unit Count</label>
                <input
                  type="text"
                  ref={this.unitCountRef}
                  className="form-control"
                  id="unit_count"
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="analysis_year">Analysis Year</label>
                <select
                  id="analysis_year"
                  ref={this.analysisYearRef}
                  className="form-control"
                >
                  <option defaultValue>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="year_built">Year Built</label>
                <input
                  type="text"
                  ref={this.yearBuiltRef}
                  className="form-control"
                  id="year_built"
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="msa">MSA</label>
                <input
                  type="text"
                  ref={this.msaRef}
                  className="form-control"
                  id="msa"
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="submarket">Submarket</label>
                <input
                  type="text"
                  ref={this.submarketRef}
                  className="form-control"
                  id="submarket"
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="broker">Broker</label>
                <input
                  type="text"
                  ref={this.brokerRef}
                  className="form-control"
                  id="broker"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-2">
                <label htmlFor="asking_price">Asking Price</label>
                <input
                  type="text"
                  ref={this.askingPriceRef}
                  className="form-control"
                  id="asking_price"
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="price_per_unit">Price/Unit</label>
                <input
                  type="text"
                  ref={this.pricePerUnitRef}
                  className="form-control"
                  id="price_per_unit"
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="offer_price">Offer Price</label>
                <input
                  type="text"
                  ref={this.offerPriceRef}
                  className="form-control"
                  id="offer_price"
                />
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="sales_price">Sales Price</label>
                <input
                  type="text"
                  ref={this.salesPriceRef}
                  className="form-control"
                  id="sales_price"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-group col-md-12">
                <label htmlFor="notes">Notes</label>
                <textarea
                  type="text"
                  ref={this.notesRef}
                  className="form-control"
                  id="notes"
                  rows="3"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="form-check">
                <label htmlFor="aeFloodZone" className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="aeFloodZone"
                    ref={this.aeFloodZoneRef}
                    defaultChecked={this.state.isChecked}
                    onChange={this.toggleChange}
                  />
                  AE Flood Zone
                </label>
              </div>
            </div>

            {/* <div className="form-group">
              <label htmlFor="photo">Property Photo</label>
              <input type="file" className="form-control-file" id="photo" />
            </div> */}

            <div className="form-group col-md-4 mt-3">
              <button
                type="submit"
                className="btn btn-outline-success btn-block"
              >
                Create Property
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
