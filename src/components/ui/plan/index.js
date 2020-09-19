import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export default function Plan(props) {
    return (
        <section className='plan-section'>
            {
                props.data && props.data.map((item) => (
                    <div className='plan-area' key={item.id}>
                        <div className='img-area'>
                            <img src={item.imgUrl} alt='plan-images' />
                        </div>
                        <div className='text-area'>
                            <p className='title'>{item.title}</p>
                            <p className='text'>{item.text}</p>
                        </div>
                        <div className='plan-button'>
                            <Link to='/'>READ MORE<i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}
