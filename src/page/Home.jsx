import Candidate from '../component/home/candidate/Candidate'
import Career from '../component/home/career/Career'
import Hero from '../component/home/hero/Hero'
import JobList from '../component/home/jobList/JobList'
import Look from '../component/home/look/Look'
import Testimonial from '../component/home/testimonial/Testimonial'
import './css/Home.css'

export default function Home() {
  return (
    <>
      <Hero/>
      <Career/>
      <JobList/>
      <Candidate/>
      <hr />
      <Testimonial/>
      <Look/>
    </>
  )
}
 