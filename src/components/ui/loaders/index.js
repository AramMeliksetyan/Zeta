import React from 'react'
import Progress from '../progress'
import { AboutSectionCircleData } from '../about/constants'
import './style.scss'

export default function Loaders(props) {
    return (
        <section className={'loaders ' + (props.className ? props.className : '')}>
            
                <Progress progressCircleData={AboutSectionCircleData} />
           

        </section>
    )
}
