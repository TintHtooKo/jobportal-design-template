import './css/Contact.css'
import Hero_Img from '../assets/hero.jpg'

export default function Contact() {
  return (
    <div>
      <div className='hero'>
      <div className='hero-background' style={{ backgroundImage: `url(${Hero_Img})` }}></div>
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <h1>CONTACT US</h1>
        <p>Find your dream jobs in our powerful career website.</p>
      </div>
      </div>

      <div className='contact'>
        <div className='contact-form'>
          <form action="">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Subject' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            <button>Submit</button>
          </form>
        </div>

        <div className='contact-info'>
            <div>
              <h4>Address</h4>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>

            <div>
              <h4>Phone</h4>
              <p>+1 232 3235 324</p>
            </div>

            <div>
              <h4>Email Address</h4>
              <p>youremail@domain.com</p>
            </div>
            
        </div>
  
      </div>
    </div>
  )
}
