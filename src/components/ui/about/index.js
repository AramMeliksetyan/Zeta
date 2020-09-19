import React from 'react'
import './style.scss';
import Progress from '../progress';
import { AboutSectionProgressbarData } from './constants';

export default function About(props) {
    return (
        <section className='about-section'>
            {
                props.sectionTitle &&
                <p className="section-title">{props.sectionTitle}</p>
            }
            <div className='row'>
                {
                    props.text &&
                    <p className='about-section-text'>{props.text}</p>
                }
                <div className="progress-wrapper">
                    <Progress progressLineData={AboutSectionProgressbarData} />
                </div>
                {/* <div className='row'>
                {
                    props.data && props.data.map((item) => (
                        <div className='item' key={item.id}>    
                            <input />
                        </div>
                    ))
                }
            </div> */}
            </div>

        </section>
    )
}
