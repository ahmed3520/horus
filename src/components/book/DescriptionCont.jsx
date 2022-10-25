import React from 'react'

const DescriptionCont = ({data}) => {
  return (
    <>
    <div className='dsc-cont'>
        <h2 className='desc-t'>{data.title}</h2>
        <p>
            {data.description}
        </p>
        <div className='desc-table'>
            <table>
                <tbody>
                    <tr>
                        <td>Duration</td>
                        <td>
                            <p>
                            {data.duration}
                            </p>
                        </td>
                    </tr>
                    <tr className='hr-tr'></tr>
                    <tr>
                        <td>Destinations</td>
                        <td>
                            <p>{data.destination}</p>
                        </td>
                    </tr>
                    <tr className='hr-tr'></tr>

                    <tr>
                        <td>Tour Availability</td>
                        <td>
                            <p>{data.availability}</p></td>
                    </tr>
                    <tr className='hr-tr'></tr>

                    <tr>
                        <td>Pickup Location</td>
                        <td>
                            <p>
                                {data.pickupLocation}
                            </p>
                            </td>
                    </tr>
                    <tr className='hr-tr'></tr>

                    <tr>
                        <td>Tour Type</td>
                        <td>
                            <p>
                            {data.tourType}
                                </p></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='locv'>
            <span>
                <strong>Attractions you'll visit on this trip:</strong>
                </span>
            <div className='locv-cont'>
                <ul>
                    {data.locationYouWillVisit?data.locationYouWillVisit.map((data)=>{
                        return(<>
                            <li key={data}>{data}</li>
                        </>)
                    }):<></>}
                </ul>
            </div>
        </div>
        <div className='tours-ie'>
        </div>
    </div>
    </>
  )
}

export default DescriptionCont