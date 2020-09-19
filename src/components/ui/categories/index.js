import React from 'react'
import './style.scss'

export default function Categories(props) {
    return (
        <section className='categories-section'>
            <div className='section-title'>
                <p>categories</p>
            </div>
            {
                props.data && props.data.map((item) => (
                    <div className='sidebar' key={item.id}>
                <ul>
                <li>{item.desc}</li>
                </ul>
            </div>
                ))
            }
        </section>
    )
}
