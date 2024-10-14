
import { Link } from 'react-router-dom'
import Hero_Img from '../assets/hero.jpg'
import 'react-phone-number-input/style.css'
import './css/Login.css'

export default function Login() {
  const handleScroll = () =>{
    window.scrollTo({top : 0, behavior: 'smooth'})
  }
  return (
    <div>
      <div className='hero'>
      <div className='hero-background' style={{ backgroundImage: `url(${Hero_Img})` }}></div>
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <h1>Login</h1>
        <p>Find your dream jobs in our powerful career website.</p>
      </div>
      </div>


      <div className='signlog'>
        <h1>Find Your Best Career</h1>
        <form>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <Link>forget password ?</Link>
          <span>Do you have an account? <Link to="/signup" onClick={handleScroll}>Sign Up</Link></span>
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}
