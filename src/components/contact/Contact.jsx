import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' action="https://formspree.io/f/xbjbavkv" method="POST">
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' name='Name' />
              <input type='text' placeholder='Email' name='Email' />
            </div>
            <input type='text' placeholder='Subject' name='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact