import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import MiniDrawer from "../../navigation/MiniDrawer";
import { useState } from "react";
import PropertyCard from "./PropertyCard";

export default function Properties() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("/api/v1/properties").then((response) => {
        setData(response.data);
      });
    };
    fetchData();
  }, []);

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

            <div className="row ml-3">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Property Name</th>
                    <th scope="col">Unit Count</th>
                    <th scope="col">Analysis Year</th>
                    <th scope="col">Year Built</th>
                    <th scope="col">MSA</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((property) => {
                    return (
                      <tr key={property.id}>
                        <th scope="row">
                          <Link to={`/property/${property.id}`}>
                            {property.name}
                          </Link>
                        </th>
                        <td scope="row">{property.unit_count}</td>
                        <td scope="row">{property.analysis_year}</td>
                        <td scope="row">{property.year_built}</td>
                        <td scope="row">{property.msa}</td>
                        <td scope="row">{property.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="row" />
            <Link to="/" className="btn btn-sm btn-dark">
              Home
            </Link>
          </main>
        </div>
      </div>
    </>
  );
}
