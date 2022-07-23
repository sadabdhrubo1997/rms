import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewArrival.scss';
import PrevIcon from './prev.svg';
import NextIcon from './next.svg';
import SingleSliderItem from './SingleSliderItem';
import axios from 'axios';
import {BASE_URL, PUBLIC_URL} from '../../../../config';

export default class NewArrival extends Component {
  constructor(props) {
    super(props)

    // bind with this keywork
    this.next = this
      .next
      .bind(this);
    this.previous = this
      .previous
      .bind(this);
      this.state = {date:null};


      

  }

  next() {
    this
      .slider
      .slickNext();

  }
  previous() {
    this
      .slider
      .slickPrev();
  }
  
  componentDidMount(){
    axios.get(`${BASE_URL}newArrival`)
    .then(res=>{
      if (res.status === 201) {
        this.setState({
          data:res.data
        })
      }
    })
  }
  render() {


    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll: 3,
      draggable: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            draggable: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 768,
          settings: {
            draggable: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 576,
          settings: {
            draggable: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div id="new_arrival" className="container">
        <h2>New Arrivals</h2>
        <p>
          See our latest creations here and find your pick.
        </p>

        {this.state.data &&
          <div className="wrapper">
          <img className="arrow" onClick={this.previous} src={PrevIcon} alt="Prev Icon"/>
          <div className="slider_main">
            <Slider ref={c => (this.slider = c)} {...settings}>
              {
                this.state.data &&
                this.state.data.map((item,idx)=>(
                  <SingleSliderItem key={idx} image ={PUBLIC_URL+item.image} name={item.name}/>
                ))
              }             
            </Slider>
          </div>
          <img className="arrow" onClick={this.next} src={NextIcon} alt="Next Icon"/>
        </div>}
        {
          !this.state.data &&
          <h1 style={{textAlign:"center"}}>No Product Exists In New Arrival</h1>
        }
      </div>
    )
  }
}
