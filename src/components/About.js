import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
       I am currently pursuing a <b>Bachelor of Technology</b> in <b>Computer Science and Engineering</b> at
<a href="https://www.iiitdmj.ac.in/"> IIIT Jabalpur</a>. Alongside my studies, I build projects in <b>AI, Web Development, and IoT</b>
, including applications like Fake News Detection, Intelligent Video Surveillance Systems, and productivity tools. 

        
      </p>
    );
    const two = (
      <p>
       When I'm not working on tech, I spend my time writing stories, 
       singing, and expressing myself through art.
      </p>
    );

    const tech_stack = [
      "Flutter",
      "Python",
      "React.js",
      "Java",
      "Javascript ES6+",
      "C++"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Shafaq Ali" src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
