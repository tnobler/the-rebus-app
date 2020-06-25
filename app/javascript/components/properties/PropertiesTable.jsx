import React, { Component } from 'react'
import ReactCollapsingTable from 'react-collapsing-table'

import axios from 'axios'


export default class PropertiesTable extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      rows: [],
      columns: [
        { accessor: 'name', label: 'Property Name', priorityLevel: 1, position: 1, minWidth: 300 },
        { accessor: 'msa', label: 'MSA', priorityLevel: 2, position: 2, minWidth: 150 },
        { accessor: 'status', label: 'Status', priorityLevel: 3, position: 3, minWidth: 150 },
        { accessor: 'unit_count', label: 'Unit Count', priorityLevel: 4, position: 4, minWidth: 150 },
        { accessor: 'analysis_year', label: 'Analysis Year', priorityLevel: 5, position: 5, minWidth: 150 },
        { accessor: 'year_built', label: 'Year Built', priorityLevel: 6, position: 6, minWidth: 150 },
        { accessor: 'ae_flood_zone', label: 'AE Flood Zone?', priorityLevel: 7, position: 7, minWidth: 150 },
        { accessor: 'fka', label: 'fka', priorityLevel: 8, position: 8, minWidth: 150 },
        { accessor: 'notes', label: 'Notes', priorityLevel: 9, position: 9, minWidth: 150 },
        { accessor: 'submarket', label: 'Submarket', priorityLevel: 10, position: 10, minWidth: 150 },
        { accessor: 'street_address', label: 'Street Address', priorityLevel: 11, position: 11, minWidth: 150 },
        { accessor: 'city', label: 'City', priorityLevel: 12, position: 12, minWidth: 150 },
        { accessor: 'state', label: 'State', priorityLevel: 13, position: 13, minWidth: 150 },
        { accessor: 'zipcode', label: 'Zipcode', priorityLevel: 14, position: 14, minWidth: 150 },
        { accessor: 'broker', label: 'Broker', priorityLevel: 15, position: 15, minWidth: 150 },
        { accessor: 'asking_price', label: 'Asking Price', priorityLevel: 16, position: 16, minWidth: 150 },
        { accessor: 'price_per_unit', label: 'Price/Unit', priorityLevel: 17, position: 17, minWidth: 150 },
        { accessor: 'offer_price', label: 'Offer Price', priorityLevel: 18, position: 18, minWidth: 150 },
        { accessor: 'sales_price', label: 'Sales Price', priorityLevel: 19, position: 19, minWidth: 150 },
        { accessor: 'photo', label: 'Photo', priorityLevel: 20, position: 20, minWidth: 150 }
      ]
    }
    this.getRows = this.getRows.bind(this)
  }

  componentDidMount() {
    this.getRows()
  }

  getRows() {
    axios
      .get("/api/v1/properties")
      .then(response => {
        const rows = response.data
        this.setState({ rows })
      })
      .catch(error => {
        console.log(error);
        
      })
      
  
    // this.getPropertyAttributes = this.getPropertyAttributes.bind(this)
    
  }

  // componentDidMount() {
  //   this.getPropertyAttributes()
  // }

  // getPropertyAttributes() {
  //   this.setState(
  //     this.props.properties.map((property) => {
  //       property.map((attr, index) => {
  //         const { id, name, city, unit_count, year_built, submarket, analysis_year, sales_price, price_per_unit, notes, status} = attr
  //         return (
  //           [
  //             {id}, {name}, {city}, {unit_count}, {year_built}, {submarket}, {analysis_year}, {sales_price}, {price_per_unit}, {notes}, {status}
  //           ]
  //         )
  //       })
  //     })
  //   )
  // }

  
  render() {
    
    return (
      <div>
        <ReactCollapsingTable 
          columns={ this.state.columns }
          rows={ this.state.rows }
          rowSize={ 9 }
          column='email'
          showSearch={ true }
          showPagination={ true }
          theme={ 'react-collapsible-theme table table-striped table-hover table-borderless' }
        />
      </div>
    )
  }
}
