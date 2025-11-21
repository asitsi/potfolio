import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from "lucide-react";

const EandE = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="journey-container">
        <div className="journey-wrapper">
          {/* Header */}
          <div className="main-header">
            <h2 className="main-title">
              EXPERIENCE & <span className="main-highlight">EDUCATION</span>
            </h2>
            <p className="main-subtitle">My Professional Journey & Academic Background</p>
          </div>

          {/* Two Column Layout */}
          <div className="content-grid">
            {/* Experience Section */}
            <div>
              <div className="section-header">
                <div className="section-icon">
                  <Briefcase size={24} />
                </div>
                <h3 className="section-title">Experience</h3>
              </div>

              <div className="experience-list">
                {experiences.map((exp, index) => (
                  <div key={index} className="experience-card">
                    {exp.current && (
                      <span className="current-badge">Current</span>
                    )}
                    
                    <div className="card-header">
                      <div className="company-info">
                        <div className="company-icon">
                          <Briefcase size={20} />
                        </div>
                        <div className="company-details">
                          <h4 className="company-name">{exp.company}</h4>
                          <p className="position-title">{exp.position}</p>
                        </div>
                      </div>
                      
                      <div className="period-badge">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="experience-description">{exp.description}</p>

                    {exp.role && (
                      <p className="role-text">Role: {exp.role}</p>
                    )}

                    {exp.links && (
                      <div className="links-container">
                        {exp.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-button"
                          >
                            <ExternalLink size={12} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="section-header">
                <div className="section-icon">
                  <GraduationCap size={24} />
                </div>
                <h3 className="section-title">Education</h3>
              </div>

              <div className="education-list">
                {education.map((edu, index) => (
                  <div key={index} className="education-card">
                    <div className="education-content">
                      <div className="education-icon">{edu.icon}</div>
                      <div className="education-details">
                        <div className="education-period">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                        <h4 className="education-degree">{edu.degree}</h4>
                        <p className="education-institution">
                          <MapPin size={14} />
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EandE;

const experiences = [
  {
    period: "May 2024 - Present",
    company: "Mirana Toys Private Limited",
    position: "Software Developer",
    description: "Working on Miranatoys E-Commerce for (B to B and B to C) clients and Mobile App Consoles / 2D Games as a frontend developer using React JS, Next JS, React Native and Phaser",
    links: [
      { url: "https://miranatoys.com", label: "miranatoys.com" },
      { url: "https://play.google.com/store/search?q=mirana+app&c=apps&hl=en", label: "Play Store" }
    ],
    current: true
  },
  {
    period: "Feb 2023 - May 2024",
    company: "Explarity Solutions",
    position: "Software Developer",
    description: "Worked on Diamond Certified Resources and Value Star as well as Flutter Love as a frontend developer using React JS, Next JS, and React Native, Jest",
    links: [
      { url: "https://diamondcertified.org/", label: "diamondcertified.org" },
      { url: "https://aflutterlove.com/", label: "aflutterlove.com" }
    ]
  },
  {
    period: "Oct 2022 - Dec 2023",
    company: "Gather Network",
    position: "Software Developer",
    description: "Worked on Cpass-desktop-file-transfer, Gather cluster projects & Gather online pages as well as Gather ATM projects from scratch using Angular",
    links: [
      { url: "https://online.gather.network/", label: "online.gather.network" }
    ],
    role: "Frontend Developer (Angular Developer)"
  },
  {
    period: "Mar 2022 - Sep 2022",
    company: "Health Highway",
    position: "Intern",
    description: "Wrote frontend & backend APIs for displaying backend data to the client side and created related blog post suggestions using HTML, CSS, JavaScript, EJS, Node.js, Express.js"
  }
];

const education = [
  {
    period: "2020 - 2023",
    degree: "MCA",
    institution: "Shri Krishna University",
    icon: "🎓"
  },
  {
    period: "2017 - 2020",
    degree: "BSC",
    institution: "Chhatrapati Shahu Ji Maharaj University",
    icon: "🎓"
  },
  {
    period: "2015",
    degree: "Intermediate",
    institution: "Subhash Smarak Inter College",
    icon: "📚"
  },
  {
    period: "2013",
    degree: "High School",
    institution: "Subhash Smarak Inter College",
    icon: "📚"
  }
];

const styles = `
  .journey-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%);
    padding: 4rem 1rem;
  }
  .journey-wrapper {
    max-width: 1400px;
    margin: 0 auto;
  }
  .main-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  .main-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 1rem;
  }
  .main-highlight {
    color: #ffb400;
  }
  .main-subtitle {
    color: #9d9d9d;
    font-size: 1.125rem;
  }
  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  .section-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #ffb400;
  }
  .section-icon {
    background: linear-gradient(135deg, #ffb400 0%, #ff9500 100%);
    padding: 0.75rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a1a1a;
  }
  .section-title {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
  }
  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .experience-card {
    background-color: #2d2d2d;
    border-radius: 12px;
    padding: 1.5rem;
    border: 1px solid #3d3d3d;
    transition: all 0.3s ease;
    position: relative;
  }
  .experience-card:hover {
    border-color: #ffb400;
    box-shadow: 0 10px 30px rgba(255, 180, 0, 0.1);
    transform: translateY(-2px);
  }
  .card-header {
    margin-bottom: 1rem;
  }
  .company-info {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .company-icon {
    background-color: #ffb400;
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1a1a1a;
    flex-shrink: 0;
  }
  .company-details {
    flex: 1;
  }
  .company-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 0.25rem 0;
  }
  .position-title {
    color: #ffb400;
    font-weight: 600;
    margin: 0;
    font-size: 0.95rem;
  }
  .current-badge {
    background-color: rgba(34, 197, 94, 0.2);
    color: #22c55e;
    font-size: 0.7rem;
    padding: 0.25rem 0.75rem;
    border-radius: 50px;
    font-weight: 600;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .period-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #9d9d9d;
    font-size: 0.85rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
  }
  .experience-description {
    color: #d1d1d1;
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }
  .role-text {
    color: #ffb400;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .links-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .link-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: #ffb400;
    background-color: rgba(255, 180, 0, 0.1);
    padding: 0.4rem 0.9rem;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  .link-button:hover {
    color: #ffc933;
    background-color: rgba(255, 180, 0, 0.2);
    transform: translateY(-1px);
  }
  .education-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .education-card {
    background-color: #2d2d2d;
    border-radius: 12px;
    padding: 1.5rem;
    border: 1px solid #3d3d3d;
    transition: all 0.3s ease;
  }
  .education-card:hover {
    border-color: #ffb400;
    box-shadow: 0 10px 30px rgba(255, 180, 0, 0.1);
    transform: translateY(-2px);
  }
  .education-content {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  .education-icon {
    background: linear-gradient(135deg, #ffb400 0%, #ff9500 100%);
    padding: 0.75rem;
    border-radius: 8px;
    font-size: 1.5rem;
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .education-details {
    flex: 1;
  }
  .education-period {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #9d9d9d;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
  .education-degree {
    font-size: 1.25rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 0.5rem 0;
  }
  .education-institution {
    color: #9d9d9d;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    font-size: 0.95rem;
  }
  @media (max-width: 1024px) {
    .content-grid {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 767px) {
    .main-title {
      font-size: 2.5rem;
    }
    .section-title {
      font-size: 1.5rem;
    }
    .company-name {
      font-size: 1.1rem;
    }
  }
`;