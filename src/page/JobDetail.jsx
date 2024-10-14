import './css/JobDetail.css'
import Detail from '../assets/hero.jpg'
import Logo from '../assets/joblogo.jpg'
import Map from '../assets/map.svg'
import Time from '../assets/time.svg'
import { Link } from 'react-router-dom'
import Save from '../assets/save.svg'
import Img from '../assets/job-detail.webp'


export default function JobDetail() {
  const handleScroll = () =>{
    window.scrollTo({top : 0, behavior: 'smooth'})
  }
  return (
    <div>
      <div className='detail'>
        <div className='detail-background' style={{ backgroundImage: `url(${Detail})` }}></div>
        <div className='detail-overlay'></div>
        <div className='detail-content'>
          <h1>PRODUCT DESIGNER</h1>
        </div>
      </div>

    <div className="job-detail">
      <div className='job-d-title'>
        <div className='job-logo'>
          <img src={Logo} alt="" />
          <div className='job-map'>
            <div><h4>Product Designer</h4></div>
            <div className='job-type'>
              <div>
                <img className='map-img' src={Map}/>
                <h6 className='map-location'>Australia</h6>
              </div>
              <div>
                <img className='map-img' src={Time}/>
                <h6 className='map-location'>Freelancer</h6>
              </div>
            </div>
          </div>
        </div>

        <div className='job-d-btn'>
          <button><img src={Save}/> <span>Save Job</span></button>
          <Link to={'/apply'} onClick={handleScroll}>Apply Now</Link>
        </div>
      </div>

      <div className="job-d-desc">

        <div className="job-d-desc-resp">
            <img src={Img} />

            <div className='desc'>             
              <h5><i className="fa-solid fa-bars" style={{color : '#005eff'}}></i>  Job Description</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet.
                 Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates
                  nemo blanditiis iste eius officia minus. <br />

                  Velit unde aliquam et voluptas reiciendis non sapiente labore, deleniti asperiores
                   blanditiis nihil quia officiis dolor vero iste dolore vel molestiae saepe. Id nisi, 
                   consequuntur sunt impedit quidem, vitae mollitia!</p>
            </div>

            <div className="resp">
            <h5><i className="fa-solid fa-rocket" style={{color : '#005eff'}}></i> Responsibilities</h5>

            <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Necessitatibus quibusdam facilis</p>
                <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Velit unde aliquam et voluptas reiciendis n Velit unde aliquam et voluptas reiciendis non sapiente labore</p>
                <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Commodi quae ipsum quas est itaque</p>
                <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Deleniti asperiores blanditiis nihil quia officiis dolor</p>
              
            
            </div>

            <div className="resp">
              <h5><i className="fa-solid fa-graduation-cap" style={{color : '#005eff'}}></i> Education</h5>
                <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Necessitatibus quibusdam facilis</p>
                <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Velit unde aliquam et voluptas reiciendis n Velit unde aliquam et voluptas reiciendis non sapiente labore</p>
                <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Commodi quae ipsum quas est itaque</p>
                <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Deleniti asperiores blanditiis nihil quia officiis dolor</p>
            </div>

            <div className="resp">
              <h5><i className="fa-solid fa-bookmark" style={{color : '#005eff'}}></i> Other Benifits</h5>
                <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Necessitatibus quibusdam facilis</p>
                <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Velit unde aliquam et voluptas reiciendis n Velit unde aliquam et voluptas reiciendis non sapiente labore</p>
                <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Commodi quae ipsum quas est itaque</p>
                <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                <p><i className="fa-solid fa-circle-check" style={{color : '#D5D5D5'}}></i>Deleniti asperiores blanditiis nihil quia officiis dolor</p>
            </div>

        </div>

        <div className='job-d-desc-sum'>
          <div>
          <h5>Job Summery</h5>
          <p>Published on: <span>06 July 2024</span></p>
          <p>Vacancy: <span>20</span></p>
          <p>Employment Status: : <span>Full-time</span></p>
          <p>Experience: <span>2 to 3 year(s)</span></p>
          <p>Job Location: <span>New York City</span></p>
          <p>Salary: <span>$60k - $100k</span></p>
          <p>Gender: <span>Any</span></p>
          <p>Application Deadline: <span>30 July 2024</span></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
 