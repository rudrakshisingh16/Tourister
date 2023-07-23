import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const FindLocation = () => {

  const [locationList, setLocationList] = useState([]);

    const {place} = useParams();

    useEffect(() => {
        fetchLocations();
    }, [])
    
    const fetchLocations = async () => {
        const res = await fetch('http://localhost:5000/location/getall');
        const data = await res.json();

        console.log(data);
        setLocationList(data.filter(obj => obj.place == place));
    };

    const displayLocations = () => {
        if(locationList.length === 0 ) return <p className='text-center display-4'>No Locations Found at {place}</p>
        return locationList.map(location => (
            <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img className='card-img-top' src={location.image} />
                  <div className='card-body'>
                    <h3>{location.title}</h3>
                    <p>{location.description}</p>
                  </div>
                </div>
              </div>
        ))}
  return (
    <div>
        <div className='container'>
            <div className='row'>
            {displayLocations()}
            </div>
        </div>
    </div>
  )}
  
export default FindLocation;