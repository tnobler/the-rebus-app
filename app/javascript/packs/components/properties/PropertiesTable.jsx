import React, { Component } from 'react'
import ReactCollapsingTable from 'react-collapsing-table'


export default class PropertiesTable extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      rows: [
        {
          id: 1,
          name: 'Aspen',
          city: 'Houston',
          unit_count: "209",
          year_built: "1974",
          submarket: "Greater Inwood",
          analysis_year: "2018",
          sales_price: "12355000",
          price_per_unit: "59114",
          notes: "We acquired this property in 2018 and it was brought to us by Chase Tucker and Chris.",
          status: "Owned"
        }
      ],
      columns: [
        { accessor: 'name', label: 'Property Name', priorityLevel: 1, position: 1, minWidth: 150 },
        { accessor: 'city', label: 'City', priorityLevel: 2, position: 2, minWidth: 150 },
        { accessor: 'unit_count', label: 'Unit Count', priorityLevel: 3, position: 3, minWidth: 150 },
        { accessor: 'year_built', label: 'Year Built', priorityLevel: 4, position: 4, minWidth: 150 },
        { accessor: 'submarket', label: 'Submarket', priorityLevel: 5, position: 5, minWidth: 150 },
        { accessor: 'analysis_year', label: 'Analysis Year', priorityLevel: 6, position: 6, minWidth: 150 },
        { accessor: 'sales_price', label: 'Sales Price', priorityLevel: 7, position: 7, minWidth: 150 },
        { accessor: 'price_per_unit', label: 'Price/Unit', priorityLevel: 8, position: 8, minWidth: 150 },
        { accessor: 'notes', label: 'Notes', priorityLevel: 9, position: 9, minWidth: 150 },
        { accessor: 'status', label: 'Status', priorityLevel: 10, position: 10, minWidth: 150 }
      ]
    }
    
  }
  
  render() {
    
    return (
      <div>
        <ReactCollapsingTable 
          columns={ this.state.columns  }
          rows={ this.state.rows }
          rowSize={ 5 }
          column='email'
          showSearch={ true }
          showPagination={ true }
        />
      </div>
    )
  }
}
