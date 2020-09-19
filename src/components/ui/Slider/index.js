import React from 'react'
import Slider from "react-slick";
import './style.scss';



export default function SlickCarouselSlider(props) {

    const settings = {
        dots: props.dots,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <section className={props.className}>
            <Slider {...settings}>
                {props.data && props.data.map((item) => (
                    <div className="item" key={item.id}>
                        <div className="img-area">
                            <img src={item.imgUrl} alt="home-first-slideshow-img" />
                        </div>
                        <div className="text-area">
                            {
                                item.name &&
                                <p className="name">{item.name}</p>
                            }
                            {
                                item.position &&
                                <p className="position">{item.position}</p>
                            }
                            <p className="txt">{item.text}</p>
                            {
                                item.buttonText &&
                                <button className="slideshow-btn">{item.buttonText}</button>
                            }
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}
