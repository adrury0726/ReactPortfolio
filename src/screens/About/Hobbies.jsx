import React, { useContext, useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Carousel from "react-material-ui-carousel";
import "../../App.css";
import CodingImage from "../../images/Code.jpg";
import WoWImage from "../../images/WoW.jpg";
import AsyaAndIImage from "../../images/AsyaAndI.jpg";
import FamilyImage from "../../images/Family.jpg";
import OliviaAndAsya from "../../images/FamPhoto.jpg";
import DogsImage from "../../images/Dogs.jpg";
import MckennaVideo from "../../images/Mckenna.MOV";
import Josiah from "../../images/Josiah.jpg";
import Friends from "../../images/Friends.jpg";
import FamilyPhoto from "../../images/FamilyPhoto.jpg";
import FamilyPhoto2 from "../../images/FamPhoto2.jpg";
import Thumbnail from "../../images/MckennaThumbnail.jpg";
import { ThemeContext } from "../HomePage/BackgroundThemes/ThemeContext";

const Hobbies = () => {
  const { theme } = useContext(ThemeContext);

  const imageStyle = {
    width: "100%",
    height: "auto",
    maxHeight: "300px",
    objectFit: "contain",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const videoStyle = {
    width: "100%",
    maxWidth: "300px",
    height: "auto",
    marginTop: "16px",
  };

  const [videoSrc, setVideoSrc] = useState("");

  //We'll add lazy loading here, as we don't need it to load IMMEDIATELY upon the website loading. This optimizes performance.
  useEffect(() => {
    // Lazy load the video source after the component has mounted
    const timer = setTimeout(() => {
      setVideoSrc(MckennaVideo);
    }, 1000); // Optional delay to mimic lazy loading

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  const items = [
    { src: Josiah, alt: "Josiah" },
    { src: Friends, alt: "Friends" },
    { src: FamilyPhoto, alt: "Family Photo" },
    { src: FamilyPhoto2, alt: "Family Photo 2" },
    { src: FamilyImage, alt: "Family" },
    { src: OliviaAndAsya, alt: "Olivia and Asya" },
  ];

  return (
    <Accordion className="accordion-custom accordion-hobbies">
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
          Hobbies
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          "@media (max-width: 600px)": {
            marginTop: "30px",
          },
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{ fontSize: "1.75rem", marginBottom: "1rem" }}
            >
              Coding ⌨️
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.25rem" }}>
              While I do love coding at work, I also really enjoy learning on my
              own after hours. There's SO much to learn in tech, and I like to
              stay up-to-date and practice my skills with other languages that I
              don't use every day at work.
              <br /> <br />
              The main thing that I think I enjoy the most though, is that it
              makes me really think at all hours of the day. I get to work in a
              field where I'm constantly thinking about how things currently
              work, and how I can make them better. This keeps me from ever
              getting bored and allows me to really love what I do.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={containerStyle}>
            <img src={CodingImage} alt="Coding" style={imageStyle} />
            <Grid item xs={12}>
              <Divider sx={{ my: 8 }} />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{ fontSize: "1.75rem", marginBottom: "1rem" }}
            >
              Gaming 🎮
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.25rem" }}>
              I'm HUGE on playing video games in my free time. It's one of my
              favorite things to do. After a long day of work where I feel like
              my brain is just completely fried, I love to play World of
              Warcraft.
              <br /> <br />
              I've played this game since I was only 9 years old. 19 years later
              and I'm still here playing it. And in case you were wondering, yes
              I do have a problem, as I spend way more time on this game than
              any adult should lol.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={containerStyle}>
            <img src={WoWImage} alt="Gaming" style={imageStyle} />
            <Grid item xs={12}>
              <Divider sx={{ my: 8 }} />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{ fontSize: "1.75rem", marginBottom: "1rem" }}
            >
              Movies/TV 🍿👫
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.25rem" }}>
              My wife (Asya) and I love to watch movies and TV shows together.
              We tend to find great binge-worthy shows, whether it's The Office,
              That 70's Show, or Reacher, we trap ourselves on the weekends and
              will spend hours watching our favorite shows together. It's a
              dangerous pit to fall into, as we have occasionally spent full
              days just watching these shows!
              <br /> <br />
              We also really enjoy watching movies together, as we have a
              Cinemark membership and enjoy going to the movie theater together
              when we can. It's a great time for us to enjoy each other's
              company and burn off some steam after a long week of work.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={containerStyle}>
            <img src={AsyaAndIImage} alt="TV" style={imageStyle} />
            <Grid item xs={12}>
              <Divider sx={{ my: 12 }} />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{ fontSize: "1.75rem", marginBottom: "1rem" }}
            >
              Spend time with Family/Friends👪
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.25rem" }}>
              Asya and I live in Greeley, CO, but we have lots of family in
              Aurora, CO. Aurora is about an hour away from us and we love to go
              down and see our families once or twice a month. We are both very
              family-oriented people and enjoy catching up with everyone. To me,
              family is everything. And since family is so important to us, we
              decided to also start our own. We welcomed our baby girl{" "}
              <span style={{ color: "pink", fontSize: "1.7rem" }}>Olivia </span>
              into the world on June 29th, 2024. We love every second we get to
              spend with our baby girl!
              <br /> <br />
              We also enjoy hanging out with our friends up here in Greeley
              whenever we can! Typically, we'll go out to dinner, go hiking, or
              just have people over at our house and play board games together.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={containerStyle}>
            <Carousel
              className="carousel-container"
              autoPlay
              animation="slide"
              indicators={true}
              navButtonsAlwaysVisible={true}
            >
              {items.map((item, index) => (
                <div key={index}>
                  <img src={item.src} alt={item.alt} style={imageStyle} />
                </div>
              ))}
            </Carousel>
            <Grid item xs={12}>
              <Divider sx={{ my: 8 }} />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{ fontSize: "1.75rem", marginBottom: "1rem" }}
            >
              Playing with Dogs🐕‍🦺
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.25rem" }}>
              My wife and I have a Black Lab/Pitbull mix named Twyla, as well as
              an American Pitbull Terrier named Mckenna. We got Twyla from a
              rescue in Loveland, CO when she was only 2, and we got Mckenna
              from a rescue in Castle Rock, CO when she was only 5 months old.
              <br /> <br />
              They're both super sweet and playful dogs who love people and
              other dogs. Mckenna loves attention and is SUPER energetic. We
              like to take them to places like the dog park or just go for walks
              in our neighborhood. Our neighbors and their dogs also enjoy
              playing with them very often.
              <br /> <br />
              As you can see to the right, Mckenna has TONS of energy.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} style={containerStyle}>
            <img src={DogsImage} alt="Dogs" style={imageStyle} />
            <video width="100%" controls style={videoStyle} poster={Thumbnail}>
              {videoSrc && <source src={videoSrc} type="video/mp4" />}
              Your browser does not support the video tag.
            </video>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default Hobbies;
