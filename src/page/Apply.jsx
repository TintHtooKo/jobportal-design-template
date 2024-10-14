import Hero_Img from '../assets/hero.jpg'
import './css/Apply.css'
import uploadImg from '../assets/upload.png'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'

export default function Apply() {
    const [value, setValue] = useState()
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedName, setSelectedName] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setSelectedName(file.name);
      };
  return (
    <div>
        <div className='hero'>
      <div className='hero-background' style={{ backgroundImage: `url(${Hero_Img})` }}></div>
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <h2>Product Designer Position</h2>
        <p>Find your dream jobs in our powerful career website.</p>
      </div>
        </div>

        <div className="apply">
            <form>
                <input type="text" placeholder='Full Name' />
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Address' />
                <input type="website" placeholder='Personal or Portfolio Website' />
                <PhoneInput 
                    className='phone'
                    international
                    placeholder=" Phone Number"
                    value={value}
                    onChange={setValue}/>
                <div className="parent">
                    <div className="file-upload">
                        <img src={uploadImg} alt="upload" />
                        <h5>{selectedName || "Click box to upload"}</h5>
                        <p>Upload your CV</p>
                        <input type="file" onChange={handleFileChange}  />
                    </div>
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Cover Letter'></textarea>
                <button>Apply</button>
            </form>
        </div>
    </div>
  )
}
