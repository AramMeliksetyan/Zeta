import React from 'react'
import './style.scss'

export default function ContactInput() {
    return (
        <section className='input-section'>
            <div className='left-area'>
                <div className='area-title'>
                    Contact us
            </div>
                <form>
                    <div className="input-line">
                        <input type="text" defaultValue="Name" className="name-input" required />
                        <input type="text" defaultValue="Email" className="email-input" required />
                    </div>
                    <div className="second-input">
                        <input type="text" defaultValue="Subject" className="subject-input" required />
                    </div>
                    <div className="third-input">
                        <textarea defaultValue="Message" className="message-input" required >
                        </textarea>
                    </div>
                    <div className="send-button">
                        <button type="submit">SEND</button>
                    </div>
                </form>
            </div>
            <div className='right-area'>
                <div className='area-title'>
                    Contact info
            </div>
                <div className="address">
                    <ul>
                        <li>Rosia Road , No234/56
                                    <br />Gibraltar , UK
                                </li>
                        <li>contact@cocoontemplate.com</li>
                        <li>+5463 834 53 2245</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
