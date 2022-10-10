import React from "react";

const About = () => (
  <>
    {/* about */}
    <div className="flex justify-center text-stone-900 pb-4">ABOUT</div>
    <div>
      <span className="text-xl pr-1">&#x2022;</span>
      grad student in CS at&nbsp;
      <span className="text-stone-900">Stevens Institute</span>
    </div>
    <div>
      <span className="text-xl pr-1">&#x2022;</span>
      <a className="text-stone-900" href="https://twitter.com/_narmit">
        Twitter
      </a>
      ,&nbsp;
      <a
        className="text-stone-900"
        href="https://www.linkedin.com/in/narmitmashruwala/"
      >
        LinkedIn
      </a>
      ,&nbsp;
      <a
        className="text-stone-900"
        href="mailto:narmitmashruwala@gmail.com?subject=[Website]..."
      >
        Email
      </a>
      ,&nbsp;
      <a className="text-stone-900" href="https://github.com/namz11">
        GitHub
      </a>
    </div>
    <div>
      <span className="text-xl pr-1">&#x2022;</span>
      software dev, product management, system design, databases
    </div>
    <div>
      <span className="text-xl pr-1">&#x2022;</span>
      <a className="text-stone-900" href="/NarmitMashruwala.pdf">
        Resume
      </a>
    </div>
  </>
);

export default About;
