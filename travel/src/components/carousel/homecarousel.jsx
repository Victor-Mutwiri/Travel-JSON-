import './homecarousel.css'
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ElephantWildlife from '../../assets/images/Elephant-Wildlife.jpg'
import Giraffes from '../../assets/images/Giraffe In Kenya.jpg'

export default function HomeSlider() {
  const [settings] = useState({
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  });

  return (
    <div className='carousel'>
      <Slider {...settings} className='slider'>
        <div className="carousel-container">
          <img src={ElephantWildlife}/>
          <div className="carousel-overlay">
            <h2>Welcome to Salama Adventures</h2>
            <h3>Here to simplify and help you explore theKenyan Backyard</h3>
            <h4>Travel Safe|Travel Salama</h4>
            <button>Explore</button>
          </div>
        </div>
        <div className="carousel-container">
            <img src={Giraffes}/>
            <div className="carousel-overlay">
            <h2>Welcome to Salama Adventures</h2>
            <h3>Here to simplify and help you explore theKenyan Backyard</h3>
            <h4>Travel Safe|Travel Salama</h4>
            <button>Explore</button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

