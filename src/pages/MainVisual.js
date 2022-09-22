import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const ML = [
  { tit: "깔끔이청소 소개", link: "/sub01" },
  { tit: "아파트입주청소", link: "/sub02" },
  { tit: "이사/상가청소", link: "/sub03" },
  { tit: "사무실청소", link: "/sub04" },
]

const SlideItm = styled.div`
.tit{
  font-size:80px;
  font-weight:800;
  margin: 0 0 20px 0;
  background: linear-gradient(to right top, #0a96ba, #032777, #333333);
  color: transparent;
  -webkit-background-clip: text;
}
.con{
  font-size:20px;
  font-weight:300;
  margin: 0 0 20px 0;
  color:tomato
}
.des{
  font-size:15px;
  word-break:keep-all;
  line-height:1.45;
}
`
const Dots = styled.ul`
  display:flex;
  gap:10px;
  position:absolute;
  top:100px;
  left:50%;
  margin:0 0 0 -585px;

li{
  width:20px;
  height:20px;
  background:#ddd;
  font-size:0;
  &.on{
    background: tomato;
  }
}
`

const Arrows = styled.div`
  position:absolute;
  top:100px;
  left:50%;
  margin:0 0 0 0px;
 
  i{
    font-size:30px;
    color: #fff;
    background: rgba(0,0,0,0.25);
    padding:15px;
    border-radius:50%
  }
`

const SlideNum = styled.div`
position:absolute;
bottom:150px;
left:50%;
margin:0 0 0 -585px;

font-size:30px;
font-weight:700;
span{
  font-size:15px;
}
`

function MainVisual({ word }) {
  const [IDX, setIDX] = useState()
  const MS = useRef(null)

  return (
    <section className='MainVisual'>
      <Swiper
        ref={MS}
        className='MainSlide'
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        direction={"vertical"}
        loop={true}
        onSlideChange={el => setIDX(el.realIndex)}
      >
        {
          word.map((el, idx) => {
            return (
              <SwiperSlide key={el.id}>
                <SlideItm>
                  <div className="tit">{el.tit}</div>
                  <div className="con">{el.con}</div>
                  <div className="des">{el.des}</div>
                </SlideItm>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <div className="slider_etc">
        <Dots className="dots">
          {
            word.map((el, idx) => {
              return (
                <li
                  key={idx}
                  className={idx === IDX ? 'on' : ''}
                  onClick={() => { MS.current.swiper.slideTo(idx + 1) }}
                >0{idx + 1}</li>
              )
            })
          }
        </Dots>
        <div className="boom">
          <img src={process.env.PUBLIC_URL + '/assets/images/slogan.png'} alt="" />
        </div>
        <Arrows>
          <i className='xi-arrow-right' onClick={() => MS.current.swiper.slideNext()}></i>
        </Arrows>
        <SlideNum>0{IDX + 1} / <span>0{word.length}</span></SlideNum>
      </div>
      <ul className="main_link inner">

        {
          ML.map((el, idx) => {
            return (
              <li key={idx}>
                <Link to={el.link}>
                  <div className="case">
                    <span>{el.tit}</span>
                  </div>
                </Link>
              </li>
            )
          })
        }
        <li>
          <div className="customer">
            <strong><a href="tel:1234-1234">1234-1234</a></strong>
            <p>부산 양산 김해 기장 아파트입주청소 이사청소 <br />
              믿고 맡길 수 있는 청소 전문 업체
            </p>
            <i className='xi-user-plus-o'></i>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default MainVisual