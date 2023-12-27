import { FC } from 'react';
import { AboutWrapper } from './about.styled';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileWord } from '@fortawesome/free-regular-svg-icons';

interface AboutProps { }

const About: FC<AboutProps> = () => (
   <AboutWrapper>
      <div className="container pt-3">
         <p className="d-flex justify-content-end">
            <a href="https://www.linkedin.com/in/cmclellen/" target="_blank" rel="noreferrer">
               <FontAwesomeIcon size="2xl" icon={faLinkedin} title="LinkedIn" />
            </a>
            <a className="ps-2" href="https://docs.google.com/document/d/0BwRF9_HwsNHNUW9ZcWNJb1p3LTlDck1MeWx3WXJrVC1lN2VF/edit?usp=sharing&ouid=104807125876702347246&resourcekey=0-7eD83yMf26Hpbxo8JWND5Q&rtpof=true&sd=true" target="_blank" rel="noreferrer">
               <FontAwesomeIcon size="2xl" icon={faFileWord} title="Resume" />
            </a>
         </p>
         <p>
            Passionate full-stack developer with over 20 years experience across multiple industries. Confident in working at all levels with the client (both technical and non-technical) and able to translate complex designs into simpler, more scalable solutions, while ensuring predictable outcomes. I have been involved at all aspects of the SDLC from design, development, testing, build and deployment. I’ve mostly worked in agile environments where either Scrum or Kanban methodologies were used.
         </p>
         <p>
            I've developed backends in C#.NET, NodeJs & Python, but also have a fair amount of experience developing several frontends (mostly Angular web frontends, but have experience working with React too). I have a keen interest in everything microservices (scalability, high availability, long running processes, sagas, etc.), of which I have had a fair amount of experience developing. TDD is something I've engrained in my development process as it gives me piece of mind knowing that any new code being added doesn't break existing functionality.
         </p>
         <p>
            I’ve been involved in several cloud-based projects across both Azure and AWS. I've been involved with development of serverless solutions, migrated large database solutions from on-premises to PaaS services, developed web apps (Angular & React) that were also hosted using PaaS services, etc. Across several projects, I've developed IaC scripts (Terraform & Bicep) to provision various environments across various projects, all following a CICD approach using Azure DevOps pipelines.
         </p>
         <p>
            I'm also keen on DevOps and have worked more recently setting up CICD pipelines in Azure DevOps on several projects, although have experience working with Team City, Jenkins, and Bamboo too.
         </p>
      </div>
   </AboutWrapper>
);

export default About;
