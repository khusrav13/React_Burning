import React from 'react'
import image1 from '../images/img1.jpg'
import image2 from '../images/img2.jpg'
import image3 from '../images/img3.jpg'

console.log(image1)
console.log(image2)
console.log(image3)


const Section = () => {
    return (
        <div id={'about'} className={'about'}>
            <a name={'bottom'}></a>
            <div className={'container'}>
                <h2>
                    About the event
                </h2>
                <div className={'description'}>
                    <div className="desc-left">
                        <h3>Rebuilding the society</h3>
                        <p>Burning Man is a network of people inspired by
                            the values reflected in the Ten Principles and united in
                            the pursuit of a more creative and connected existence in the world.
                            Throughout the year we work to build Black Rock City,
                            home of the largest annual Burning Man gathering, and nurture
                            the distinctive culture emerging from that experience. </p>
                    </div>

                    <div className="desc-right">
                        <h3>This drives us</h3>
                        <p>
                            Burning Man Project will bring experiences to people in grand, awe-inspiring and joyful ways
                            that lift the human spirit, address social problems, and inspire a sense of culture,
                            community, and civic engagement. Burning Man provides infrastructural tools and frameworks
                            to support local communities in applying the Ten Principles through six interconnected
                            program areas, including Arts, Civic Involvement, Culture, Education, Philosophical Center,
                            and Social Enterprise.
                        </p>
                    </div>
                </div>
                <div className="gallery">
                    <img src={image1} alt="img 1" />
                        <img src={image2} alt="img 2" />
                            <img src={image3} alt="img 3" />
                </div>
            </div>
        </div>
    )
}


export default Section;