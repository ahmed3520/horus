import React from 'react'

const PricePolicy = ({data}) => {
    console.log('description data=>',data)
    data= data[0];
  return (
    <>
    <div className='dsc-cont'>
        <h2 className='desc-t'>{data.pricesPolicyTitle}</h2>
        
        <div className='desc-table'>
        <div dangerouslySetInnerHTML={{__html: data.pricePolicy}}></div>

        

        </div>
    </div>
    </>
  )
}

export default PricePolicy