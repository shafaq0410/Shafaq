import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "No Man's Land": {
        title: "Intelligent Video Surveillance System",
        desc:
          "A full-stack intelligent video surveillance system with motion, object, and face detection.",
        techStack: "PYTHON, FLASK, YOLOV8, OPENCV, FACE_RECOGNITION, SQLITE, JAVASCRIPT, BOOTSTRAP",
        link: "https://github.com/shafaq0410/IVSS-Video-Surveillance",
        open: "https://github.com/shafaq0410/IVSS-Video-Surveillance",
        image: "/assets/nomansland.png"
      },
      Truth: {
        title: "fake news detection",
        desc:
          "Fake News? Not on my watch! 🕵️‍♀️ An AI-powered rumor-buster that sniffs out lies faster than you can say “clickbait.” Built with NLP + fact-check APIs + a sleek frontend. Stay woke, stay informed.",
        techStack: "C++ , CMAKE , DART , PYTHON , SWIFT",
        link: "https://github.com/shafaq0410/fake-news-detection-v2",
        open: "https://github.com/shafaq0410/fake-news-detection-v2",
        image: "/assets/truth.png"
      },
      "Tall Tales": {
        title: "ejs blog",
        desc:
          "This is a simple blog web application built using Node.js, Express, and EJS. It allows users to compose blog posts, view them on the homepage, and navigate to full content using dynamic routing",
        techStack: "JAVASCRIPT , EJS , CSS",
        link: "https://github.com/shafaq0410/ejs-blog",
        open: "https://github.com/shafaq0410/ejs-blog",
        image: "/assets/talltales.png"
      },
      Portfolio: {
        title: "FlaskQuoteApp",
        desc:
          "A Python Flask web app that greets you by name and surprises you with a new inspirational quote every time.",
        techStack: "PYTHON, FLASK , HTML",
        link: "https://github.com/shafaq0410/FlaskQuoteApp",
        open: "https://github.com/shafaq0410/FlaskQuoteApp",
        image: "/assets/portfolio.png"
      }
    };
    const projects = {
      "legendary-guide": {
        desc:
          "This is a fun, interactive website designed to connect dog owners and their furry friends with nearby playmates. Whether you're looking for a casual meetup or a lifelong companion for your dog, Woof-Buddies has you covered.",
        techStack: "HTML , CSS",
        link: "https://github.com/shafaq0410/legendary-guide",
        open: "https://shafaq0410.github.io/legendary-guide/"
      },
      "ToDoList": {
        desc:
          "A simple ToDo List web application built with Node.js, Express, EJS templating, and MongoDB Atlas for data storage.",
        techStack: "Javascript, HTML / CSS , EJS , MongoDB",
        link: "https://github.com/shafaq0410/ToDoList"
        
      },
      "Drum Kit": {
        desc:
          "An interactive Drum Kit web app built with HTML, CSS, and JavaScript. Play different drum sounds by clicking buttons or using keyboard keys (w, a, s, d, j, k, l)",
        techStack: "Node.js (Express.js), React.js, PostgreSQL",
        link:
          "https://github.com/shafaq0410/Drum-Kit",
        open: "https://shafaq0410.github.io/Drum-Kit/"
      },
      "Weather App": {
        desc:
          "A simple and elegant Node.js & Express web app that fetches and displays real-time weather information for any city using the OpenWeatherMap API.",
        techStack: "Express.js Node.js",
        link: "https://github.com/shafaq0410/weather-app",
        open: ""
      },
      "Real Time Chat App": {
        desc:
          "A sleek and snappy realtime chat app built with Next.js, Express, and Pusher, featuring emoji-based sentiment analysis in every message! ",
        techStack: "Javascript , next.js , Express.js ,Pusher",
        link: "https://github.com/shafaq0410/realtime-chat-app",
        open: ""
      },
      "coffee_pref_app": {
        desc:
          "A warm cup of Flutter practice — layouts, widgets, and coffee preferences made simple.",
        techStack: "C++ , Dart , Swift , HTML, Cmake",
        link: "https://github.com/shafaq0410/coffee_pref_app",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
