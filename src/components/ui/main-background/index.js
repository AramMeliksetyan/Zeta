import React from 'react';
import './style.scss'

export default function MainBackground(props) {
    return (
        <section className='main-background'>
            <div className='text-area'>
                <p className='title'>{props.title}</p>
                <p className='paragraph'>{props.text}</p>
            </div>
        </section>
    )
}
