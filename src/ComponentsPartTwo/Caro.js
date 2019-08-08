import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Caro = () => {
    return (
        <div className="Carousel d-flex" style={{
            height: '100vh', width: '95vw', overflow: 'hidden', marginTop: '-275px'
        }}>
            <div className='widthPic' width='25%'>
                <img src="/img/main.jpg" style={{ width: '400px', height: '250px' }} />
            </div>

            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} width='30%'>
                <div style={{ width: '400px', height: '250px' }}>
                    <img src="/img/one.jpg" style={{ width: '400px', height: '250px' }} />
                </div>
                <div>
                    <img src="/img/two.jpg" style={{ width: '400px', height: '250px' }} />
                </div>
                <div>
                    <img src="/img/three.jpg" style={{ width: '400px', height: '250px' }} />
                </div>
            </Carousel>

        </div >
    )
}

export default Caro;
