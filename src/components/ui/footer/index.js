import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

export default function Footer(props) {
    return (
     <section className='footer'>
         <div className='footer-width'>
         <div className='text-area'>
            <p>Copyright ©2020 All rights reserved | This template is made with<i className="fa fa-heart" aria-hidden="true"></i>by</p>
            <Link to="https://colorlib.com/">Colorrib</Link>
         </div>
         <div className='icons-area'>
            <Link to='https://www.pinterest.com/'><i className="fa fa-pinterest-p" aria-hidden="true"></i></Link>
            <Link to='https://www.facebook.com/"'><i className="fa fa-facebook" aria-hidden="true"></i></Link>
            <Link to='https://twitter.com/?lang=en'><i className="fa fa-twitter" aria-hidden="true"></i></Link>
            <Link to='/'><i className="fa fa-dribbble" aria-hidden="true"></i></Link>
            <Link to='/'><i className="fa fa-behance" aria-hidden="true"></i></Link>
            <Link to='/'><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
         </div>
         </div>
     </section>
    )
}
