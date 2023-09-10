/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../pages/style.css";



function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="d-flex justify-content-between">
          {props.demoLink && (
            <Button className="viewbtn" variant="primary" href={props.demoLink} target="_blank">
              Demo
            </Button>
          )}
          {props.ghLink && (
            <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank">
              GitHub
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;