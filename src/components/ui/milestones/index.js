import React from 'react'
import './style.scss';

export default function Milestones(props) {
    return (
        <section className='milestones'>
            <div className='milestones-title'>
                <p>MILESTONES</p>
            </div>
            <div className='milestones-items'>
            {
                props.data && props.data.map((item) => (
                    <div className='item' key={item.id}>
                        <p className='number'>{item.number}</p>
                        <p className='text'>{item.text}</p>
                    </div>
                ))
            }
            </div>
        </section>
    )
}
