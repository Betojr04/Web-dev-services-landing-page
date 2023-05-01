import React from "react";

const AboutMe = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src="your-photo.jpg" alt="Your Name" />
      <h3>Your Name</h3>
      <p class="subtitle">Full Stack Software Developer | YourLocation</p>
      <p>
        I'm [Your Name], a full stack developer skilled in [core skills, e.g.,
        JavaScript, React, Node.js, Python, etc.]. Having completed an intensive
        bootcamp, I'm enthusiastic about creating efficient, user-friendly web
        applications and continuously learning to stay up-to-date with industry
        trends.
      </p>
      <p>
        Outside of coding, I enjoy [mention one or two personal hobbies or
        interests, e.g., hiking, photography, etc.], which keeps me inspired and
        balanced.
      </p>
      <a href="your-contact-link" class="cta">
        Interested in working together? Get in touch
      </a>
    </section>
  );
};

export default AboutMe;
