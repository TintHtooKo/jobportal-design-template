import { Link } from 'react-router-dom'
import './Look.css'

export default function Look() {

  const handleScroll = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className="look">
        <div>
            <h3>Looking For A Job?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit tempora adipisci impedit.</p>
        </div>
        <Link to={'/signup'} onClick={handleScroll}>Sign Up</Link>
    </div>
  )
}
