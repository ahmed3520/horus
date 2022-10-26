import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Soho Tours EgyT Tours, Egypt’s travel experts, offer private, tailor-made tours, for families, small groups, and retreats.</p>
            <p>Get immersed in the Egyptian culture and history while receiving new perspectives from locals. When you book with us, you become family.</p>
            <p>Our staff holds a plethora of not only historical knowledge, but day-to-day living to make your trip memorable.</p>
            
           
          
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt=''/>
          </div>
        </div>
      </section>
    </>
  )
}

export default About