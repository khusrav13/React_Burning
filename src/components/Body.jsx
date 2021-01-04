import React from 'react'
import logo from '../images/logo.svg'

console.log(logo)

const Body = () => {
    return (

        <header id="header" className="header">
            <div className="container">
                <div className="nav">
                    <img src={logo} alt={'logo'} className={'logo'}/>
                        <ul className="menu">
                            <li>
                                <a href="#">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href='#bottom'>
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Tickets
                                </a>
                            </li>

                            <li>
                                <a href="#">
                                    Contacts
                                </a>
                            </li>
                        </ul>
                        <a href="tel:+99999999" className="tel">
                            +992 987223323232
                        </a>
                </div>
                <div className="offer">
                    <p>Not the Event. The Life</p>
                    <h1>
                        Burning MAN
                    </h1>
                    <a href="#" className="btn">Book the tickets</a>

                </div>
            </div>
        </header>
    )
}


export default Body;