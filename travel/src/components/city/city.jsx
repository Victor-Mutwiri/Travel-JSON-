import './city.css'
import data from '../../destinations.json'

export default function City(){
    return(
        <div className="citypage">
            <h1>Explore Fun & Cool Spots <br/>Around the City</h1>
            {data && data.map(city=>{
                return(
                    <div className="city" key={city.id}>
                        <img src={city.image}/>
                        <h2><strong>{city.title}</strong></h2>
                        <p><strong>About:</strong>{city.description}</p>
                        <p><strong>Location:</strong>{city.location}</p>
                        <p>ksh{city.prices}/=</p>
                    </div>
                )
            })}
        </div>
    )
}