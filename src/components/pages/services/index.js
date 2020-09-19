import React from 'react'
import MainBackground from '../../ui/main-background';
import IconBoxes from '../../ui/IconBoxes';
import {  secondIconBoxesData } from '../../ui/IconBoxes/constants';
import './style.scss';
import Departments from '../../ui/departments';
import { departmentsData } from '../../ui/departments/constants';
import Plan from '../../ui/plan';
import { planSectionData } from '../../ui/plan/constants';
import LetsWork from '../../ui/lets-work';

export default function Services() {
    return (
        <React.Fragment>
            <MainBackground title='Services' text='What We Do'/>
            <IconBoxes data={secondIconBoxesData} sectionButton='discover'/>
            <Departments data={ departmentsData } sectionButton='discover'/>
            <Plan data={ planSectionData } />
            <LetsWork sectionTitle="LET'S WORK TOGETHER" />
        </React.Fragment>
    )
}
