import React, { useContext } from "react";
import { Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { ThemeContext } from "../HomePage/BackgroundThemes/ThemeContext";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const specialMessage =
    "Due to company policies, I am unable to share my work on this project.";
  const messageColor = theme === "dark" ? "#FFD700" : "red";
  const styledMessage = `<span style="font-style: italic; text-decoration: underline; color: ${messageColor};">${specialMessage}</span>`;

  const movieLinkColor = theme === "light" ? "green" : "aqua";
  const movieStyleMsg = `<a href="https://www.omdbapi.com" style="text-decoration: underline; color: ${movieLinkColor};" target="_blank"><strong>https://www.omdbapi.com</strong></a>`;

  const projectData = [
    {
      title: "Price Digest API Integration",
      description: `The purpose of this project was to integrate Price Digest into our company's website. This was done by writing code in C# in order to do the API calls. In this project, I established a database connection, creating error logging, and would pull the data from the API calls and store them into our SQL Server tables. From there, I'd take the data and create numerous stored procedures that were being used in order to insert, update, and select the data for display. This also included using HTML/CSS/JavaScript in order to customize the display. ${styledMessage}`,
    },
    {
      title: "Auto Decisioning",
      description: `I built a new functionality that would check the deal when it comes in and either Auto-Decline the deal if it's terrible, 
                       or Auto-Approve the deal if it's excellent. This saves time for our credit analysts and allows for us to expedite the 
                       application for our customer. It also introduced our company's first fully automated process, which will benefit both 
                       our customers, as well as our company so that our analysts can focus on approving/declining deals that require more 
                       attention. ${styledMessage}`,
    },
    {
      title: "Movie Selection API",
      description: `This project was created in order to build a front-end React application where the user could make API calls to a website called ${movieStyleMsg}, which contains a database of movies where you can pull in the movie title, cover, and the length of the movie. These calls are initiated after a user has typed in at least 4 characters in the search bar. I created an application where a user could pull in a movie, give it a rating, and then add it to their list. After more than 1 movie is added, you'll notice that we have an average movie length and star rank is being calculated. We also keep count of the number of movies selected and rated, as well as the movie covers. The user is also able to remove them from their list.`,
      githubLink: "https://github.com/adrury0726/MoviesAPI/tree/master",
      otherLink: "https://aaronsmovieapi.netlify.app/",
    },
    {
      title: "Chat Room",
      description:
        "This was a Python project I decided to build for fun. I built a chatroom where people would be able to enter a chat and do simply that, chat with each other! It allowed for each person that connected to the server to be able to enter the name they wanted to go by, or their nickname. This was developed using a local default IP address and host, which allows for the chat room to only operate on a local computer.",
      githubLink: "https://github.com/adrury0726/Chat_Room",
    },
    {
      title: "Blackjack Simulation",
      description:
        "This was a project I built using Python in order to allow for a user to play blackjack against a dealer. This was one of my favorite simulations to develop, as I love casino games!",
      githubLink: "https://github.com/adrury0726/Blackjack-Game",
    },
    {
      title: "Guessing Game",
      description:
        "Using Python, this is a guessing game that's designed for the user to enter a random number between 1-1000. Whenever a number is entered, it will display for the user to guess higher, lower, or if they guessed the number correctly. The user also has the option to exit the code by typing 0. Otherwise, the code will continue to loop.",
      githubLink: "https://github.com/adrury0726/Guessing-Game",
    },
    {
      title: "Temp Conversion",
      description:
        "This is an application I created using Python in order to do simple temperature conversion with inputs. I did Celsius to Fahrenheit, as well as Fahrenheit to Celsius.",
      githubLink: "https://github.com/adrury0726/Temp_Conversion",
    },
    {
      title: "Mom and Pops Pizza Shop",
      description:
        "This was my final school team project in which we developed a website where customers could order pizza, drinks, and sides. The orders were sent to the shop and delivery was not available with this design. We used the Django Framework and used Python as our primary language. This project also included HTML/CSS/JavaScript.",
      githubLink: "https://github.com/adrury0726/Mom-and-Pops-Pizza-Shop",
    },
    {
      title: "My first Website Resume",
      description:
        "This was my first resume I built showcasing some of my HTML/CSS/JavaScript skills. While my skills have greatly improved, I still like to keep this to showcase where I started vs where I am now.",
      githubLink: "https://adrury0726.github.io/aarondrury.github.io/",
    },
    {
      title: "React Portfolio",
      description:
        "This is the code that I'm using for the website you're looking at right now! I created this project in order to showcase some of my front-end skills using React, as well as create a strong portfolio for recruiters to view.",
      githubLink: "https://github.com/adrury0726/ReactPortfolio/tree/master",
    },
  ];

  return (
    <Container sx={{ padding: "2rem 0" }}>
      <Typography
        variant="h2"
        className="header"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        My Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projectData.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
