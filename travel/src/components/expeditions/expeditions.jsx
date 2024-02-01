import './expeditions.css'
import expeditions from '../../expeditions.json'

export default function Expeditions(){
    return(
        <div className="expeditions">
            <h2>Explore the Kenyan Backyard</h2>
            <div className="site">
                {expeditions && expeditions.map(sites=>{
                    return(
                        <div className='kenya' key={sites.id}>
                            <img src={sites.image} />
                            <div className='others'>
                                <h2><strong>{sites.title}</strong></h2>
                                <p><strong>About: </strong>{sites.description}</p>
                                <p><strong>Location: </strong>{sites.location}</p>
                                <p><strong>ksh </strong>{sites.prices}/=</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}