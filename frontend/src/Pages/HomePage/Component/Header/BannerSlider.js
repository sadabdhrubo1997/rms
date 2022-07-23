import React, {Component} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BannerSlider.scss'
import axios from 'axios'
import {BASE_URL, PUBLIC_URL} from './../../../../config';

export default class BannerSlider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: null
    };
  }

  componentDidMount() {
    axios
      .get(`${BASE_URL}header-slider`)
      .then(res => {

        if (res.status === 201) {
          this.setState({data: res.data})
        }
      })
  }

  render() {

    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      autoplay: true,
      autoplaySpeed:5000,
      pauseOnHover: false,
      pauseOnFocus: false,

    };
    return (
      <div id="bannerslider">
        {this.state.data && <Slider ref={slider => (this.slider = slider)} {...settings}>
          {
            this.state.data.map((item,idx)=>(
              <img src={PUBLIC_URL+item.image} alt="BACKGROUND"/>
              ))
          }
        </Slider>}

      </div>
    )
  }

}
