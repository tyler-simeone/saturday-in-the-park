import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
                    <Link key={park.id} to={`/park/${park.id}`}>
                        <p>{park.name}</p>
                    </Link>
                )}
                </ul>
            </section>
        </>
    );
};

export default ParkArea;