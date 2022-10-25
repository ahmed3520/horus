import React from 'react'
import { useState } from 'react'
import DescriptionCont from './DescriptionCont'

const data={
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

}
const Description = () => {
    const [filter,setFilter] = useState('dsc')
  return (
    <div className='book-cont'>
        <div className='col w-25'></div>
        <div className='cont-dsc col'>
            <nav className='nav-f flex'>
                <ul className='flex'>
                    <li className={`il-f ${filter==='dsc'?'active':''}`} onClick={e=>setFilter('dsc')}>Description</li>
                    <li className={`il-f ${filter==='itinerary'?'active':''}`} onClick={e=>setFilter('itinerary')}>Itinerary</li>
                    <li className={`il-f ${filter==='policy'?'active':''}`} onClick={e=>setFilter('policy')}>Price Policy</li>
                </ul>
            </nav>
            {filter&&<DescriptionCont data={data}/>}
        </div>
        <div className='col'></div>
    </div>
  )
}

export default Description