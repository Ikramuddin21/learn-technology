import React from 'react';
import { Container } from 'react-bootstrap';
import './Feedback.css';

const Feedback = () => {
    return (
        <div className='feedback'>
            <Container>
                <div className='mx-auto text-center custom-responsive-width'>
                    <h2>We always try to understand the expectations of the students</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat quibusdam corrupti accusamus, nemo unde corporis temporibus assumenda ipsam hic ab minus laudantium aspernatur. Praesentium illo a eos expedita.</p>
                </div>

                <div className='d-flex justify-content-center align-items-center flex-wrap mt-5'>
                    <div className='activity'>
                        <h2 className='text-primary'>800k</h2>
                        <p className='fs-5'>Students</p>
                    </div>
                    <div className='activity'>
                        <h2 className='text-primary'>385k+</h2>
                        <p className='fs-5'>Success students</p>
                    </div>
                    <div className='activity'>
                        <h2 className='text-primary'>405k</h2>
                        <p className='fs-5'>Feedback</p>
                    </div>
                    <div className='activity'>
                        <h2 className='text-primary'>60k+</h2>
                        <p className='fs-5'>Contributors</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Feedback;