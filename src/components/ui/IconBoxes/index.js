import React from 'react';
import './style.scss';

export default function IconBoxes(props) {
    return (
        <section className={"icon-boxes-section" + (props.withBackground ? ' with-background' : '')}>
            {
                props.sectionTitle &&
                <p className="section-title">{props.sectionTitle}</p>
            }
            <div className="row">
                {
                    props.data && props.data.map((item) => (
                        <div className="item" key={item.id}>
                            <div className='img-area'>
                                <item.img />
                                {/* <img src={item.imgUrl} alt='icon-box-img' /> */}
                            </div>
                            <div className='text-area'>
                                <p className="title">{item.title}</p>
                                <p className="text">{item.text}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="icon-boxes-button">
                {
                    props.sectionButton &&
                    <button>{props.sectionButton}</ button>
                }
            </div>

        </section>
    )
}
