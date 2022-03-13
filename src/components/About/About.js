import React from 'react';
import { Row } from 'react-bootstrap';
import data from '../../temp/data.json';
import ShowAbout from './ShowAbout';

const About = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center text-primary mb-5'>This is our awesome team</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    data.about.map(person => <ShowAbout
                        key={person.id}
                        person={person}
                     />)
                }
            </Row>
        </div>
    );
};

export default About;