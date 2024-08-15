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
    </div>

  )
};

export default porfolio
