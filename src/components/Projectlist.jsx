import React, { useState } from 'react';
import ProjectCard from '../components/Projectcard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import grocerystore from '/src/Assets/images/grocery-store.jpg';
import planner from '/src/Assets/images/planner-app.jpg';
import gfil from '../Assets/images/gfil.jpg';
import gridlinesbuilders from '/src/Assets/images/Gridlinesbuilders.jpg';
import friendzone from '/src/Assets/images/friendzone.png';
import customer from '/src/Assets/images/customer.jpg';
import spill from '/src/Assets/images/Ogoni-Oil-Spill.jpg';
import shortfall from '/src/Assets/images/shortfall.jpg';
import deliveryapp from '/src/Assets/images/Delivery-App.jpg';
import clean from '/src/Assets/images/clean.jpg';
import recommendation from '/src/Assets/images/recommendation.png';
import loan from '/src/Assets/images/loan.jpg';
import lang from '/src/Assets/images/lang.jpg';
import weatherprediction from '/src/Assets/images/weather_and_prediction.png';
import clockin from '/src/Assets/images/time-clock.png';
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
    tags: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Python'],
    task: 'Backend',
  },

  {
    imgPath: loan,
    isBlog: false,
    title: 'Loan Api',
    description:
      '',
    ghLink: 'https://github.com/jeckdix/loanApi',
    tags: ['C#'],
    task: 'Backend',
  },
  
  {
    imgPath: planner,
    isBlog: false,
    title: 'Planner App',
    description:
      'Your planner app is a versatile tool built with React, designed to help users efficiently plan their day. It offers a range of widgets, including a calendar for scheduling, reminders for important tasks, a stopwatch for time management, and a weather widget to stay informed about current conditions. This app simplifies daily planning and organization, providing users with a user-friendly interface to set plans and reminders, making it a valuable addition to their productivity toolbox.',
    ghLink: 'https://github.com/Egbetimmy/planner-app.git',
    demoLink: 'https://tee-planner-app.web.app',
    tags: ['React'],
    task: 'FrontEnd',
  },

  {
    imgPath: gfil,
    isBlog: false,
    title: 'Great Field Industry',
    description:
      "This is a web project i worked on while still an Intern at FriendZone, it serves as a comprehensive portfolio site for an oil and gas servicing company, featuring several key sections: a dynamic homepage that introduces the company, an 'About Us' page providing detailed information about the organization, a 'Services' page outlining the range of services offered, a 'Blog' section for updates, announcements, and industry insights, a 'Going Green' page showcasing the company's sustainability efforts, and a 'Contact Us' page for easy communication. The site serves as a valuable resource to highlight the company's achievements, certifications, and its physical location, offering visitors a comprehensive overview of the company's expertise and values.",
    demoLink: 'http://greatfieldindustriesltd.com/gfil/index.html',
    tags: ['HTML', 'CSS', 'JavaScript'],
    task: 'FrontEnd',
  },

  {
    imgPath: gridlinesbuilders,
    isBlog: false,
    title: 'Eventsng',
    description:
      'This platform serves as an event booking site, providing event planners with the opportunity to showcase their events. Prospective attendees can easily browse, discover, and book events online through this user-friendly platform.',
    demoLink: 'https://eventsng.net/',
    tags: ['HTML', 'CSS', 'PHP'],
    task: 'FrontEnd',
  },

  {
    imgPath: friendzone,
    isBlog: false,
    title: 'FriendZone',
    description: 'Friendzone is a Social Networking Platform. With our new feature, user can posts, photos, forums and earn while been active.',
    demoLink: 'https://friendzone.com.ng/welcome',
    tags: ['React', 'PHP'],
    task: 'Backend',
  },

  {
    imgPath: spill,
    isBlog: false,
    title: 'Data Analysis with Python',
    description: '',
    view: 'https://medium.com/@egbetiimmy/exploratory-data-analysis-of-niger-delta-spill-data-673524a57955',
    tags: ['Python'],
    task: 'Data Analysis',
  },
  
  {
    imgPath: customer,
    isBlog: false,
    title: 'Customer Analysis',
    description: '',
    view: 'https://public.tableau.com/app/profile/egbe.timmy/viz/CustomerAnalysis_16675062924670/Dashboard1#1',
    tags: ['Tableau'],
    task: 'Data Analysis',
  },
  
  {
    imgPath: clean,
    isBlog: false,
    title: 'Data cleaning with Python',
    description: '',
    view: 'https://link.medium.com/zLln2XkwNub',
    tags: ['Python'],
    task: 'Data Analysis',
  },
  
  {
    imgPath: recommendation,
    isBlog: false,
    title: 'Movie Recommendation System',
    description: 'The primary goal of this task within the Unsupervised Predict is to be aware of (and ultimately competent in handling) the complexities associated with deploying recommender algorithms in a live environment. These algorithms are resource heavy - requiring high amounts of memory and processing power when associated with larger data sources. As such, we\'ll need to research and determine the modifications required to deploy this app so that it produces appropriate recommendations with as little latency as possible.',
    ghLink: 'https://github.com/Egbetimmy/UNSUPERVISED-PREDICT-STREAMLIT-2301AC_ES3-TeamSMART',
    tags: ['Python'],
    task: 'Data Science',
  },
  
  {
    imgPath: clockin,
    isBlog: false,
    title: 'Clocl-In System',
    description: '',
    ghLink: 'https://github.com/Egbetimmy/clock-in-system',
    tags: ['NodeJS'],
    task: 'Backend',
  },

  {
    imgPath: weatherprediction,
    isBlog: false,
    title: 'Weather Prediction',
    description: '',
    ghLink: 'https://github.com/EddyEjembi/Weather-Prediction-Project',
    demoLink: 'https://weather-prediction.streamlit.app',
    tags: ['Python'],
    task: 'Data Science',
  },

  {
    imgPath: shortfall,
    isBlog: false,
    title: 'Spain Electricity Shortfall',
    description: 'In this project we were tasked to model the shortfall between the energy generated by means of fossil fuels and various renewable sources - for the country of Spain. The daily shortfall, which is referred to as the target variable, was modelled as a function of various city-specific weather features such as pressure, wind speed, humidity, etc. As with all data science projects, the provided features are rarely adequate predictors of the target variable. As such, We were required to perform feature engineering to ensure that we will be able to accurately model Spain\'s three hourly shortfalls.',
    ghLink: 'https://github.com/Egbetimmy/RR14-Advanced-Regression',
    tags: ['Python'],
    task: 'Data Science',
  },

  {
    imgPath: deliveryapp,
    isBlog: false,
    title: 'Delivery App',
    description: '',
    ghLink: 'https://github.com/Patutechz/delivery-app/tree/main/api',
    tags: ['NodeJS'],
    task: 'Backend',
  },

  {
    imgPath: lang,
    isBlog: false,
    title: 'Language Detector',
    description: '',
    ghLink: 'https://github.com/Patutechz/delivery-app/tree/main/api',
    tags: ['Python'],
    task: 'Data Science',
  },
  // Add other project data here
];

function Projectlist() {
  const [selectedTask, setSelectedTask] = useState(null);

  // Filter projects based on selected task
  const filteredProjects = projectsData.filter((project) => !selectedTask || project.task === selectedTask);

  return (
    
    <div className="projectbackground" style={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <Container fluid className="project-section">
        <Container>
          <Row style={{ paddingBottom: '10px' }}>
            <div className="task-buttons" style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: '10px', marginTop: '40px' }}>
              <Button onClick={() => setSelectedTask(null)} className="resumebtn" style={{ marginRight: '10px' }}>All</Button>
              <Button onClick={() => setSelectedTask('FrontEnd')} className="resumebtn" style={{ marginRight: '10px' }}>FrontEnd</Button>
              <Button onClick={() => setSelectedTask('Data Analysis')} className="resumebtn" style={{ marginRight: '10px' }}>Data Analysis</Button>
              <Button onClick={() => setSelectedTask('Data Science')} className="resumebtn" style={{ marginRight: '10px' }}>Data Science</Button>
              <Button onClick={() => setSelectedTask('Backend')} className="resumebtn" style={{ marginRight: '10px' }}>Backend</Button>
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
                  view={project.view}
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