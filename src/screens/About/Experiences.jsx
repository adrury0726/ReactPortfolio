import React, { useContext } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../App.css";
import PriceDigest from "../../images/PriceDigest.png";
import PawneeLogo from "../../images/PawneeLogo.png";
import ExperienceSection from "./Experiences/ExperienceSection";
import ApprovedGif from "../../images/Approved.webp";
import { ThemeContext } from "../HomePage/BackgroundThemes/ThemeContext";

const Experiences = () => {
  const pawneeDuties = [
    "Spearhead the creation and refinement of features on our websites, ensuring optimal functionality and an enhanced user experience.",
    "Proficiently write robust and scalable code, leveraging a diverse set of technologies such as SQL Server, JavaScript, React, HTML/CSS, Node.js, Spring Boot, C#, and Java.",
    "Engage in collaborative discussions with in-house managers, contributing insights to conceptualize and implement new features while enhancing existing functionalities.",
    "Conduct in-depth troubleshooting and debugging of intricate code to maintain the integrity and efficiency of the software.",
    "Demonstrate versatility by seamlessly alternating between independent tasks and collaborative efforts within a dynamic team of five developers.",
    "Provide valuable assistance to fellow developers, offering expertise in troubleshooting code issues and actively contributing to the creation of innovative solutions.",
  ];

  const priceDigestAPI = [
    "Orchestrated and executed a comprehensive API integration initiative utilizing Get Requests to acquire essential data, employing C# within the Visual Studio environment.",
    "Designed and implemented data storage strategies, constructing tailored tables within SQL Server to systematically store the retrieved information.",
    "Engineered a user-facing web page on our company website, seamlessly integrating SQL and JavaScript to present relevant data in a user-friendly format.",
    "Implemented version control through Git/GitHub, facilitating seamless collaboration and ensuring code integrity across both my local repository and Pawnee's central repository.",
    "Conducted regular sessions with Vice Presidents and Managers throughout the project lifecycle, delivering live demonstrations and adapting requirements to surpass expectations and align with organizational objectives.",
  ];

  const autoDecision = [
    "Developed multiple SQL Server stored procedures to validate and compare database data with predefined parameters for approving or declining new applications.",
    "Collaborated with department Vice Presidents and the CEO to determine the operational requirements and functionality of the new system.",
    "Utilized a combination of C#, JavaScript, and SQL Server to ensure accurate data storage and an appealing front-end presentation.",
    "Enhanced the Broker API to support the new system functionality, including the addition of debugging code for improved performance.",
    "Conducted extensive testing to verify the functionality and reliability of the new system features.",
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
          Experiences at Pawnee Leasing Corporation
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="experience-section experience-section-first">
          <ExperienceSection
            title="Software Engineer"
            description="At Pawnee Leasing Corporation, it was my job to Collaborate with cross-functional teams, including managers and 
                       representatives, in order to conceptualize, design, and implement cutting-edge tools aimed at enhancing the user 
                       experience for both clients and in-house personnel. Responsibilities encompass the refinement and upkeep of existing 
                       features, coupled with the proactive development of novel functionalities to optimize our web platforms. This role 
                       involves intricate problem-solving, extensive code debugging, and a commitment to delivering high-quality software 
                       solutions."
            duties={pawneeDuties}
            image={PawneeLogo}
          />
        </div>
        <div className="experience-section">
          <ExperienceSection
            title="Price Digest API Integration"
            description="The purpose of this project was to integrate Price Digest into my company's website, which is Pawee Leasing Corporation. 
                       This was done by writing code in C# in order to do the API calls. In this project, I established a database connection, 
                       creating error logging, and would pull the data from the API calls and store them into our SQL Server tables. From there, 
                       I'd take the data and create numerous stored procedures that were being used in order to insert, update, and select the 
                       data for display."
            duties={priceDigestAPI}
            image={PriceDigest}
          />
        </div>
        <ExperienceSection
          title="Auto Decisioning"
          description="I completed this project at Pawnee Leasing Corporation. As a leasing company, when an application is submitted by a 
                       broker/customer, we do a credit pull and get both a Paynet and Equifax report on the customer and their company they 
                       are needing a lease for. We then decide if this deal is going to be beneficial to the company, or is it going to come 
                       with too much risk? There are times where the applications that are submitted by customers are either way too risky, or 
                       they are perfect submissions and we want to just expedite the process. That's where my new implementation comes in to play.
                       I built a new functionality that would check the deal when it comes in and either Auto-Decline the deal if it's terrible, 
                       or Auto-Approve the deal if it's excellent. This saves time for our credit analysts and allows for us to expedite the 
                       application for our customer. It also introduced our company's first fully automated process, which will benefit both 
                       our customers, as well as our company so that our analysts can focus on approving/declining deals that require more 
                       attention.
                        "
          duties={autoDecision}
          image={ApprovedGif}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default Experiences;
