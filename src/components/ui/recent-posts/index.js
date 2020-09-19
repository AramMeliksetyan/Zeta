import React from 'react'

export default function RecentPosts(props) {
    return (
        <section className='recent-posts'>
            <div className='section-title'>
              <p>{props.title}</p>
            </div>
            {
                props.data && props.data.map((item) =>(
                   <div className='item' key={item.id}>
                       <div className='img-area'>
                       <img src={item.imgUrl} alt="fds" className='img-fluid'/>
                       </div>
                       <div className='info-area'>
                            <p className='position'>{item.position}</p>
                            <p className='date'>{item.date}</p>
                       </div>
                   </div> 
                ))
            }
        </section>
    )
}
