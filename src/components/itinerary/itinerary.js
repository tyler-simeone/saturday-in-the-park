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
                    <section key={itinerary.id}>
                        <p>Attraction: {itinerary.attraction.name}</p>
                        <p>Start time: {itinerary.starttime}</p>
                    </section>
                )}
                </ul>
            </section>
        </>
    );
};

export default Itinerary;