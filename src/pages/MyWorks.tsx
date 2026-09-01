import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { config } from "../config";
import "./MyWorks.css";

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects, systems, and creations</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => {
          const techList = project.technologies ? project.technologies.split(",").map(t => t.trim()) : [];
          return (
            <div className="myworks-card" key={project.id}>
              <div className="myworks-card-top">
                <div className="myworks-card-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="myworks-card-number">0{index + 1}</div>
              </div>
              <div className="myworks-card-info">
                <h3>{project.title}</h3>
                <p className="myworks-card-category">{project.category}</p>
                <p className="myworks-card-description">{project.description}</p>
                
                <div className="myworks-tags-container">
                  {techList.map((t, idx) => (
                    <span key={idx} className="myworks-tech-tag">{t}</span>
                  ))}
                </div>
                
                <div className="myworks-card-links">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="myworks-link-btn live-btn"
                      data-cursor="disable"
                    >
                      Live Demo <MdArrowOutward />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="myworks-link-btn github-btn"
                      data-cursor="disable"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;
