import React from 'react';
import './Projects.css';

const projects = [
    {
        title: "Project One",
        description: "EcoMatch is a tech startup focused on sustainable e-commerce. We serve eco-conscious consumers and businesses by providing a platform that connects users with sustainable, locally sourced products. ",
        link: "https://github.com/abdul-samad820/moviesite.git",
        image: "https://cdn.pixabay.com/photo/2015/01/09/11/11/startup-594127_1280.jpg"
    },
    {
        title: "Project Two",
        description: "Bright Path Tuitions offers high-quality, personalized tutoring in Math, Science, and English for middle and high school students. Our approach emphasizes building strong foundational skills and boosting students' confidence through interactive lessons and regular practice tests. ",
        link: "https://github.com/abdul-samad820/tuitions.git",
        image: "https://www.anamtutors.com/BlogImage/636977700810768344.jpg"
    }
    // Add more projects as needed
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
