import React, { useContext } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../App.css";
import GoodFitSection from "./JobsGoodFor/GoodFitSection";
import { ThemeContext } from "../HomePage/BackgroundThemes/ThemeContext";

const Experiences = () => {
  const fullStackDeveloperReasons = [
    "Led the design and development of full-stack web applications, ensuring seamless integration of front-end and back-end functionalities.",
    "Utilized a diverse set of technologies including React, Node.js, SQL Server, and C# to build scalable and efficient software solutions.",
    "Collaborated with cross-functional teams to gather requirements, design system architectures, and implement new features.",
    "Performed comprehensive debugging and code reviews to maintain high-quality standards and optimize application performance.",
  ];

  const frontEndDeveloperReasons = [
    "Designed and implemented user-friendly interfaces using HTML/CSS, React, and JavaScript, ensuring a seamless user experience across all devices.",
    "Optimized front-end performance by implementing lazy loading, code splitting, and other best practices.",
    "Integrated front-end components with RESTful APIs, ensuring efficient data retrieval and rendering.",
    "Maintained and improved the existing codebase, introducing modern front-end technologies and practices.",
  ];

  const backEndDeveloperReasons = [
    "Developed and maintained robust server-side applications using Node.js, Java, C#, and SQL Server.",
    "Designed and implemented RESTful APIs to support front-end functionalities and third-party integrations.",
    "Managed database design, including schema creation, stored procedures, and data migrations to ensure data integrity and performance.",
    "Collaborated with DevOps to deploy applications and manage CI/CD pipelines, ensuring smooth and reliable software releases.",
    "Conducted performance testing and optimization to enhance the scalability and responsiveness of back-end services.",
  ];

  const leadDeveloperReasons = [
    "Experience leading projects and collabortating with other devs in order to distribute work loads.",
    "Provided technical leadership and mentorship, fostering a culture of continuous learning and improvement.",
    "Architected and designed scalable solutions, making key decisions on technology stacks, design patterns, and coding standards.",
    "Facilitated communication between developers, stakeholders, and other teams, ensuring clarity and alignment throughout the project lifecycle.",
    "Reviewed and approved code changes, ensuring adherence to best practices and company standards.",
    "Mentored junior developers, providing guidance on best practices in software development and code optimization.",
  ];

  const { theme } = useContext(ThemeContext);

  return (
    <Accordion className="accordion-custom accordion-experiences">
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            style={{ color: theme === "light" ? "#000" : "white" }}
          />
        }
      >
        <Typography
          variant="h4"
          className={theme === "light" ? "light-mode-h4" : ""}
        >
          Seeking Mid-Level Or Senior positions In The Following Areas:
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="experience-section experience-section-first">
          <GoodFitSection
            title="Full Stack Developer"
            goodfit={fullStackDeveloperReasons}
          />
        </div>
        <div className="experience-section">
          <GoodFitSection
            title="Front-End Developer"
            goodfit={frontEndDeveloperReasons}
          />
        </div>
        <div className="experience-section">
          <GoodFitSection
            title="Back-End Developer"
            goodfit={backEndDeveloperReasons}
          />
        </div>
        <div className="experience-section">
          <GoodFitSection
            title="Lead Developer"
            goodfit={leadDeveloperReasons}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Experiences;
