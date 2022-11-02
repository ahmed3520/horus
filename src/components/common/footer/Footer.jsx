import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to Enjoy with Your Holiday In Egypt.</p>
            </div>
            </div>
            </div>
            <div className="whatsapp_float">
            
             <a aria-label="Chat on WhatsApp" href="https://wa.me/+201008362902"> <img alt="Chat on WhatsApp" src="whatsapp-icon.png" /></a>

            

            </div>
        
      </section>

      <footer>
        <div className='container w-footer'>
          <div className='box cont-b'>
            <div className='logo flex-col'>
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
              <div className='input flex'>
                <input type='text' className="sub-inp" placeholder='Email Address' />
                <button className="sub-btn">Subscribe</button>
              </div>
            </div>
          </div>
          <>
    {
    /*          <>
          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
          </>*/
          }
          </>
          <div className='box'>
              <h3>Your can contact us on these numbers:</h3>
              <ul>
                <li>
                <a href="tel:+201008362902" class="Blondie">
                    +201008362902
                </a>
                </li>
                <li>
                  <a href="tel:+8613016424661" class="Blondie">
                        +8613016424661
                  </a>
                </li>
 
              </ul>
            </div>
            <div className='box'>
              <h3>Your can reach us on by mail:</h3>
              <ul>
                <li>
                <a href="mailto:mohamedfathi00@yahoo.com">mohamedfathi00@yahoo.com</a>
                </li>
                <li>
                  <a href="mailto:ahmed.sohail2020@yahoo.com" class="Blondie">
                  ahmed.sohail2020@yahoo.com
                  </a>
                </li>
 
              </ul>
            </div>
        </div>
    
     
      </footer>
      <div className='legal flex-col'>
        <span>© 2022 Soho Tours Egy. Designd By NourEldein.</span>
      </div>
    </>
  )
}

export default Footer