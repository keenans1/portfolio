// import React from "react";
// import "./AboutMe.css";
// import pong from "../../pong.png";
// import incline from "../../incline.png";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, A11y } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const AboutMe = () => {

//     return (
//         <div className="about-me-container">
//             <h2 className="about-me-title">About Me</h2>
//             <section className="swiper-container">
//                 <Swiper
//                 modules={[Navigation, Pagination, A11y]}
//                 slidesPerView={1}
//                 navigation
//                 pagination={{ clickable: true }}
//                 onSwiper={(swiper) => console.log(swiper)}
//                 onSlideChange={() => console.log('slide change')}
//                 className="my-swiper"
//                 >
//                     <SwiperSlide className="slide">
//                         <img src={pong} alt="picture" className="slide-img"/>
//                     </SwiperSlide>

//                     <SwiperSlide className="slide">
//                         <img src={incline} alt="picture" className="slide-img"/>
//                         <p>I love to hike the Manitou Springs Incline!</p>
//                     </SwiperSlide>

//                     <SwiperSlide className="slide">
//                         <img src={pong} alt="picture" className="slide-img"/>
//                         <p>I love to play table tennis!</p>
//                     </SwiperSlide>

//                     <SwiperSlide className="slide">
//                         <img src={pong} alt="picture" className="slide-img"/>
//                         <p>I love to play table tennis!</p>
//                     </SwiperSlide>
//                 </Swiper>
//             </section>
//         </div>
//     )
// }

// export default AboutMe

import React from "react";
import "./AboutMe.css";
import pong from "../../pong.png";
import pong2 from "../../pong2.png";
import pong3 from "../../pong3.png";
import pong4 from "../../pong4.png";
import pong5 from "../../pong5.png";
import pong6 from "../../pong6.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AboutMe = () => {

    return (
        <div className="about-me-container">
            <h2 className="about-me-title">About Me</h2>

            <section className="images-grid">

                <div className="horizontal-image-container">
                    <img src={pong} alt="picture" className="grid-img"/>
                    <p>I love to play table tennis!</p>
                </div>

                <div className="vertical-image-container">
                    <img src={pong2} alt="picture" className="grid-img"/>
                    <p>I love to play table tennis!</p>
                </div>

                <div className="horizontal-image-container">
                    <img src={pong3} alt="picture" className="grid-img"/>
                    <p>I love to play table tennis!</p>
                </div>

                <div className="vertical-image-container">
                    <img src={pong4} alt="picture" className="grid-img"/>
                    <p>I love to play table tennis!</p>
                </div>

                <div className="horizontal-image-container">
                    <img src={pong5} alt="picture" className="grid-img"/>
                    <p>I love to play table tennis!</p>
                </div>

                <div className="vertical-image-container">
                    <img src={pong6} alt="picture" className="grid-img"/>
                    <p>I love to play table tennis!</p>
                </div>

            </section>
        </div>
    )
}

export default AboutMe