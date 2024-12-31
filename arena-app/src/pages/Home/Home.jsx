import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import title from '../../assets/title.png'


const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="hero_banner" width={1000} height={1000} />
        <div className="hero-caption"></div>
        <img src={title} alt="" className="caption-img" width={100}height={100}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, 
          vitae esse! Error impedit vero molestiae itaque nobis 
          </p>
          <div className="hero-btns">
            <button><img src="" alt="" /></button>
          </div>
      </div>
    </div>
  )
}

export default Home
