import React from 'react'
import { useState,useEffect } from 'react'
import { getTripDataFromFireStore, postTripBook } from '../../Helpers/firebase'
import DescriptionCont from './DescriptionCont'
import { useParams } from "react-router-dom";
import Itr from './Itr';
import PricePolicy from './Price';
import DatePicker from "./data-picker.jsx";
{/*const data={
    title:'4 Days Alexandria & Al Alamein Tour Package – Egypt Honeymoon Trip',
    description:'We give you the opportunity to enjoy short trip packages from Egypt to Alexandria and El Alamein. This package is specially designed for those who do not have much time in Egypt to discover the most beautiful places in Alexandria and El Alamein.',
    duration:'4 Days / 3 Nights',
    destination:'Alexandria & El Alamein',
    availability:'Every Day',
    pickupLocation:'Borg El Arab Airport',
    tourType:'Private',
    locationYouWillVisit:["Library of Alexandria",
    "Qaitbay Citadel",
    "Montazah Palace",
    "Catacombs of Kom El Shoqafa",
    "El Alamein Military Museum"],
    toursInclude:["Meet and Assist in the airport.", "Our assistance during your stay.", "All transport by private air-conditioned vehicle.", "Accommodation for 3 nights in Alexandria Hotel with Breakfast."],
    toursExclude:[""]

}*/}


const Description = () => {
    let { id } = useParams();
    const [data,setData] = useState([])
    const [filter,setFilter] = useState('dsc')
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [bookData,setBookData] = useState({fullName:'',email:'',phoneNumber:'', message:''});
    const [alert,setAlert] = useState('')
    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await getTripDataFromFireStore(id);
              setData(response);
            }
            catch (error) {
              console.log(error);
            }
          }
          fetchData();
    },[])
    async function handleSubmit(e){
      e.preventDefault();
      if(!bookData.email || !bookData.fullName || !bookData.phoneNumber){
        setAlert('All Fields are required!')
        return
      }
      bookData.startDate = startDate?._d;
      bookData.endDate = endDate?._d;
      bookData.tripName=data[0]?.title;
      bookData.tripID=data[0]?._id;
      const postDataBook = await postTripBook(bookData);
      console.log("post book data=>",postDataBook)
      setAlert('Booked Successfully')
      return

    }
  return (
    <div className='book-cont'>
      {data?
      <>
        <div className='col w-25'></div>
        <div className='cont-dsc col'>
            <nav className='nav-f flex'>
                <ul className='flex'>
                    <li className={`il-f ${filter==='dsc'?'active':''}`} onClick={e=>setFilter('dsc')}>Description</li>
                    <li className={`il-f ${filter==='itinerary'?'active':''}`} onClick={e=>setFilter('itinerary')}>Itinerary</li>
                    <li className={`il-f ${filter==='policy'?'active':''}`} onClick={e=>setFilter('policy')}>Price Policy</li>
                </ul>
            </nav>
            {filter=="dsc"&& data.length>0&&<DescriptionCont data={data}/>}
            {filter=="itinerary"&& data.length>0&&<Itr data={data}/>}
            {filter=="policy"&& data.length>0&&<PricePolicy data={data}/>}


        </div>
        {console.log('daga->',data)}
        <div className='col-lg col-book'>
          <div className='bool-container'>
            <div className='book-card-title'>
              <h3>Book This Tour</h3>
              <div className="prc-widget">
                <h3>{data[0]?.pricePerDay}</h3>
                <span>Per Day</span>
              </div>
            </div>
            <div className='book-card-content'>
              <form id='booking-form' onSubmit={handleSubmit}>
                <div className='booking-form-wrapper'>
                  
                  <div className='booking-form-row'>
                    <input placeholder='Your Full Name' onChange={e=>
                       setBookData({ ...bookData, fullName: e.target.value })
                    }/>
                  </div>
                  <div className='booking-form-row'>
                    <input placeholder='Your Email' onChange={e=>
                       setBookData({ ...bookData, email: e.target.value })
                    }/>
                  </div>
                  <div className='booking-form-row'>
                    <input placeholder='Your Phone' onChange={e=>
                       setBookData({ ...bookData, phoneNumber: e.target.value })
                    }/>
                  </div>
                  
                  <div className='booking-form-row'>
                    <input placeholder='Your Message'
                    onChange={e=>
                      setBookData({ ...bookData, message: e.target.value })
                   }/>
                  </div>
                  <DatePicker startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
                  <div className='booking-form-row'>
                    {alert.length>0?<span>{alert}</span>:<></>}
                    <button type='submit'>
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
            </>
    :
    <i class="gg-spinner"></i>
    }
    </div>
  )
}

export default Description