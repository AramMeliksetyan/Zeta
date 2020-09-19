import React from 'react';
import './style.scss'

export default function LetsWork(props) {
    return (
       <section className='lets-work'>
           {
                props.sectionTitle &&
                <p className="section-title">{props.sectionTitle}</p>
            }
            <div className='text-area'>
                <p>
                Dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam tincidunt venen atis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam tincidunt venenatis ultrices, est libero mattis ante, ac consectetur diam neque eget quam.
                </p>
            </div>
            <div className='btn-area'>
            <button>discover</button>
            </div>
       </section>
    )
}
