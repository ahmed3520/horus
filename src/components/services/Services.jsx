import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import FeaturedCard from "../home/featured/FeaturedCard"
import Heading from "../common/Heading"
import "./services.css"

const Services = () => {
  const video = document.createElement('video');

  return (
    <>
      <section className='services mb'>
        <Back name='Packages' title='Best Vacation Packages & Tours in Egypt' cover={img} />
        <div className='featured container'>
          <div className='left row'>
           <Heading title='Pick Egypt Travel Package by Category' subtitle='Book your Egypt Travel Package & Start a new Journey.' />
          <p >Our Best Egypt Vacation Packages & Tours have always been one of the best travel packages for many travelers that trust our services. </p>
          <p>Egypt has everything you have always wanted.You can also reach out your hand and look at the Sphinx. You will go to Karnak Temples in Luxor, Abu Simbel Temple,Philae Temple in Aswan and High Dam </p>
          <p>Hurghada and Sharm El Sheikh are two places where you can swim and dive in the Red Sea.</p>
          <p>Most of our best Egypt travel packages come with a private tour guide. it doesn't matter if you're looking for a traditional tour of Ancient Egypt or a more modern one ; and we have a package for you. </p>
          </div>
         
        <div className='right row'>
         
          </div>
          <FeaturedCard />
        </div>   
      </section>
    </>
  )
}

export default Services