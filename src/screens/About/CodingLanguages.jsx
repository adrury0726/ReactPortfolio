import React, { useContext } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../App.css";
import { ReactComponent as ReactLogo } from "../../images/ReactLogo.svg";
import { ReactComponent as NodeLogo } from "../../images/NodejsLogo.svg";
import { ReactComponent as HtmlLogo } from "../../images/HtmlLogo.svg";
import { ReactComponent as CssLogo } from "../../images/CssLogo.svg";
import { ReactComponent as JsLogo } from "../../images/JavascriptLogo.svg";
import { ReactComponent as CSharpLogo } from "../../images/CSharpLogo.svg";
import { ReactComponent as JavaLogo } from "../../images/JavaLogo.svg";
import { ReactComponent as PythonLogo } from "../../images/PythonLogo.svg";
import { ReactComponent as SqlServerLogo } from "../../images/SQLServerLogo.svg";
import { ReactComponent as PostgreSqlLogo } from "../../images/PostgresqlLogo.svg";
import { ThemeContext } from "../HomePage/BackgroundThemes/ThemeContext";

const logos = [
  { label: "React", Icon: ReactLogo },
  { label: "Node.js", Icon: NodeLogo },
  { label: "HTML", Icon: HtmlLogo },
  { label: "CSS", Icon: CssLogo },
  { label: "JavaScript", Icon: JsLogo },
  { label: "C#", Icon: CSharpLogo },
  { label: "Java", Icon: JavaLogo },
  { label: "Python", Icon: PythonLogo },
  { label: "SQL Server", Icon: SqlServerLogo },
  { label: "PostGreSQL", Icon: PostgreSqlLogo },
];

const iconStyle = {
  width: "80px",
  height: "80px",
  margin: "10px",
  padding: "10px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  backgroundColor: "white",
};

const CodingLanguages = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Accordion className="accordion-custom accordion-languages">
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
          Coding Languages
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
            <ul className="large-text" style={{ marginBottom: "30px" }}>
              {logos.map((logo, index) => (
                <li key={index}>{logo.label}</li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container justifyContent="center" alignItems="center">
              {logos.map((logo, index) => (
                <Grid item xs={4} key={index} style={{ textAlign: "center" }}>
                  <Tooltip title={logo.label}>
                    <logo.Icon style={iconStyle} />
                  </Tooltip>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default CodingLanguages;
