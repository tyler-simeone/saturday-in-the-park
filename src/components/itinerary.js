import React, { useState, useEffect } from 'react';

const Itinerary = props => {
    const [itineraries, setItineraries] = useState([]);

    const getItineraries = () => {
        return fetch("http://127.0.0.1:8000/itineraries")
            .then(response => response.json())
            .then(parsedResp => setItineraries(parsedResp));
    };

    useEffect(() => {
        getItineraries();
    }, []);

    return (
        <>
            <section>
                <ul>
                {itineraries.map(itinerary =>
                    <>
                    {/* <p key={park.id}>{park.name}</p> */}
                    {console.log(itinerary)}
                        {/* <p>{park.attractions.forEach(attraction => (
                            // console.log(attraction.name)
                            <p key={attraction.id}>{attraction.name}</p>
                        ))}</p> */}
                    </>
                )}
                </ul>
            </section>
        </>
    );
};

export default Itinerary;