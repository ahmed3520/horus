import React, { useEffect, useState } from "react"
import { list } from "../../data/Data"
import { useNavigate } from "react-router-dom";
import Price from "../price/Price"
import { getTripsDataFromFireStore } from "../../../Helpers/firebase";

const RecentCard = () => {
  const [dataTrip,setDataTrip] = useState();
  const navigate = useNavigate();
  const handleClick = (e,id) => {
    navigate(`/book/${id}`);
}
useEffect(()=>{
  const fetchData = async () => {
    try {
      const response = await getTripsDataFromFireStore();
      setDataTrip(response);
    }
    catch (error) {
      console.log(error);
    }
  }
  fetchData();
console.log('res recent card=>',dataTrip)
},[])
  return (
    <>
      <div className='content grid3 mtop crd-exp'>
        {dataTrip&& dataTrip.map((val, index) => {
          const { selectedFile, location, title, pricePerDay, duration,bookingAvailability,_id } = val
          return (
            <div className='box shadow' key={index} onClick={e=>handleClick(e,_id)}>
              <div className='img'>
                <img src={selectedFile} alt='' className="img-card" />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: bookingAvailability === "Booking is available" ? "#25b5791a" : "#ff98001a", color: bookingAvailability === "Booking is available" ? "#25b579" : "#ff9800" }}>{bookingAvailability}</span>
                  {/*<i className='fa fa-heart'></i>*/}
                </div>
                <h4>{title}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                
                  <button className='btn2' onClick={e=>handleClick(e,_id)}>Book {pricePerDay}</button> 
                  <label htmlFor='Price'>/Day</label>
                </div>
                <span>{duration}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard