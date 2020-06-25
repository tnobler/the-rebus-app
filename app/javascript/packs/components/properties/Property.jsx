import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Property extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // ae_flood_zone: this.props.property.ae_flood_zone
    }
  }
  
  render() {
    const { property } = this.props
    return (
      <div>
        <h1>
          {property.name}
        </h1>
        <h1>
          {property.city}
        </h1>
        <h1>
          {property.unit_count}
        </h1>
        <h1>
          {/* {`${this.state.ae_flood_zone ? 'Yes' : 'No'}`} */}
        </h1>
      </div>
    )
  }
}

// Property.propTypes = {
//   property: PropTypes.object.isRequired,
// }