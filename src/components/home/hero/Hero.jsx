import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Soho Tours Egy Trip ' subtitle='Find new & featured Soho Tours EgyT Trips.' />

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