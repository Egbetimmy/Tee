import { Container, Row, Col } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../utils/SkillsImage';
import "../pages/style.css";

const workexperience = [
    {
      role: "Data Analyst",
      location: "Warri, Nigeria",
      company: "FriendZone.",
      timeline: { "from": "August 2021", "to": "2022" },
      summary: "• I providing technical expertise in data storage structures, data mining, and data cleansing; \n• Using statistical tools, I identify, analyze, and interpret patterns and trends in complex data. \n• sets that could be helpful for the diagnosis and prediction; \n• I work with programmers and management heads to identify process improvements, opportunities, propose system modifications, and devise data governance strategies; \n• I prepare final analysis reports for the stakeholders to understand the data-analysis steps enabling them to take important decisions based on various facts and trends. \n• I implement visual elements that users see and interact with in a web application.",
    },
    {
      role: "Backend Developer",
      location: "Warri, Nigeria",
      company: "FriendZone.",
      timeline: { "from": "July 2022", "to": "Present" },
      summary: "• Develop and maintain Python-based backend systems for web applications and APIs using Flask and Django frameworks; \n• Collaborate with front-end developers and project managers to identify technical requirements and deliver on-time solutions; \n• Successfully deployed a Kubernetes cluster on AWS for a high-traffic web application, resulting in 99.9% uptime and reducing costs by 25%; \n• Build and maintain databases using PostgreSQL and MySQLto store and retrieve data; \n• Create unit and integration tests using Pytest and Selenium to ensure system stability and performance; \n• Optimize code performance by identifying bottlenecks and implementing efficient algorithms; \n● Developed a RESTful API that reduced the latency of data retrieval by 50% and improved overall system performance",
    },
    
    {
        role: "Backend Developer",
        location: "Lagos, Nigeria",
        company: "FriendZone.",
        timeline: { "from": "July 2022", "to": "Present" },
        summary: "• Develop and maintain Python-based backend systems for web applications and APIs using Flask and Django frameworks; \n• Collaborate with front-end developers and project managers to identify technical requirements and deliver on-time solutions; \n• Successfully deployed a Kubernetes cluster on AWS for a high-traffic web application, resulting in 99.9% uptime and reducing costs by 25%; \n• Build and maintain databases using PostgreSQL and MySQLto store and retrieve data; \n• Create unit and integration tests using Pytest and Selenium to ensure system stability and performance; \n• Optimize code performance by identifying bottlenecks and implementing efficient algorithms; \n● Developed a RESTful API that reduced the latency of data retrieval by 50% and improved overall system performance",
      },
  ];

const Education = [{
    degree: "Full-Stack Developer Nanodegree",
    school: "Udacity, Inc.",
    timeline: { "from": "Aug 2022", "to": "Nov 2022" },
    summary: "This nanodegree course extensively taught various technical skills needed to build database-backed APIs and web applications including:\n\n\t• SQL and Data Modelling for the Web\n\t• API Development and Documentation\n\t• Identity and Access Management\n\t• Server Deployment, Containerization and Testing",
  },
  {
    degree: "Google Data Analytics",
    school: "Coursera",
    timeline: { "from": "Aug 2022", "to": "Oct 2022" },
    summary: "Designed for learners with little to no Data Analytics experience:\n\t•Data Analysis with R.\n\t•Analyze Data using spreadsheets & SQL.\n\t•Apply SQL functions for cleaning and transforming data",
  },
  {
    degree: "AWS Machine Learning Foundations",
    school: "Udacity, Inc.",
    timeline: { "from": "Jun 2022", "to": "Nov 2022" },
    summary: "This nanodegree course  teaches developers of all skill levels machine learning concepts for pursuing a career in ML and provides extensive experience using AWS:\n\n\t• Basic understanding of the machine learning workflow \n\n\t• Basic understanding of linear regression, logistic regression, neural network \n\n\t• Basic understanding of model training and testing processes \n\n\t• Basic knowledge of accuracy, precision, recall, and mean square error (MSE) \n\n\t• SQL and Data Modelling for the Web",
  },
  {
    degree: "B.Sc. in Geophysics",
    school: "Federal University of Petroleum Resources, Effurun, Nigeria.",
    timeline: { "from": "Mar 2014", "to": "Apr 2018" },
    summary: "• Graduated with Second Class Honours",
  },
  {
    degree: "M.Sc. in Exploration Geophysics",
    school: "Federal University of Petroleum Resources, Effurun, Nigeria.",
    timeline: { "from": "Mar 2022", "to": "Apr 2024" },
    summary: "• Graduated with Second Class Honours",
  },
  ];

function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'> As a backend developer with 2+ years of experience, I excel in C# and the .NET framework for web development, 
                        while also possessing a strong background in data science. My skills include gathering, organizing, and analyzing statistical data. 
                        I leverage my technical proficiency to derive meaningful insights and communicate them effectively. This unique blend of backend development 
                        and data science makes me a valuable asset for delivering comprehensive solutions.
                        </p>
                        <div className="skillsContainer">
                            <div className="skill--scroll">
                                <Marquee
                                    gradient={false}
                                    speed={60}
                                    pauseOnClick={true}
                                    delay={0}
                                    play={true}
                                    direction="left"
                                >
                                    {skillsData.map((skill, id) => (
                                        <div className="skill--box" key={id} >
                                            <img className='skill-image' src={skillsImage(skill)} alt={skill} />
                                            <p>{skill}</p>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h6 className='aboutmetext'>Educational <span>History</span></h6>
                        <ul className="education-list">
                            {Education.map((item, index) => (
                                <li key={index} className="education-item">
                                <h6>{item.degree} - <strong>{item.school}</strong></h6>
                                <p><strong>Timeline:</strong> {item.timeline.from} - {item.timeline.to}</p>
                                {/* <p><strong>Summary:</strong></p> 
                                <ul>
                                    {item.summary.split('\n').map((summary, index) => (
                                    <li key={index}>{summary}</li>
                                    ))}
                                </ul>*/}
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage2"></div>
                    </Col>
                </Row>
                <Row className='textbackground'>
                <h6 className='aboutmetext'>Work <span>Experience</span></h6>
                    <Col>
                        <ul className="work-experience-list">
                            {workexperience.map((item, index) => (
                                <li key={index} className="work-experience-item">
                                <h3>{item.role}</h3>
                                <p><strong>{item.company}</strong> - {item.location}</p>
                                <p><strong>Timeline:</strong> {item.timeline.from} - {item.timeline.to}</p>
                                {/* <p><strong>Summary:</strong></p>
                                <ul>
                                    {item.summary.split('\n').map((summary, index) => (
                                    <li key={index}>{summary}</li>
                                    ))}
                                </ul> */}
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage3"></div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Aboutpage