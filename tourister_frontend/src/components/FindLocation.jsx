import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import placesData from './placesData';

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
        setLocationList(data.filter(obj => obj.place === place));
    };

    const displayLocations = () => {
        if(locationList.length === 0 ) return <p className='text-center display-4'>No Locations Found at {place}</p>
        return locationList.map(location => (
            <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img className='card-img-top' src={'http://localhost:5000/'+location.image} alt="" />
                  <div className='card-body'>
                    <h3>{location.title}</h3>
                    <p>{location.description}</p>
                  </div>
                </div>
              </div>
        ))}
  return (
    <div>
      <header className='location-header' style={{
        backgroundImage: `linear-gradient(0deg, #0000009d, #0000009d), url('${placesData.find(obj => obj.name === place).cover}')`
      }}>
        <div className='container py-5'>
          <h1 className='display-3 text-white fw-bold'>Best Locations to Visit at {place}</h1>
            <div className='row mt-5'>
            {displayLocations()}
            </div>
        </div>
      </header>
    </div>
  )}
  
export default FindLocation;