import React, { useState, useRef } from "react";
import styled from "styled-components";
import Heading from "../Heading/Heading";
import DraftsIcon from "@material-ui/icons/Drafts";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import emailjs from "@emailjs/browser";
import BounceLoader from "react-spinners/BounceLoader";
import { useFormik } from "formik";
import { formSchemas } from "../../schemas/formSchemas";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [messege, setMessege] = useState(false);
  const form = useRef();
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxSvxoKnYizA2oiufB8rHOkVjKsfv8kf5j5uLYussW5vkFAN06M277dNIpwJ6VYQrWlrQ/exec';
  const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
  const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: formSchemas,
    onSubmit: (values,action) => {
      sendEmail(action);
    },
  });


  const sendEmail = async (action) => {
    setLoading(true);

    //  data save to Google sheet
    await fetch(scriptUrl, { method: "POST", body: new FormData(form.current) })
      .then((res) => {
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
        action.resetForm();
      })
      .catch((err) => console.log(err));

    //  data send to email
    // TODO: not working check
    setTimeout(() => {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setLoading(false);
      setMessege(true);
      action.resetForm();
    }, 2000);
  };

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
                <form
                  method="post"
                  ref={form}
                  onSubmit={handleSubmit}
                  name="potfolio"
                >
                  <input
                    placeholder="YOUR NAME"
                    type="text"
                    autoComplete="off"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  { errors.name && touched.name ? <span className="errors">{errors.name}</span> : null}
                  <input
                    placeholder="YOUR EMAIL"
                    type="email"
                    autoComplete="off"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  { errors.email && touched.email ? <span className="errors">{errors.email}</span> : null}
                  <input
                    placeholder="YOUR SUBJECT"
                    type="text"
                    autoComplete="off"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  { errors.subject && touched.subject ? <span className="errors">{errors.subject}</span> : null}
                  <textarea
                    rows="7"
                    placeholder="Your MESSAGE"
                    autoComplete="off"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  { errors.message && touched.message ? <span className="errors">{errors.message}</span> : null}
                  <button type="submit" value="Send">
                    {loading ? (
                      <div className="preloader">
                        <BounceLoader
                          color={"#ffb400"}
                          loading={loading}
                          size={35}
                        />
                      </div>
                    ) : (
                      <>
                        {messege ? (
                          <>
                            MESSAGE SUBMITED
                            <span>
                              <i
                                className="fa fa-thumbs-up icon"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </>
                        ) : (
                          <>
                            SEND MESSAGE
                            <span>
                              <i
                                className="fa fa-paper-plane icon"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </>
                        )}
                      </>
                    )}
                  </button>
                </form>
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
      position: relative;
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
    .errors {
      color:  #E21717;
      position: relative;
      top: -10px;
      margin-left: 1rem;
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
      .preloader {
        height: auto;
        margin-right: 3.5rem;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 2.2rem;
      }
    }
  }
`;
