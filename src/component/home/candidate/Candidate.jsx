import './Candidate.css'
import Mail from '../../../assets/logo_mailchimp.svg'
import Paypal from '../../../assets/logo_paypal.svg'
import Stripe from '../../../assets/logo_stripe.svg'
import Visa from '../../../assets/logo_visa.svg'

export default function Candidate() {
  return (
    <div className="candidate">
        <h1>Our Candidates Work In Company</h1>
        <p>Porro error reiciendis commodi beatae omnis similique voluptate rerum ipsam fugit mollitia ipsum facilis expedita tempora suscipit iste</p>
        <div className='candidate-logo'>
            <img src={Mail} style={{width : '250px'}} />
            <img src={Paypal} style={{width : '200px'}} />
            <img src={Stripe} style={{width : '100px'}} />
            <img src={Visa} style={{width : '100px'}} />
        </div>
        <hr />
    </div>
  )
}
