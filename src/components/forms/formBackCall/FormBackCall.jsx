import React from "react";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../../button/Button";
import "./formBackCall.css";

export default function FormBackCall() {
  const [yourname, setYourname] = useState("");
  const [phone, setPhone] = useState("");

  const [state, handleSubmit] = useForm("xvgkovvn");

  // Проверяем, заполнены ли все поля
  const isPhoneValid = /^\+?\d+$/.test(phone.trim());
  const isFormValid =
    yourname.trim() !== "" && phone.trim() !== "" && isPhoneValid;

  if (state.succeeded) {
    return <p className="success-message">Thanks for applying!</p>;
  }

  return (
    <div className="back-call-form">
      <form onSubmit={handleSubmit} className="form-back-call-container">
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
          id="phone"
          type="tel"
          name="phone"
          className="form-input contact-fild"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number in format +000123456789"
          required
        />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} />

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
