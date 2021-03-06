import React from "react";
import styled from "styled-components";
import Heading from "../Heading/Heading";
import DraftsIcon from "@material-ui/icons/Drafts";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

const Contact = () => {
  return (
    <Wrap>
      <div className="PageBackground py-3">
        <Heading
          bgHeading="Contact"
          TitleHeading="Get in"
          TitleHeadingSpan="Touch"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="contactus">
                <h2>DON'T BE SHY !</h2>
                <p>
                  Feel free to get in touch with me. I am always open to
                  discussing new projects, creative ideas or opportunities to be
                  part of your visions.
                </p>
                <div className="contactus_section">
                  <span>
                    <DraftsIcon className="contactus_section_icon" />
                  </span>
                  <span>
                    <h6>MAIL ME</h6>
                    <a href="mailto:asitsingh0@gmail.com" target="blank">
                      <p>asitsingh0@gmail.com</p>
                    </a>
                  </span>
                </div>
                <div className="contactus_section">
                  <span>
                    <ContactPhoneIcon className="contactus_section_icon" />
                  </span>
                  <span>
                    <h6>CALL ME</h6>
                    <a href="tel:+916394066616" target="blank">
                      <p>+91 - 6394066616</p>
                    </a>
                  </span>
                </div>
                <div className="contactus_section_Socialicon">
                  <a
                    href="https://www.instagram.com/asitsingh18/"
                    target="blank"
                  >
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://twitter.com/AsitSin37319666?s=09"
                    target="blank"
                  >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC8SzZZpOMnsa_sdng73oemA"
                    target="blank"
                  >
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/asit-singh-b679b0156/"
                    target="blank"
                  >
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 pt-3">
              <div className="contact_form">
                <input
                  onChange="this.className=(this.value=='')?'':'visited';"
                  type="text"
                  placeholder="YOUR NAME"
                />
                <input
                  onChange="this.className=(this.value=='')?'':'visited';"
                  type="text"
                  placeholder="YOUR EMAIL"
                />
                <input
                  onChange="this.className=(this.value=='')?'':'visited';"
                  type="text"
                  placeholder="YOUR SUBJECT"
                />
                <textarea rows="7" type="text" placeholder="Your MESSAGE" />
                <button>
                  SEND MESSAGE
                  <span>
                    <i
                      className="fa fa-paper-plane icon"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default Contact;

const Wrap = styled.div`
  .PageBackground {
    background: #111111;
    height: 100%;
  }
  .contactus h2,
  p {
    color: #ffffff;
  }
  .contactus {
    .contactus_section {
      display: flex;
      h6 {
        margin-left: 1rem;
        color: #999;
        line-height: 3px;
        margin-top: 7px;
      }
      a {
        text-decoration: none;
      }
      p {
        margin-left: 1rem;
      }
      .contactus_section_icon {
        color: #ffb912;
        font-size: 2.5rem;
      }
    }
    .contactus_section_Socialicon i {
      background-color: #333;
      color: #fff;
      padding: 15px;
      border-radius: 50%;
      margin-left: 1rem;
      transition: all 0.5s ease-in-out;
      :hover {
        background-color: #ffb912;
        font-size: 1.3rem;
      }
    }
  }
  .contact_form {
    input {
      background-color: #333;
      border-radius: 20px;
      padding: 0.6rem 1rem;
      border: 1px solid #333;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      :focus {
        outline: none;
        color: #fff;
        box-shadow: 0 0 0 2px #ffb912;
      }
    }
    textarea {
      background-color: #333;
      border-radius: 20px;
      padding: 0.6rem 1rem;
      border: 1px solid #333;
      width: 100%;
      height: auto;
      :focus {
        outline: none;
        color: #fff;
        box-shadow: 0 0 0 2px #ffb912;
      }
    }
    button {
      background: transparent;
      padding: 0px 0px 0px 20px;
      margin-top: 1rem;
      margin-left: 1rem;
      border-radius: 35px;
      color: #ffffff;
      border: 1px solid #ffb912;
      font-weight: 700 !important;
      font-size: 15px;
      transition: 0.7s all ease-in-out;
      font-family: "Poppins", sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: 1px;
      .icon {
        margin-left: 1rem;
        color: #ffffff;
        background-color: #ffb912;
        padding: 20px;
        border-radius: 35px;
      }
      :hover {
        background: #ffb912;
        color: #ffffff;
      }
    }
  }
`;
