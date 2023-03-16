import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { useGlobalContext } from "../components/Context";

function Contact() {
  const { close, isOpen } = useGlobalContext();

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // onSubmit

  const onSubmit = async (values) => {
    setSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    try {
      const response = await fetch("https://formspree.io/f/xgebzrqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      setSubmitting(false);
      setSubmitSuccess(true);

    } catch (error) {
      setSubmitting(false);
      setSubmitError("Failed to submit form");
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    return errors;
  };

  const resetForm = (form) => {
    form.reset();
    setSubmitSuccess(false);
  };

  return (
    <div className="container contact" onClick={isOpen ? close : undefined}>
      <div className="contact-text">
        <h2 className="capitalize">
          contact <span className="accent"> me</span>
        </h2>
        <p>
          If you’d like to chat about a project or just have question, please
          fill in the form below. I aim to get back within 2 days.
        </p>
      </div>
      <br />
      {submitError && <div className="accent ">{submitError}</div>}
      {submitSuccess && (
        <div className="accent">Thanks for contacting us!</div>
      )}
      <Form onSubmit={onSubmit} validate={validate}>
        {({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="flex-col ">
                <label>Name</label>
                <Field
                  className="input"
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex-col">
                <label>Email</label>
                <Field
                  className="input"
                  name="email"
                  component="input"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex-col">
              <label>Subject</label>
              <Field
                className="input"
                name="subject"
                component="input"
                type="text"
                placeholder="Enter your subject"
              />
            </div>
            <div className="flex-col">
              <label>Message</label>
              <Field
                className="input text-area"
                name="message"
                component="textarea"
                placeholder="Enter your message"
              />
            </div>

            <div className="flex-imp ">
              <button type="submit" disabled={submitting}>
                Submit
              </button>
              <button type="button" onClick={() => resetForm(form)}>
                Reset
              </button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
}

export default Contact