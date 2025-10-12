import React from 'react'
import Link from './Link';

const About = () => {
  return (
    <section id="about" className="about divider">
      <h2>About Me</h2>
      <p>
        I’m a former professional athlete turned developer and founder who’s passionate about building things that make a difference. My background in Health Sciences taught me how systems work, and my time in sports taught me how to push limits, stay disciplined, and lead teams under pressure. Now, I apply that same mindset to technology—creating clean, impactful software and user experiences that solve real problems. Whether I’m coding, designing, or leading a project, I’m driven by curiosity, growth, and a genuine desire to turn ideas into something that moves people forward.
      </p>
      <Link href="#">Download my Resume</Link>
    </section>
  );
}

export default About