import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const Featured = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        const featuresFetch = async () => {
            const fetchUri = await fetch("data.json");
            const res = await fetchUri.json();
            setFeatures(res.featuresData);
        };
        featuresFetch();
    }, []);

    return (
        <div className="mt-5 py-4 bg-dark text-light d-flex align-items-center" style={{}}>
            <Container className="d-flex flex-wrap">
                {
                    features.map(feature => <div key={feature.id} className="mx-auto my-3">
                        <img width="50px" className="me-3" src={require(`../../../${feature.img}`)} alt="" />
                        <span className="fs-5">{feature.title}</span>
                    </div>)
                }
            </Container>
        </div>
    );
};

export default Featured;