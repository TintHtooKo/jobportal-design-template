import Img from '../assets/hero.jpg'
import './css/About.css'
import About_img from '../assets/about_1.jpg.webp'
import John from '../assets/john.webp'
import Anderson from '../assets/anderson.webp'
import Career from '../component/home/career/Career'

export default function About() {
  return (
    <div>
      <div className="about">
        <div className='about-background' style={{ backgroundImage: `url(${Img})` }}></div>
        <div className='about-overlay'></div>
        <div className='about-content'>
          <h1>ABOUT US</h1>
          <p>Find your dream jobs in our powerful career website.</p>
        </div>
      </div>
      
      <div className='about-1'>
        <div className="about-img"><img src={About_img} /></div>
        <div className="about-career">
          <h1>Careers for Your Careers</h1>
          <p>Eveniet voluptatibus voluptates suscipit minima, cum voluptatum ut dolor, sed facere corporis qui, ea quisquam quis odit minus nulla vitae. Sit, voluptatem.</p>
          <span>Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam optio nostrum sit!</span>
        </div>
      </div>
    <hr />

    {/* Team */}
      <div>
        <h1 style={{textAlign: 'center',fontWeight : 'bold', marginTop : '50px'}}>Meet Our Team</h1>
        <div className="team">
          <div className="team-1">
            <img src={John} />
            <h3>John Doe</h3>
            <p >CEO</p>
            <span>Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?.</span>
          </div>

          <div className="team-2">  
            <img src={Anderson} />
            <h3>Anderson</h3>
            <p >Creative Director</p>    
            <span>Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?.</span>    
          </div>
        </div>
      </div>

      <Career/>

    </div>
  )
}
