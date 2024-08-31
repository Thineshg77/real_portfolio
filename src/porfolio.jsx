import './App.css'
import React from 'react'
import profile from './assets/profiles.png'
import react from './assets/react.svg'
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import bs from './assets/bootstrap.png'
import cecri from './assets/cecri.png'
import dc from  './assets/dc1.png'
import advice from './assets/aa.png'
import converter from './assets/cc.png'
import myweb from './assets/mw.png'
import generator from './assets/pg.png'
import weather from './assets/wap.png'
import gmart from './assets/gmart.png'
import github from './assets/gi.jpg'
import git from './assets/git.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
const porfolio = () => {
  return (
    <div className='container'>
      <div className="home">
        <nav><h1>Portfolio</h1><h1><a href="#about" className='nv'>Home </a>
         | <a href="#skill" className='nv'>Skills</a> | <a href="#project" className='nv'>Projects</a> |
          <a href="#contact" className='nv'> Contact</a><a href="#skill" className='wed'>
            <IoMenuSharp /></a></h1></nav> 
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
    <div className="co" id='about'>
    <div className="about">
        <img src={profile} alt="my image" />

    </div>
    <div className="me">
        <h2>About me</h2>
        <p>I'm a Front-End Developer and Chemist like to build a clean and  usable 
            interface and also I have experience with the ReactJs. I'm the one who 
            eager to upgrade my skills in every aspects.I have seeking for the opportunity
            to showcase my skills...
        </p>
    </div>
    </div>
    <h2 className='sk'>SKILLS</h2>
    <div className="skills" id='skill'>
        
        <div className="one">
            <img src={html} alt="" />
            <img src={css} alt="" />
        </div>
        <div className="one">
            <img src={bs} alt="" />
            <img src={js} alt="" />
        </div>
        <div className="one">
            <img src={react} alt="" />
            <img src={cecri} alt="" />
        </div>
        <div className="one">
            <img src={git} alt="" />
            <img src={github} alt="" />
        </div>
    </div>
    <h2 className='lk'>PROJECTS</h2>   
    <div className="project" id='project'>
     
    <div className="grd1">
    <div class="card">
  <img src={dc} alt="Avatar"/>
  <div class="contain">
    <h4><b>Digital Clock Project</b></h4> 
    <p>The Digital Clock App is used to display the current time 
      in the digital format.The Functions like
       getHours(),getMinutes(),getSeconds() are used.
    </p>
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
  </div>
<div className="grd2">
<div class="card">
  <img src={converter} alt="Avatar"/>
  <div class="contain">
    <h4><b>Currency Converter Project </b></h4> 
    <p>The Currency Converter App is used to convert amounts between
      different currencies using a real time exchange rates.A currency exchange 
      API to fetch up-to-date exchange rates.</p> 
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
    <p>The Advice App is designed to deliver the personalized advice.ReactJs handles
      user interactions and display the generated advice</p> 
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
  <img src={gmart} alt="Avatar"/>
  <div class="contain">
    <h4><b>G-mart E-commerce Website Project </b></h4> 
    <p>This Website is build using an html, css, react, react-router-dom and for database as JSON file.In this we add the product to cart and romove and login pages are integrated </p> 
    <div className="bad">
    <span class="badge">HTML</span>
    <span class="badge">CSS</span>
    <span class="badge">REACTJS</span>
    </div>
    <a href="https://gmartbythinesh.netlify.app/">&#10230;</a>
  </div>
  <div/>
  </div>
</div>
 <div className="grd3">
 <div class="card">
  <img src={myweb} alt="Avatar"/>
  <div class="contain">
    <h4><b>TN60_Pencil_Arts Website Project</b></h4> 
    <p>This Website is created for the purpose of selling the product to customers
      with user friendly options.</p> 
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
    <p>Password Generator is produce secure, random passwords based on 
      user friendly criteria.The app features user can specify parameters such as password length,
      uppercase,numbers and special characters.
    </p>
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
 </div>
 <div className="contact" id='contact'>
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
