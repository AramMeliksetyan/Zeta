import React from 'react'
import './style.scss'

export default function OurClients(props) {
    return (
        <section className='our-clients-section'>
            {
                props.sectionTitle &&
                <p className="section-title">{props.sectionTitle}</p>
            }
            <div className='row'>
                <div className='left-text-area'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, olor sit amet, consectetur adipiscing eli quam tincidunt venen atis ultrices, est libero olor sit amet, consectetur adipiscing eli mattis ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam tincidunt venenatis ultrices, est libero mattis quam tincidun ante, ac consectetur diam neque eget quam.
                      </p>
                </div>
                <div>
                    <p>
                        Amet, consectetur adipiscing elit. Phasellus vestibulum, olor sit amet, consectetur adipiscing eli quam tincidunt venen atis ultrices, quam tincidunest libero olor sit amet, consectetur adipiscing eli mattis ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, quam tincidunt venenatis ultrices, est libero mattis quam tincidun ante, ac cquam tincidunonsectetur diam neque eget quam.
                    </p>
                </div>
            </div>
            <div className='img-row'>
                {
                    props.data && props.data.map((item) => (
                        <div className="item" key={item.id}>
                            <div className='img-area' >
                                <img src={item.imgUrl} alt='companies' />
                            </div>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}
