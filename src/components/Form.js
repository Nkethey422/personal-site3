import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import useForm from "./useForm.js";
import "../App.css";
import "./Email.css";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import validate from "./validateInfo.js";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import gsap from "gsap/all";

function Form({ setSubmitted, currentLocation }) {
  const { handleChange, values, handleSubmit, errors, submitting } = useForm(
    validate
  );

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      console.log("ready to submit");
      setSubmitted(true);
      emailjs
        .sendForm(
          "service_fbrk42b",
          "template_powuyb9",
          "form",
          "user_PWgtvxhucPArWyBB5pU5m"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else if (Object.keys(errors).length > 0) {
      console.log("needs some work!");
    }
  }, [errors]);

  if (currentLocation !== "/Email") {
    gsap.to([".error__outline"], 0.5, {
      opacity: 0,
    });
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="with__errors">
          <div className="row">
            <div className="wrap__input">
              <PersonIcon className="input__icon" />
              <input
                className="form__input"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
            {errors.name && (
              <div className="errorOutline">
                <ErrorOutlineIcon className="error__outline" />
              </div>
            )}
          </div>
        </div>

        <div className="with__errors">
          <div className="row">
            <div className="wrap__input">
              <EmailIcon className="input__icon" />
              <input
                className="form__input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            {errors.email && (
              <div className="errorOutline">
                <ErrorOutlineIcon className="error__outline" />
              </div>
            )}
          </div>
        </div>

        <div className="with__errors2">
          <div className="row">
            <div className="wrap__text">
              <textarea
                className="form__message"
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Message"
                type="reset"
              ></textarea>
            </div>
            {errors.message && (
              <div className="errorOutline">
                <ErrorOutlineIcon className="error__outline" />
              </div>
            )}
          </div>
          <div className="button__send">
            <button className="send" type="submit">
              SEND
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
