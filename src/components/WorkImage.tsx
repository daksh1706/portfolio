import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

interface Props {
  title?: string;
  category?: string;
  description?: string;
  technologies?: string;
  link?: string;
  github?: string;
  image?: string;
  alt?: string;
}

const WorkImage = (props: Props) => {
  const techList = props.technologies ? props.technologies.split(",").map((t) => t.trim()) : [];

  return (
    <div className="work-card-preview">
      <div className="work-card-header">
        <div className="work-card-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <span className="work-card-badge">{props.category}</span>
      </div>
      <div className="work-card-body">
        <p className="work-card-desc">{props.description}</p>
        <div className="work-card-tags">
          {techList.slice(0, 4).map((tech, i) => (
            <span key={i} className="work-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="work-card-actions">
        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card-btn work-btn-demo"
            data-cursor="disable"
          >
            Live Demo <MdArrowOutward />
          </a>
        )}
        {props.github && (
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="work-card-btn work-btn-git"
            data-cursor="disable"
          >
            <FaGithub /> GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkImage;
