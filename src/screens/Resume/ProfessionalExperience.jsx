import React, { useContext } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { ThemeContext } from "../HomePage/BackgroundThemes/ThemeContext";

const experiences = [
  {
    title: "Pawnee Leasing Corporation Software Engineer",
    date: "March of 2022—Present",
    description: `
      Collaborate with cross-functional teams, including managers and representatives, to
      conceptualize, design, and implement cutting-edge tools aimed at enhancing the user
      experience for both clients and in-house personnel. Responsibilities encompass the refinement
      and upkeep of existing features, coupled with the proactive development of novel functionalities
      to optimize our web platforms. This role involves intricate problem-solving, extensive code
      debugging, and a commitment to delivering high-quality software solutions.
    `,
    tasksTitle: "Tasks/Skills used at Pawnee Leasing Corporation",
    tasks: [
      "Spearheaded the creation and refinement of features on our websites, ensuring optimal functionality and an enhanced user experience.",
      "Proficiently wrote robust and scalable code, leveraging a diverse set of technologies such as SQL Server, JavaScript, React, HTML/CSS, Node.js, Spring Boot, C#, and Java.",
      "Engaged in collaborative discussions with in-house managers, contributing insights to conceptualize and implement new features while enhancing existing functionalities.",
      "Conducted in-depth troubleshooting and debugging of intricate code to maintain the integrity and efficiency of the software.",
      "Demonstrated versatility by seamlessly alternating between independent tasks and collaborative efforts within a dynamic team of five developers.",
      "Provided valuable assistance to fellow developers, offering expertise in troubleshooting code issues and actively contributing to the creation of innovative solutions.",
    ],
  },
  {
    title: "Price Digest API Integration",
    date: "April-July of 2023",
    description: `
      Led the integration of the Price Digest API to enable seamless access to asset price estimates within our internal network. 
      Price Digest, akin to Kelly Blue Book, provides real-time estimates based on parameters such as year, mileage, make, and model. 
      This project enhanced efficiency by allowing credit analysts to access data directly, eliminating the need for external websites, 
      and expediting the application process for brokers.
    `,
    tasks: [
      "Spearheaded the API integration project, utilizing C# and Visual Studio to fetch essential data via Get Requests.",
      "Designed and implemented SQL Server-based data storage solutions to systematically organize retrieved information.",
      "Developed a user-friendly web interface integrating SQL and JavaScript to present data clearly and efficiently.",
      "Managed version control with Git/GitHub, ensuring smooth collaboration and maintaining code integrity across repositories.",
      "Conducted comprehensive training sessions with executives and managers, demonstrating the integration's functionality and adapting to feedback to meet organizational objectives.",
    ],
  },
  {
    title: "Auto Decisioning System",
    date: "March-June 2024",
    description: `
      Developed and implemented an Auto Decisioning System to automate the loan approval process, significantly enhancing efficiency and accuracy. 
      This system evaluates loan applications based on predefined criteria, ensuring consistent and objective decision-making while reducing manual review times.
    `,
    tasks: [
      "Architected and developed the Auto Decisioning System using advanced algorithms to automate the loan approval process.",
      "Integrated the system with existing databases and external data sources to ensure comprehensive evaluation of loan applications.",
      "Designed intuitive user interfaces to allow credit analysts to review and override decisions when necessary.",
      "Conducted extensive testing and validation to ensure the system's accuracy and reliability.",
      "Provided training and support to end-users, ensuring smooth adoption and effective utilization of the new system.",
    ],
  },
];

const ProfessionalExperience = () => {
  const { theme } = useContext(ThemeContext);

  const cardBackgroundColor =
    theme === "light"
      ? "rgba(255, 255, 255, 0.5)"
      : theme === "dark"
      ? "#2d2d37"
      : "#1e1e1e";
  const textColor = theme === "light" ? "black" : "white";
  const iconColor =
    theme === "light" ? "#007bff" : theme === "dark" ? "#FFD700" : "#ff4081";
  const titleColor = theme === "light" ? "black" : "#ff4081";

  return (
    <Box sx={{ color: textColor, padding: "50px" }}>
      <Typography
        className="header"
        gutterBottom
        sx={{ textAlign: "center", fontSize: "50px", fontWeight: "bold" }}
      >
        Professional Experience
      </Typography>
      <Grid container spacing={4}>
        {experiences.map((exp, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                backgroundColor: cardBackgroundColor,
                color: textColor,
                fontWeight: "bold",
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <WorkIcon sx={{ marginRight: 2, color: iconColor }} />
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: titleColor }}
                  >
                    {exp.title}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
                  {exp.date}
                </Typography>
                {exp.description && (
                  <Typography variant="body1" sx={{ marginBottom: 2 }}>
                    {exp.description}
                  </Typography>
                )}
                {exp.tasksTitle && (
                  <Typography
                    variant="h6"
                    sx={{ marginBottom: 2, color: titleColor }}
                  >
                    {exp.tasksTitle}
                  </Typography>
                )}
                <Divider sx={{ marginBottom: 2 }} />
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  {exp.tasks.map((task, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: 1,
                      }}
                    >
                      <CheckCircleOutlineIcon
                        sx={{ marginRight: 1, color: iconColor }}
                      />
                      <Typography variant="body1">{task}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProfessionalExperience;
