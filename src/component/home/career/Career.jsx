import CountUp from 'react-countup'
import './Career.css'
import { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

export default function Career() {
    const [countOn,setCountOn] = useState(false)
  return ( 
    <div className='career'>
        <h1>Careers Statistics</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita unde officiis recusandae sequi excepturi corrupti.</p>
        <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
        {countOn && <div className="no">
            <div>
                <h1><CountUp start={0} end={1930} duration={2} delay={0} /></h1>
                <p>Candidates</p>
            </div>
            <div>
                <h1><CountUp start={0} end={69} duration={2} delay={0} /></h1>
                <p>Job Posted</p>
            </div>
            <div>
                <h1><CountUp start={0} end={1200} duration={2} delay={0} /></h1>
                <p>Job Filled</p>
            </div>
            <div>
                <h1><CountUp start={0} end={450} duration={2} delay={0} /></h1>
                <p>Companies</p>
            </div>
        </div>}
        </ScrollTrigger>
    </div>
  )
}
