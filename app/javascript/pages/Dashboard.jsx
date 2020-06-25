import React from 'react'
import PropertiesTable from '../components/properties/PropertiesTable'

// import PropertiesTable from './PropertiesTable'

export default function Dashboard() {
  return (
    <div>
    <h2>Dashboard</h2>
        <ul>
          <li>
            <h3>Company Wide</h3>
            <ul>
              <li>
                <button>New Property</button>
              </li>
              <li>
                <button>Analyze</button>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <PropertiesTable />

          </li>
        </ul>
    </div>
  )
}
