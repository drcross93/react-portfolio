import React from 'react'
import Link from './Link';

const About = () => {
  return (
    <section id="about" className="about divider">
      <h2>About Me</h2>
      <p>
        Combining the drive of an entrepreneur, the discipline of a professional
        athlete, the knowledge of a health sciences college graduate, and the
        technical skills of an IT developer, I am a multi-faceted individual
        with a passion for making a difference in both my personal and
        professional life. Whether it's through developing cutting-edge
        technology solutions, promoting healthy living, or pushing the
        boundaries of what's possible, I am always striving for growth and
        success.
      </p>
      <Link href="#">Download my Resume</Link>
    </section>
  );
}

export default About