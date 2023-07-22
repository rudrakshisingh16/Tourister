import React from 'react'
import placesData from './placesData'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>My Homepage</h1>
      <p className='heading'>My first react app</p>
      <h3 style={{ color: 'blue', backgroundColor: 'yellow' }}></h3>
      <input type='text' />

      <div className='container'>

        <h1 className='text-center'>
          Popular Locations
        </h1>
        <div className='row'>
          {
            placesData.map(place => (
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img className='card-img-top' src={place.cover} />
                  <div className='card-body'>
                    <h3>{place.name}</h3>
                    <p>{place.description}</p>
                    <Link className='btn btn-primary mt-3' to={'/findLocation/'+place.name}>Find Places</Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Home