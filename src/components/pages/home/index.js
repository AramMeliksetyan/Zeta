import React from 'react'
import SlickCarouselSlider from '../../ui/Slider'
import { homeFirstSlideshowData } from '../../ui/Slider/constants'
import './style.scss';
import IconBoxes from '../../ui/IconBoxes';
import { firstIconBoxesData, secondIconBoxesData } from '../../ui/IconBoxes/constants';
import About from '../../ui/about';
import Testimonials from '../../ui/testimonials';
import OurClients from '../../ui/clients';
import { ourCliensImagesData } from '../../ui/clients/constants';
import LetsWork from '../../ui/lets-work';


export default function Home() {
    return (
        <React.Fragment>
            <SlickCarouselSlider dots className="home-first-slideshow-section" data={homeFirstSlideshowData} />
            <IconBoxes data={firstIconBoxesData} />
            <About
                sectionTitle='about our project'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam tincidunt venenatis ultrices, est libero mattis ante, ac consectetur diam neque eget quam. Etiam feugiat augue et varius blandit. Praesent mattis, eros a sodales commodo, justo ipsum rutrum mauris, sit amet egestas metus.'
            />
            <Testimonials />
            <IconBoxes withBackground data={secondIconBoxesData} sectionButton='DISCOVER' />
            <OurClients sectionTitle='OUR CLIENTS' data={ourCliensImagesData}/>
            <LetsWork sectionTitle="LET'S WORK TOGETHER" />
            

        </React.Fragment>
    )
}
