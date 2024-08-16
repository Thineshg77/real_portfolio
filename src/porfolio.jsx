import './App.css'
import React from 'react'
import profile from './assets/profiles.png'
import react from './assets/react.svg'
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import bs from './assets/bootstrap.png'
import mangodb from './assets/mangodb.png'
import cecri from './assets/cecri.png'
import dc from  './assets/dc1.png'
import advice from './assets/aa.png'
import converter from './assets/cc.png'
import myweb from './assets/mw.png'
import generator from './assets/pg.png'
import weather from './assets/wap.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
const porfolio = () => {
  return (
    <div className='container'>
      <div className="home">
        <nav><h1>Porfolio</h1><h1><a href="#"><IoMenuSharp /></a></h1></nav> 
      </div>
      <div className="intro">
            <h1>HI, I'm Thinesh G</h1>
            <h3>Frontend Developer | Chemist</h3>
            <p>As a Front-End Developer and Chemist, I have clear knowledge about both
                 Chemicals as well as Syntex with little experience</p>
        </div>
        <div className="social">
       <a href="https://wa.me/qr/HZ2QK4D6UQ2JF1"> <AiOutlineWhatsApp /></a>
       <a href="https://www.linkedin.com/in/thinesh-g-a13a84281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin /></a>
        <a href="https://github.com/Thineshg77"><FaGithub /></a>
       <a href="">Resume <TbFileCv /></a>
        </div>
    <div className="about">
        <img src={profile} alt="my image" />

    </div>
    <div className="me">
        <h2>About me</h2>
        <p>I'm a Front-End Developer and Chemist like to build a clean and  usable 
            interface and also I have experience with the Reactjs. I'm the one who 
            eager to upgrade my skills in every aspects.I have seeking for the opportunity
            to showcase my skills...
        </p>
    </div>
    <div className="skills">
        <h2>Skills</h2>
        <div className="1">
            <img src={html} alt="" />
            <img src={css} alt="" />
        </div>
        <div className="1">
            <img src={bs} alt="" />
            <img src={js} alt="" />
        </div>
        <div className="1">
            <img src={react} alt="" />
            <img src={mangodb} alt="" />
        </div>
        <div className="1">
            <img src={cecri} alt="" />
        </div>
    </div>
    <div className="project">
     <h2>Projects</h2>   
    <div class="card">
  <img src={dc} alt="Avatar"/>
  <div class="contain">
    <h4><b>Digital Clock Project</b></h4> 
    <p>Architect & Engineer</p>
    <div className="bad">
    <span class="badge">HTML</span>
    <span class="badge">CSS</span>
    <span class="badge">REACTJS</span>
    </div>
    <a href="https://thinesh-clock.netlify.app/">&#10230;</a> 
  </div>
  <div/>
</div>
<div class="card">
  <img src={weather} alt="Avatar"/>
  <div class="contain">
    <h4><b>Weather App Project</b></h4> 
    <p>The Weather App is a user-friendly mobile app designed to provide
        real time and accurate weather information to users
    </p>
    <div className="bad">
    <span class="badge">HTML</span>
    <span class="badge">CSS</span>
    <span class="badge">REACTJS</span>
    </div>
    <a href="https://weatherappbythinesh.netlify.app/">&#10230;</a>
  </div>
  <div/>
  </div>
<div class="card">
  <img src={converter} alt="Avatar"/>
  <div class="contain">
    <h4><b>Currency Converter Project </b></h4> 
    <p>Architect & Engineer</p> 
    <div className="bad">
    <span class="badge">HTML</span>
    <span class="badge">CSS</span>
    <span class="badge">REACTJS</span>
    </div>
    <a href="https://currencyconverterbythinesh.netlify.app/">&#10230;</a>
  </div>
  <div/>
  </div>
  <div class="card">
  <img src={advice} alt="Avatar"/>
  <div class="contain">
    <h4><b>Advice Website Project</b></h4> 
    <p>Architect & Engineer</p> 
    <div className="bad">
    <span class="badge">HTML</span>
    <span class="badge">CSS</span>
    <span class="badge">REACTJS</span>
    </div>
    <a href="https://advice-appproject.netlify.app/">&#10230;</a>
  </div>
  <div/>
  </div>
  <div class="card">
  <img src={myweb} alt="Avatar"/>
  <div class="contain">
    <h4><b>Advice Website Project</b></h4> 
    <p>Architect & Engineer</p> 
    <div className="bad">
    <span class="badge">HTML</span>
    <span class="badge">CSS</span>
    </div>
    <a href="https://tn60pencilarts.netlify.app/">&#10230;</a> 
  </div>
  <div/>
  </div>
  <div class="card">
  <img src={generator} alt="Avatar"/>
  <div class="contain">
    <h4><b>Passwor Generator Project</b></h4> 
    <p>Architect & Engineer</p>
    <div className="bad">
    <span class="badge">HTML</span>
    <span class="badge">CSS</span>
    <span class="badge">REACTJS</span>
    </div>
    <a href="https://passwordbythinesh.netlify.app/">&#10230;</a> 
  </div>
  <div/>
  </div>
 </div>
 <div className="contact">
    <h2>Get In Touch</h2>
    <div className="in">
    <label htmlFor="">Name</label>
    <input type="text" />
    </div>
    <div className="in">
    <label htmlFor="">Email</label>
    <input type="text" />
    </div>
    <div className="out">
    <label htmlFor="">Details</label>
    <input type="text" />
    </div>
      <div className="submit">
        <button>Submit</button>
      </div>
 </div>
<div className="us">
    <p>&copy;Designed by THINESH</p>
</div>
  </div>

  )
};

export default porfolio
