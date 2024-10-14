import './css/Job.css'
import Hero_Img from '../assets/hero.jpg'
import Candidate from '../component/home/candidate/Candidate'
import EachJob from '../component/job/EachJob'
export default function JobL() {
  return (
    <div>
      <div className='hero'>
      <div className='hero-background' style={{ backgroundImage: `url(${Hero_Img})` }}></div>
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <h1>JOB LISTING</h1>
        <p>Find your dream jobs in our powerful career website.</p>
      </div>
      </div>

      <div className='j-list'>
          <h3>Job Listing</h3>
          <EachJob/>
          <EachJob/>
          <EachJob/>
          <EachJob/>
          <EachJob/>
          <EachJob/>
          <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <span className="page-link">Previous</span>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item active">
              <span className="page-link">
                2
                <span className="sr-only"></span>
              </span>
            </li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
          </nav>
          <hr />
        <Candidate/>
      </div>

    </div>
  )
}
