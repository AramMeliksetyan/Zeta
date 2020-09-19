import React from 'react'
import './style.scss'
import SlickCarouselSlider from '../Slider'
import { testimonialsSlideshowData } from './constants';
import './style.scss';


export default function Testimonials() {
    return (
        <section className='section-testimonials'>
            <SlickCarouselSlider data={testimonialsSlideshowData}/>
        </section>
    )
}
