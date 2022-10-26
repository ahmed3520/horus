import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
        
          <div className='heading'>
            <h1>Search Your Next</h1>
            <h1>Soho Tours </h1>
            <h1>Egy Trip </h1>
            <p>{'Find new & featured Soho  Egy Trips.'}</p>
         </div>
          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Duration of Stay</span>
              <input type='text' placeholder='Duration of Stay' />
              
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box filter-h flex align-center'>
              <h4>Advance Filter</h4>
              <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
            </div>

          </form>
        </div>
      </section>
    </>
  )
}

export default Hero