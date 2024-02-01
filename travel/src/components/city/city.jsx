import './city.css'
import data from '../../destinations.json'

export default function City(){
    return(
        <section className='explore'>
            <h1>Explore Fun & Cool Spots <br/>Around the City</h1>
            <div className='citypage'>
                {data && data.map(city=>{
                    return(
                        <div className="city" key={city.id}>
                            <img src={city.image}/>
                            <div className="details">
                                <h2><strong>{city.title}</strong></h2>
                                <p><strong>About: </strong>{city.description}</p>
                                <p><strong>Location: </strong>{city.location}</p>
                                <p><strong>ksh </strong>{city.prices}/=</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}