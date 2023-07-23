import React, { useState } from "react";
import placesData from "./placesData";
import { Link } from "react-router-dom";

const Home = () => {

  const [locationList, setLocationList] = useState(placesData);

  const searchLocation = (e) => {
    const searchValue = e.target.value;
    const filteredLocation = placesData.filter((place) => {
      return place.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setLocationList(filteredLocation);
  }

  return (
    <div >
      <header className="text-white home-header d-flex justify-content-center flex-column ">
        <div className="container">
          <h1 className="text-center display-1 fw-bold header-title">Tourister</h1>
          <p className="heading text-center h2 ">
            Find intresting places to visit at any location
          </p>
          <input onChange={searchLocation} className="form-control mt-5" type="text" placeholder="search location" />
        </div>
      </header>

      <div className="container">
        <h1 className="text-center">Popular Locations</h1>
        <div className="row">
          {locationList.map((place) => (
            <div className="col-md-4 mb-4">
              <div className="card">
                <img className="card-img-top" src={place.cover} />
                <div className="card-body">
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                  <Link
                    className="btn btn-primary mt-3"
                    to={"/findLocation/" + place.name}
                  >
                    Find Places
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
