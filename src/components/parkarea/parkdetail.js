import React, { useState, useEffect } from 'react';

const ParkAreaDetail = props => {
    const [parkarea, setParkArea] = useState({name: "", theme: ""});
    const [attractions, setAttractions] = useState([]);

    const getPark = () => {
        return fetch(`http://127.0.0.1:8000/parkareas/${props.parkAreaId}`)
            .then(response => response.json())
            .then(parsedResp => setParkArea({
                name: parsedResp.name,
                theme: parsedResp.theme
            }));
    };

    const getAttractions = () => {
        return fetch("http://127.0.0.1:8000/attractions")
            .then(response => response.json())
            .then(attractions => setAttractions(attractions));
    };

    useEffect(() => {
        getPark();
        getAttractions();
    }, [props.parkAreaId]);

    return (
        <>
            <section>
                <h2>
                    {parkarea.name}
                </h2>
                <p>
                    {parkarea.theme}
                </p>

                <ul>
                    {attractions.map(attraction => {
                        if (attraction.area.name === parkarea.name) {
                            return <li key={attraction.name}>{attraction.name}</li>
                        }
                    })}
                </ul>
            </section>
        </>
    );
};

export default ParkAreaDetail;