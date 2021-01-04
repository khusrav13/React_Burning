import React from 'react'

const Footers = () => {
    return (
        <div id={'footer'} className={'footer'}>
            <div className="container">

                <div className="footer-text">
                    <p>
                        © 2021 Burning Man. Все права защищены. Используя сайт, вы обязуетесь выполнять условия данного
                        соглашения.

                    </p>
                    <p>
                        Проект создан при поддержке "Jones Corp"

                    </p>

                    <a href="http://mix.tj/info/contact" className="contacts">Contacts</a>

                </div>
                <div id="contact">
                </div>
            </div>
        </div>
    )
}


export default Footers;