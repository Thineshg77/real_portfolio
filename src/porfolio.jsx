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
import weather from './assets/wa.png'
const porfolio = () => {
  return (
    <div className='container'>
      <div className="home">
        <nav><h1>THINESH G</h1></nav> 
      </div>
    <div className="about">
        <img src={profile} alt="my image" />

    </div>
    <div className="me">
        <h2>About me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatibus omnis voluptates perspiciatis 
            maxime atque consequuntur vel! Placeat, temporibus aliquid.</p>
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
     <h2>Project</h2>   
    <div class="card">
  <img src={dc} alt="Avatar"/>
  <div class="contain">
    <h4><b>Digital Clock Project</b></h4> 
    <p>Architect & Engineer</p>
    <a href="">Github</a> 
    <a href="">Website</a>
  </div>
  <div/>
  
</div>
<div class="card">
  <img src={converter} alt="Avatar"/>
  <div class="contain">
    <h4><b>Currency Converter Project </b></h4> 
    <p>Architect & Engineer</p> 
    <a href="">Github</a> 
    <a href="">Website</a>
  </div>
  <div/>
  </div>
  <div class="card">
  <img src={advice} alt="Avatar"/>
  <div class="contain">
    <h4><b>Advice Website Project</b></h4> 
    <p>Architect & Engineer</p> 
    <a href="">Github</a> 
    <a href="">Website</a>
  </div>
  <div/>
  </div>
  <div class="card">
  <img src={generator} alt="Avatar"/>
  <div class="contain">
    <h4><b>Passwor Generator Project</b></h4> 
    <p>Architect & Engineer</p>
    <a href="">Github</a> 
    <a href="">Website</a> 
  </div>
  <div/>
  </div>
  <div class="card">
  <img src={weather} alt="Avatar"/>
  <div class="contain">
    <h4><b>Weather App Project</b></h4> 
    <p>Architect & Engineer</p>
    <a href="">Github</a> 
    <a href="">Website</a> 
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
  </div>

  )
};

export default porfolio
