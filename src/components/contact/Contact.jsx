import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [error, setError] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [Subject, setSubject] = React.useState("")
  const [loading, setLoading] = React.useState(false)

function submitEmail(e){
  e.preventDefault();
  if(name === "" || email === "" || message === "" || Subject === ""){
    setError(true)
  }else{
    setError(false)
  }
  setLoading(true)
  const templateParams = {
    from_name: name,
    message: message,
    user_email: email,
    subject: Subject,
};
emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID,'template_srz0m6h', templateParams, process.env.REACT_APP_EMAILJS_PUBLIC_KEY, process.env.REACT_APP_EMAILJS)
.then((response) => {
   console.log('SUCCESS!', response.status, response.text);
    setSuccess(true)
    setLoading(false)
}, (err) => {
   console.log('FAILED...', err);
   setLoading(false)
});
}
React.useEffect(() => {
  if(success){
    setName("")
    setEmail("")
    setMessage("")
    setSubject("")
  }
}, [success])
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Helps & Friendly Support' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={submitEmail} >
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' name='Name' onChange={e=>setName(e.target.value)} />
              <input type='text' placeholder='Email' name='Email' onChange={e=>setEmail(e.target.value)}/>
            </div>
            <input type='text' placeholder='Subject' name='Subject' onChange={e=>setSubject(e.target.value)} />
            <textarea cols='30' rows='10' onChange={e=>setMessage(e.target.value)}></textarea>
            {error && <p className='error'>All Fields are required!</p>}
            {success && <p className='success'>Message Sent Successfully!</p>}
            <button type="submit" disabled={loading} >Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact