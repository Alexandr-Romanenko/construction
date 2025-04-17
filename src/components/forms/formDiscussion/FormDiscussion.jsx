import React from "react";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../../button/Button";
import "./formDiscussion.css";

export default function FormDiscussion() {
  const [yourname, setYourname] = useState("");
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");
  const [state, handleSubmit] = useForm("xvgkovvn");

  // Проверяем, заполнены ли все поля
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isEmailValid = emailRegex.test(email.trim());

  const isFormValid =
    yourname.trim() !== "" &&
    email.trim() !== "" &&
    issue.trim() !== "" &&
    isEmailValid;

  if (state.succeeded) {
    return <p className="success-message">Thanks for applying!</p>;
  }

  return (
    <div className="form-discussion-block">
      <form onSubmit={handleSubmit} className="form-discussion-container">
        <input
          id="name"
          type="text"
          name="name"
          className="form-input contact-fild"
          value={yourname}
          onChange={(e) => setYourname(e.target.value)}
          placeholder="Your name"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <input
          id="email"
          type="email"
          name="email"
          className="form-input contact-fild"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="issue"
          type="text"
          name="issue"
          className="form-input issue-fild"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          placeholder="Tell us about your issue"
          required
        />
        <ValidationError prefix="Issue" field="issue" errors={state.errors} />

        <Button
          className="btn-submit-form"
          type="submit"
          disabled={!isFormValid || state.submitting} // Блокируем кнопку, если форма не заполнена
        >
          Submit form
        </Button>
      </form>
    </div>
  );
}
