import React, { useState } from 'react';
import ProjectCard from '../components/Projectcard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import adminpanel from '/src/Assets/images/adminpanel.jpg';
import olximage from '/src/Assets/images/olximage.jpg';
import gfil from '/src/Assets/images/gfil.png';
import gridlinesbuilders from '/src/Assets/images/Gridlinesbuilders.jpg';
import friendzone from '/src/Assets/images/friendzone.png';
import todolist from '/src/Assets/images/todolist.jpg';
import '../pages/style.css';

const projectsData = [
  {
    imgPath: adminpanel,
    isBlog: false,
    title: 'Dashboard Panel',
    description:
      'User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration.',
    ghLink: 'https://rahul-dashboard-pannel.netlify.app',
    tags: ['React', 'Frontend', 'TMDB API'],
    task: 'Dashboard',
  },
  {
    imgPath: olximage,
    isBlog: false,
    title: 'Olx-Clone',
    description:
      'Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks.',
    ghLink: 'https://olx-clone-rahul.netlify.app/',
    demoLink: 'https://olx-clone-rahul.netlify.app/',
    tags: ['React', 'Frontend', 'TMDB API'],
    task: 'Data Analysis',
  },
  {
    imgPath: gfil,
    isBlog: false,
    title: 'Netflix-Clone',
    description:
      'This project is a simplified front-end clone of Netflix. It was created with React js. It uses TMDB (The Movie Data Base) API and uses the Axios tool. Users can click movie images with embedded YouTube trailers or related videos about the movie.',
    ghLink: 'https://react-netflixweb-clone.netlify.app/',
    tags: ['React', 'Frontend', 'TMDB API'],
    task: 'Data Science',
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
              <Button onClick={() => setSelectedTask(null)}>All</Button>
              <Button onClick={() => setSelectedTask('Dashboard')}>Dashboard</Button>
              <Button onClick={() => setSelectedTask('Data Analysis')}>Data Analysis</Button>
              <Button onClick={() => setSelectedTask('Data Science')}>Data Science</Button>
              <Button onClick={() => setSelectedTask('Frontend')}>Frontend</Button>
              <Button onClick={() => setSelectedTask('Backend')}>Backend</Button>
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