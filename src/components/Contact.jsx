import React from 'react'
import { Icons } from './Icons'

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Let&apos;s connect and create together.</p>
        <div className="socials-container">
            {/* <a href="#"><Icons.facebook /></a>
            <a href="#"><Icons.instagram /></a> */}
            <a href="https://github.com/drcross93"><Icons.github /></a>
            <a href="www.linkedin.com/in/devontay-cross"><Icons.linkedin /></a>
            {/* <a href="#"><Icons.x /></a> */}
        </div>
    </section>
  )
}

export default Contact