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
          <Heading title='Recent Trips Visited' subtitle='Tours that you might like. Have a nice holiday with Soho Egy.' />
          <RecentCard />
          
        </div>
      </section>
    </>
  )
}

export default Recent