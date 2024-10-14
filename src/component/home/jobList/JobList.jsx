import './JobList.css'
import EachJob from '../../job/EachJob'

export default function JobList() {
  return (
    <div className='joblist'>
        <h1>109,234 Job Listed</h1>

        <div className='job'>
            <EachJob/>
            <EachJob/>
            <EachJob/> 
            <EachJob/>
            <EachJob/>
        </div>
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
    </div>
  )
}
