import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import youtubeLight from "../../assets/youtube-light.svg";
import youtubeDark from "../../assets/youtube-dark.svg";
import instagramLight from "../../assets/instagram-light.svg";
import instagramDark from "../../assets/instagram-dark.svg";
import { ThemeProvider, useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
  const youtubeIcon = theme === 'light' ? youtubeLight : youtubeDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="pfp of me :)" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Theme icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Shourya
          <br />
          Batra
        </h1>
        <h2>Fullstack developer</h2>
        <span>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://instagram.com/" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
          <a href="https://youtube.com/" target="_blank">
            <img src={youtubeIcon} alt="Youtube icon" />
          </a>
        </span>
        <p className={styles.description}>
          A freshman at Homestead High school, currently pursuing their passion
          of programming and computer science.
        </p>
      </div>
    </section>
  );
}

export default Hero;
