import './footer.css'
import SafariLogo from '../../assets/images/safari-high-logo-white.png'
export default function Footer(){
    return (
        <footer>
            <section className="links">
                <div className="logoimg">
                    <img src={SafariLogo} alt="Logo Image" width={80}/>
                </div>
                <hr />
                <div className="contact-us">
                    <h2>Contact Us</h2>
                    <li><a href=""> info@safiriadventures.com</a></li>
                    <li><a href="">sales@safiriadventures.com</a></li>
                    <li><a href="">P.O Box 103, Koinange</a></li>
                    <li><a href="">+254 732040301</a></li>
                </div>
                <hr />
                <div className="other-links">
                    <h2>Explore</h2>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Packages</a></li>
                    <li><a href="">Expeditions</a></li>
                    <li><a href="">Contact</a></li>
                </div>
            </section>
            <section className="socials">
                <li><i className='bx bxl-meta'></i></li>
                <li><i className='bx bxl-twitter'></i></li>
                <li><i className='bx bxl-instagram'></i></li>
            </section>
            <section className='copyright'>
                <span><i className='bx bx-copyright'> Victor Mutwiri</i></span>
            </section>
        </footer>
    )
}