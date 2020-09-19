import React from 'react';
import MainBackground from '../../ui/main-background';
import './style.scss';
import Buttons from '../../ui/buttons';
import ProgBarsAndAccord from '../../ui/prog-bar-and-accord';
import Loaders from '../../ui/loaders';
import Milestones from '../../ui/milestones';
import { milestonesData } from '../../ui/milestones/constants';
import IconBoxes from '../../ui/IconBoxes';
import { firstIconBoxesData } from '../../ui/IconBoxes/constants';


export default function Elements() {
    return (
        <React.Fragment>
            <MainBackground title='Contact' text='Get In Touch'/>
            <Buttons />
            <ProgBarsAndAccord />
            <Loaders className="circle-loaders-section"/>
            <Milestones data={milestonesData} />
            <IconBoxes data={firstIconBoxesData} sectionTitle='ICON BOXES'/>
        </React.Fragment>
    )
}
