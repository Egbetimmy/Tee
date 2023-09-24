import React, { useState } from 'react';
import ProjectCard from '../components/Projectcard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import grocerystore from '/src/Assets/images/grocery-store.jpg';
import olximage from '/src/Assets/images/olximage.jpg';
import gfil from '../Assets/images/gfil.jpg';
import gridlinesbuilders from '/src/Assets/images/Gridlinesbuilders.jpg';
import friendzone from '/src/Assets/images/friendzone.png';
import todolist from '/src/Assets/images/todolist.jpg';
import '../pages/style.css';

const projectsData = [
  {
    imgPath: grocerystore,
    isBlog: false,
    title: 'Grocery Store',
    description:
      "This web project is a grocery store management system with three main screens: the 'Order View' where customers can place orders for products, the 'Product Display' screen to showcase available products, and a 'Manager Dashboard' for updating and adding products to the store's inventory. This system utilizes Python Flask for server-side functionality, MySQL for database management, and basic HTML, CSS, and JavaScript for the user interface. Customers can conveniently order products, specifying quantities in kilograms or individual units, making it a seamless and efficient solution for managing grocery store operations.",
    ghLink: 'https://github.com/Egbetimmy/Grocery-store-app.git',
    demoLink: 'https://grocery-store-app.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Flask'],
    task: 'Web Development',
  },
  {
    imgPath: olximage,
    isBlog: false,
    title: 'Olx-Clone',
    description:
      'Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks.',
    ghLink: 'https://olx-clone-rahul.netlify.app/',
    demoLink: 'https://grocery-store-app.vercel.app/',
    tags: ['React', 'Frontend', 'TMDB API'],
    task: 'Data Analysis',
  },
  {
    imgPath: gfil,
    isBlog: false,
    title: 'Great Field Industry',
    description:
      "This is a web project i worked on while still an Intern at FriendZone, it serves as a comprehensive portfolio site for an oil and gas servicing company, featuring several key sections: a dynamic homepage that introduces the company, an 'About Us' page providing detailed information about the organization, a 'Services' page outlining the range of services offered, a 'Blog' section for updates, announcements, and industry insights, a 'Going Green' page showcasing the company's sustainability efforts, and a 'Contact Us' page for easy communication. The site serves as a valuable resource to highlight the company's achievements, certifications, and its physical location, offering visitors a comprehensive overview of the company's expertise and values.",
    demoLink: 'http://greatfieldindustriesltd.com/gfil/index.html',
    tags: ['HTML', 'CSS', 'JavaScript'],
    task: 'Web Development',
  },
  {
    imgPath: gridlinesbuilders,
    isBlog: false,
    title: 'Grid Line Builders',
    description:
      'Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices.',
    ghLink: 'https://gridlinesbuilders.in/',
    tags: ['React', 'Frontend', 'TMDB API'],
    task: 'Frontend',
  },
  {
    imgPath: friendzone,
    isBlog: false,
    title: 'Charlestown Pizza',
    description: 'Charlestown pizza is a static website completely build with bootstrap with fully responsive.',
    ghLink: 'https://rahulvijay81.github.io/Pizzastore-bootstrap/',
    tags: ['React', 'Frontend', 'TMDB API'],
    task: 'Backend',
  },
  {
    imgPath: todolist,
    isBlog: false,
    title: 'To Do List',
    description: 'To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done.',
    ghLink: 'https://todolist-rahul81.netlify.app/',
    tags: ['React', 'Frontend', 'TMDB API'],
    task: 'Backend',
  },
  // Add other project data here...
];

function Projectlist() {
  const [selectedTask, setSelectedTask] = useState(null);

  // Filter projects based on selected task
  const filteredProjects = projectsData.filter((project) => !selectedTask || project.task === selectedTask);

  return (
    <div className="projectbackground" style={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
            <div className="task-buttons" style={{ justifyContent: 'center', paddingBottom: '10px' }}>
              <Button onClick={() => setSelectedTask(null)} style={{ marginRight: '10px' }}>All</Button>
              <Button onClick={() => setSelectedTask('Dashboard')} style={{ marginRight: '10px' }}>Dashboard</Button>
              <Button onClick={() => setSelectedTask('Data Analysis')} style={{ marginRight: '10px' }}>Data Analysis</Button>
              <Button onClick={() => setSelectedTask('Data Science')} style={{ marginRight: '10px' }}>Data Science</Button>
              <Button onClick={() => setSelectedTask('Frontend')} style={{ marginRight: '10px' }}>Frontend</Button>
              <Button onClick={() => setSelectedTask('Backend')} style={{ marginRight: '10px' }}>Backend</Button>
              {/* Add buttons for other tasks as needed */}
            </div>
          </Row>
          <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
            {filteredProjects.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={project.isBlog}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                  tags={project.tags}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projectlist;