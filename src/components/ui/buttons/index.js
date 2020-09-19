import React from 'react';
import { Link } from "react-router-dom";
import './style.scss'

export default function Buttons() {
    return (
        <section className='buttons'>
            <div className='buttons-title'>
                <p>buttons</p>
            </div>
            <div className='links'>
                <Link to='/' className='first'>DISCOVER<i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                <Link to='/' className='second'>DISCOVER<i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                <Link to='/' className='third'>DISCOVER<i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
            </div>
        </section>
    )
}
