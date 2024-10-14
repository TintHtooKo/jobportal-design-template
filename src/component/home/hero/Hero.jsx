import './Hero.css'
import Hero_Img from '../../../assets/hero.jpg'

export default function Hero() {
  return (
    <div className='hero'>
    <div className='hero-background' style={{ backgroundImage: `url(${Hero_Img})` }}></div>
    <div className='hero-overlay'></div>
    <div className='hero-content'>
      <h1>A POWERFUL CAREER JOB</h1>
      <p>Find your dream jobs in our powerful career website.</p>
      <div className="search mt-3">
        <input type="text" placeholder='Job title, keyword' />
        <select>
          <option value="">Anywhere</option>
          <option value="">London</option>  
          <option value="">UK</option>
          <option value="">USA</option>
        </select>

        <select>
          <option value="">Part Time</option>
          <option value="">Full Time</option>
          <option value="">Freelance</option>
        </select>

        <button>Search Job</button>
      </div>
    </div>
  </div>
  )
}
