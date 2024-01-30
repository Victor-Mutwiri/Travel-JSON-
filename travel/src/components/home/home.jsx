import './home.css'
import Giraffe from '../../assets/images/Giraffe In Kenya.jpg'

export default function Home(){
    return(
        <section >
            <div className="home">
                <img src={Giraffe} alt="Giraffe image" />
                <div className="overlay">
                    <h2>Elevate your Experience <br /> with Salama Tours</h2>
                    <p>Here to simplify and help you explore theKenyan Backyard</p>
                    <h4>Travel Safe|Travel Salama</h4>
                    <button>Explore</button>
                </div>
            </div>
            
        </section>
    )
}