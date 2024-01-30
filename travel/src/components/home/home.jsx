import HomeSlider from '../carousel/homecarousel'
import './home.css'

export default function Home(){
    return(
        <section className="home">
            {<HomeSlider/>}
        </section>
    )
}