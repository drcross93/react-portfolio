import React from 'react'
import profileImage from '../assets/cross.jpg'
import Link from './Link'

const Hero = () => {
  return (
    <section className="hero divide">
        <div className="image">
            <img src={profileImage} alt="Photo of Devontay Cross" />
        </div>
        <div>
            <h1>Devontay Cross</h1>
            <p>Full Stack Web Developer</p>
            <p>Louisville, Kentucky to Helsinki, Finland</p>
            <Link href="#projects" >Check out my work</Link>
        </div>
    </section>
  )
}

export default Hero