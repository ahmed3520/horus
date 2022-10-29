import React from 'react'

const Itr = ({data}) => {
    console.log('description data=>',data)
    data= data[0];
  return (
    <>
    <div className='dsc-cont'>
        <h2 className='desc-t'>{data.itineraryTitle}</h2>
        
        <div className='desc-table'>
        <div dangerouslySetInnerHTML={{__html: data.itineraryData}}></div>

        

        </div>
    </div>
    </>
  )
}

export default Itr