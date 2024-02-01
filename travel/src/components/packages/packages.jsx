import packages from '../../packages.json'

export default function Packages(){
    return (
        <div className="packages">
            <h2>Explore our Excellent Travel Packages!</h2>
            <div className="pack">
                {packages.map(places=>{
                    return(
                        <div className="area" key={places.id}>
                            <img src={places.image} />
                            <div className='desc'>
                                <h2><strong>{places.title}</strong></h2>
                                <p><strong>Major Attractions: </strong>{places.description}</p>
                                <p><strong>Days: </strong>{places.days}</p>
                                <p><strong>ksh </strong>{places.prices}/=</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}