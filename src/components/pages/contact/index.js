import React from 'react'
import MainBackground from '../../ui/main-background'
import ContactInput from '../../ui/contact-input-section'
import LetsWork from '../../ui/lets-work';
import './style.scss';

export default function Contact() {
    return (
        <React.Fragment>
            <section className="contact-banner-section">
                <MainBackground title="Contact" text="GET IN TOUCH" />
                <ContactInput />
            </section>
            <section className="map-section">
                <img src="/images/contact/map.png" alt="map" />
            </section>
            <LetsWork sectionTitle="LET'S WORK TOGETHER" />
        </React.Fragment>
    )
}
