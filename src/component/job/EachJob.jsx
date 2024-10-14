import { Link } from 'react-router-dom'
import './EachJob.css'
import JobLogo from '../../assets/joblogo.jpg'

export default function EachJob() {

  const handleScroll = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <>
    <div className='each-job container'>  
                <div className="job-logo">
                    <img src={JobLogo}/>
                </div>
                <div className='job-title'>
                    <p>freelancer</p>
                    <Link to={'/jobdetail'} onClick={handleScroll}>Dropbox Product Designer</Link>
                    <h5>Published Date : <span>6 July 2024</span></h5>
                </div>
                <div className="job-location">
                    <h4>Melbourn</h4>
                    <p>Australia</p>
                </div>
                <div className="job-salary">$60k — $100k</div>
            </div>
            <hr/>
    </>
  )
}
