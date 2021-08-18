import React,{Component} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import './styles/style.css';
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);



// import img from './images/woman2.jpeg';


export default class Causeral extends Component{
    render(){
        return(
            <div className="container">
      <div className="title_wrapper">
        <div className="reactLogo">
          <img src="./images/people.jpg"  alt='people' />
        </div>
        <div className="title_">
          Swiper Slider
        </div>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide>
        {/* <img src={img} alt=" "  />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img} alt=" "  /> */}
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./images/woman2.jpeg')} />
        </SwiperSlide>
      </Swiper>
    </div>
        );
    }
}


