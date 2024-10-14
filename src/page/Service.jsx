import './css/Service.css'
import Hero_Img from '../assets/hero.jpg'
import Testimonial from '../component/home/testimonial/Testimonial'
import Look from '../component/home/look/Look'

export default function Service() {
  return (
    <div>
      <div className='hero'>
      <div className='hero-background' style={{ backgroundImage: `url(${Hero_Img})` }}></div>
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <h1>OUR SERVICE</h1>
        <p>Find your dream jobs in our powerful career website.</p>
      </div>
      </div>

      <div className='service'>
        <div>
          <i className="fa-solid fa-magnet"></i>
          <h4>Design  Strategy</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia dicta excepturi, provident labore, similique 
          </p>
        </div>

        <div>
          <i className="fa-solid fa-plane"></i>
          <h4>Marketing  Strategy</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia dicta excepturi, provident labore, similique 
          </p>
        </div>

        <div>
          <i className="fa-solid fa-laptop"></i>
          <h4>Web Design</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia dicta excepturi, provident labore, similique 
          </p>
        </div>

        <div>
          <i className="fa-solid fa-magnifying-glass"></i>
          <h4>Search Engine Results</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia dicta excepturi, provident labore, similique 
          </p>
        </div>

        <div>
          <i className="fa-solid fa-paper-plane"></i>
          <h4>Market Leading</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia dicta excepturi, provident labore, similique 
          </p>
        </div>

        <div>
          <i className="fa-solid fa-plug"></i>
          <h4>Pixel Perfect Design</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia dicta excepturi, provident labore, similique 
          </p>
        </div>
      </div>
      
      <Testimonial/>
      <Look/>
    </div>
  )
}
