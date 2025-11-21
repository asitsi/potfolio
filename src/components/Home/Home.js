import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import DownloadButton from "../Button/DownloadButton";
import resume from "../../image/Asitsingh_Resume.pdf";
import Typeical from "react-typical";

function Home({ onMoreAboutClick }) {

  return (
    <>
      <style>{styles}</style>
      <div className="home-container">
        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </div>

        <section className="hero-section">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="greeting">Hello, I'm</p>
              
              <h1 className="hero-title">
                <span className="hero-name">ASIT SINGH</span>
              </h1>

              <div className="hero-role">
                Software <span style={{ color: "#ffb912" }}>
                <Typeical
                      loop={Infinity}
                      wrapper="b"
                      steps={["Designer", 2000, "Developer", 2000]}
                      className="Post_Name"
                    /></span>
              </div>

              <p className="hero-description">
                I'm a web designer & front-end developer focused on crafting clean & 
                user-friendly experiences. I am passionate about building excellent 
                applications that improve the lives of those around me.
              </p>

              <div className="cta-buttons">
                <button className="btn-primary" onClick={onMoreAboutClick}>
                  MORE ABOUT ME
                  <ArrowRight size={20} />
                </button>
                <a href={resume} download style={{ textDecoration: "none" }}>
                  <DownloadButton />
                </a>
              </div>

              <div className="social-links">
                <a href="https://github.com/asitsi" className="social-link">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/asit-singh-b679b0156/" className="social-link">
                  <Linkedin size={22} />
                </a>
                <a href="mailto:asitsingh18@gmail.com" className="social-link">
                  <Mail size={22} />
                </a>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <div className="hero-image-container">
                <div className="image-background"></div>
                <img 
                  src="https://ik.imagekit.io/wzc2vtdgade/potfolio/profilePic__2U95TOXt.webp" 
                  alt="Asit Singh" 
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;

const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .home-container {
      min-height: 100vh;
      background: #111111;
      position: relative;
      overflow: hidden;
    }

    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 2rem;
      position: relative;
    }

    .hero-grid {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      width: 100%;
    }

    .hero-content {
      z-index: 2;
    }

    .greeting {
      color: #ffb912;
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .greeting::before {
      content: "";
      width: 40px;
      height: 3px;
      background: #ffb912;
      border-radius: 2px;
    }

    .hero-title {
      font-size: 4.5rem;
      font-weight: 800;
      color: #ffffff;
      line-height: 1.1;
      margin-bottom: 1rem;
    }

    .hero-name {
      color: #ffb912;
      display: block;
    }

    .hero-role {
      font-size: 3rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 2rem;
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .role-text {
      color: #ffb912;
      position: relative;
      display: inline-block;
      min-width: 200px;
      overflow: hidden;
      font-size: 3rem;
    }

    .role-text::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #ffb912, transparent);
      animation: slideIn 2s ease-in-out infinite;
    }

    @keyframes slideIn {
      0%, 100% {
        width: 0;
      }
      50% {
        width: 100%;
      }
    }

    .hero-description {
      color: #b8b8b8;
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 2.5rem;
      max-width: 600px;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn-primary {
      background: #ffb912;
      color: #111111;
      padding: 1rem 2rem;
      border: none;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .btn-primary:hover {
      background: #ffc933;
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(255, 185, 18, 0.3);
    }

    .btn-secondary {
      background: transparent;
      color: #ffffff;
      padding: 1rem 2rem;
      border: 2px solid #ffb912;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .btn-secondary:hover {
      background: rgba(255, 185, 18, 0.1);
      transform: translateY(-2px);
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }

    .social-link {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 185, 18, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffb912;
      transition: all 0.3s ease;
      text-decoration: none;
      border: 1px solid transparent;
    }

    .social-link:hover {
      background: #ffb912;
      color: #111111;
      transform: translateY(-3px);
      border-color: #ffb912;
    }

    .hero-image-wrapper {
      position: relative;
      z-index: 1;
    }

    .hero-image-container {
      position: relative;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
    }

    .image-background {
      position: absolute;
      top: -20px;
      right: -20px;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #ffb912, #ff9500);
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      z-index: -1;
      animation: morph 8s ease-in-out infinite;
    }

    @keyframes morph {
      0%, 100% {
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      }
      50% {
        border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
      }
    }

    .hero-image {
      width: 100%;
      height: auto;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      display: block;
      position: relative;
      z-index: 1;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }

    .floating-elements {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .floating-circle {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 185, 18, 0.1);
      animation: float 6s ease-in-out infinite;
    }

    .circle-1 {
      width: 100px;
      height: 100px;
      top: 10%;
      left: 5%;
      animation-delay: 0s;
    }

    .circle-2 {
      width: 150px;
      height: 150px;
      bottom: 20%;
      right: 10%;
      animation-delay: 2s;
    }

    .circle-3 {
      width: 80px;
      height: 80px;
      top: 60%;
      left: 10%;
      animation-delay: 4s;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @media (max-width: 1024px) {
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
      }

      .hero-title {
        font-size: 3.5rem;
      }

      .hero-role {
        font-size: 2.5rem;
        justify-content: center;
      }

      .greeting {
        justify-content: center;
      }

      .hero-description {
        margin: 0 auto 2.5rem;
      }

      .cta-buttons {
        justify-content: center;
      }

      .social-links {
        justify-content: center;
      }

      .hero-image-wrapper {
        order: -1;
      }
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-role {
        font-size: 1.8rem;
      }

      .hero-description {
        font-size: 1rem;
      }

      .btn-primary,
      .btn-secondary {
        padding: 0.875rem 1.5rem;
        font-size: 0.9rem;
      }

      .hero-image-container {
        max-width: 350px;
      }
    }
  `;