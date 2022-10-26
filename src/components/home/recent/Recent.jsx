import React from "react"
import Heading from "../../common/Heading"
import Price from "../price/Price"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Trips Visited' subtitle='This Trips May Like You Have A Nice Holidy With Soho  Egy.' />
          <RecentCard />
          
        </div>
      </section>
    </>
  )
}

export default Recent