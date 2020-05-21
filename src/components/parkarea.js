import React, { useState, useEffect } from 'react';

const ParkArea = props => {
    const [parkareas, setParkAreas] = useState([]);

    const getParks = () => {
        return fetch("http://127.0.0.1:8000/parkareas")
            .then(response => response.json())
            .then(parsedResp => setParkAreas(parsedResp));
    };

    useEffect(() => {
        getParks();
    }, []);

    return (
        <>
            <section>
                <ul>
                {parkareas.map(park =>
                    <p key={park.id}>{park.name}</p>
                )}
                </ul>
            </section>
        </>
    );
};

export default ParkArea;