import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className='footer'>
            <h2>This is footer</h2>
            {/* <div>
                <img src={logo} alt="Logo" width='100' />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium architecto quidem provident repellat natus quisquam perferendis temporibus, facilis culpa suscipit velit repellendus, dolores omnis cum dolore maxime vero voluptatibus labore eum fugit eos animi? Doloribus labore quo praesentium dolorem velit hic maxime sed. Totam omnis nemo reiciendis ratione dolore repellat.</p>
            </div>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/services'>Our Services</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><Link to='/signin'>Sign in</Link></li>
            </ul>
            <ul>
                <li><a href=""><FontAwesomeIcon icon="fab fa-facebook-square" /></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
            </ul> */}
        </div>
    );
};

export default Footer;