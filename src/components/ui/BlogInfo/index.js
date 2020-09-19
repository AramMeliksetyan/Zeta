import React from 'react'
import { Link } from 'react-router-dom';


export default function BlogInfo(props) {
    return (
        <React.Fragment>
            {
                props.data && props.data.map((item) => (
                    <div className="item" key={item.id}>
                        <div className="img-area">
                            <img src={item.imgUrl} alt="fds" className='img-fluid'/>
                        </div>
                        <div className="date-area"><span>{item.date}</span></div>
                        <div className="text-area1">{item.text1}</div>
                        <div className="text-area2">
                            <div className='author'>BY LORE PAPP</div>
                            <div className='sector'>ECONOMY</div>
                            <div className='comments'>2 COMMENTS</div>
                        </div>
                        <div className="text-area3">{item.text3}</div>
                        <div className='button'>
                            <Link to='/'>READ MORE<i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                ))
            }
        </React.Fragment>
    )
}
