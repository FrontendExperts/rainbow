import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    items:4,
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 4
        },
    },
}


export const OwlTest = () => {
    return (
        <>

            <OwlCarousel className='owl-theme' {...options} >

                <div className="item"><img className="img-fluid" src={'assets/images/testimonial-1.jpg'} /></div>

                <div className="item"><img className="img-fluid" src={'assets/images/testimonial-2.jpg'} /></div>

                <div className="item"><img className="img-fluid" src={'assets/images/user.jpg'} /></div>

                <div className="item"><img className="img-fluid" src={'assets/images/testimonial-1.jpg'} /></div>

                <div className="item"><img className="img-fluid" src={'assets/images/testimonial-2.jpg'} /></div>

                <div className="item"><img className="img-fluid" src={'assets/images/user.jpg'} /></div>

            </OwlCarousel>



        </>
    )
}
