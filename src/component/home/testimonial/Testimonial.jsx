import './Testimonial.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Person1 from '../../../assets/testi.jpg';
import Person2 from '../../../assets/testi2.jpg';

export default function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="testimonial-carousel">
            <Slider {...settings}>
                <div>
                    <div className="testimonial">
                        <img src={Person1} alt="Testimonial 1" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed 
                            aliquid quae quia quaerat amet ducimus eveniet eius. Esse dolor
                            odio magnam alias, nam qui praesentium similique reiciendis quia odit.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <span>__ Richard Anderson</span>
                    </div>
                </div>
                <div>
                    <div className="testimonial">
                        <img src={Person2} alt="Testimonial 2" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sed 
                            aliquid quae quia quaerat amet ducimus eveniet eius. Esse dolor
                            odio magnam alias, nam qui praesentium similique reiciendis quia odit.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <span>__ Chris Peter</span>
                    </div>
                </div>
            </Slider>
        </div>
    );
}
