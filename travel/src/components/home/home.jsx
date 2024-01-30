import HomeSlider from '../carousel/homecarousel'
import './home.css'

export default function Home(){
    return(
        <section className="home">
            <HomeSlider/>
            <h2>Welcome to Salama Adventures</h2>
            <h3>Here to simplify and help you explore theKenyan Backyard</h3>
            <h4>Travel Safe|Travel Salama</h4>
            <button>Explore</button>
        </section>
    )
}