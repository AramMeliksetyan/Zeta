import React from 'react';
import './style.scss'

export default function Departments(props) {
    return (
        <section className='departments'>
            <div className='departments-conponents'>
                {
                    props.data && props.data.map((item) => (
                        <div className='img-area'
                            style={{
                                backgroundImage: `url(${item.bgimgUrl})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                height: '80vh',
                            }}
                            key={item.id}>
                            <div className='text-area'>
                                <div className='txt'>
                                    <p className='title'>{item.title}</p>
                                    <p className='text'>{item.text}</p>
                                </div>
                            </div>
                            <div className="departments-button">
                                {
                                    props.sectionButton &&
                                    <button>{props.sectionButton}</ button>
                                }
                            </div>
                        </div>
                    ))
                }


            </div>
        </section>
    )
}
