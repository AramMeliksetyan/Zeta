import React from 'react'
import Progress from '../progress'
import { AboutSectionProgressbarData } from '../about/constants'
import './style.scss';
import { AccordionData } from '../accordion/constants';
import MUIAccordion from '../accordion';

export default function ProgBarsAndAccord() {
    return (
        <section className='prog-bars-and-accord'>
            <div className='title'>
                <p>progress bars and accordions</p>
            </div>
            <div className='main-div'>
                <div className='progress-wrapper'>
                    <Progress progressLineData={AboutSectionProgressbarData} />
                </div>
                <div className='accordions'>
                    <MUIAccordion data={AccordionData} />
                </div>
            </div>
        </section>
    )
}
