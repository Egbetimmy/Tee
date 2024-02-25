/* eslint-disable react/prop-types */
import { useState } from 'react'; // Import useState
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'; // Import Badge component
import '../pages/style.css';

function ProjectCard(props) {
  const [hovered, setHovered] = useState(false); // State to track hover

  return (
    <Card
      className={`project-card-view ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)} // Set hovered to true on mouse enter
      onMouseLeave={() => setHovered(false)} // Set hovered to false on mouse leave
    >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Title style={{ textAlign: 'center' }}>{props.title}</Card.Title>
      <div className={`project-description ${hovered ? 'show' : 'hide'}`}>
        {/* Show description when hovered */}
        <Card.Body>
          <Card.Text style={{ textAlign: 'justify' }}>
            {props.description}
          </Card.Text>
        </Card.Body>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }} className="button-container">
        {props.demoLink && (
          <Button
            className="viewbtn"
            variant="primary"
            href={props.demoLink}
            target="_blank"
          >
            Demo
          </Button>
        )}
        {props.ghLink && (
          <Button
            className="viewbtn"
            variant="primary"
            href={props.ghLink}
            target="_blank"
          >
            GitHub
          </Button>
        )}
        {props.view && (
          <Button
            className="viewbtn"
            variant="primary"
            href={props.view}
            target="_blank"
          >
            View
          </Button>
        )}
      </div>

      {/* Display tags in the footer */}
      {props.tags && (
      <div className="tags text-center mb-3">
        {props.tags.map((tag, index) => (
          <span
            key={index}
            className="tag"
            style={{ 
              marginRight: '2px', 
              marginBottom: '5px', 
              backgroundColor: 'transparent', 
              padding: '3px 5px', 
              borderRadius: '0px' 
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    )}
    </Card>
  );
}

export default ProjectCard;
