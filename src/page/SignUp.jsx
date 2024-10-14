
import { Link } from 'react-router-dom'
import Hero_Img from '../assets/hero.jpg'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import './css/Login.css'

export default function SignUp() {
  const [value, setValue] = useState()
  const handleScroll = () =>{
    window.scrollTo({top : 0, behavior: 'smooth'})
  }
  return (
    <div>
      <div className='hero'>
      <div className='hero-background' style={{ backgroundImage: `url(${Hero_Img})` }}></div>
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <h1>Sign Up</h1>
        <p>Find your dream jobs in our powerful career website.</p>
      </div>
      </div>


      <div className='signlog'>
        <h1>Find Your Best Career</h1>
        <form>
          <input type="text" placeholder='Full Name' />
          <input type="email" placeholder='Email' />
          <PhoneInput 
          className='phone'
            international
            placeholder=" Phone Number"
            value={value}
            onChange={setValue}/>
          <input type="password" placeholder='Password' />
          <input type="password" placeholder='Confirm Password' />
          <span>Have you already registered? <Link to="/login" onClick={handleScroll}>Login</Link></span>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}
