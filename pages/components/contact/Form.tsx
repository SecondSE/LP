import { useRef } from "react";
import {
  StyledInputName,
  StyledForm,
  StyledTextArea,
  StyledLabel,
  StyledInput,
  StyledInputSubmitSection,
  StyledInputNameSection,
  StyledInputSubmit,
  StyledInputAndLabelSection,
  StyledFormSent,
  StyledFormDiv,
} from "../styles/Contact.styled";

import { useForm } from "@formspree/react";
import { useState, useEffect, FormEvent } from "react";

export default function Form() {
  const [state, handleSubmit, reset] = useForm("xwkjpaoa");
  const [visibility, setVisibility] = useState({ visibility: "hidden" });

  const formElem = useRef<HTMLFormElement>(null);

  const [inputs, setInputs] = useState({
    email: "",
    message: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  });

  let { succeeded } = state;

  const handleOnChange = (event: any) => {
    // event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const myHandleSubmit = async function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await handleSubmit(inputs);

    if (succeeded) {
      setInputs({
        email: "",
        message: "",
        first_name: "",
        last_name: "",
        phone_number: "",
      });
    } else {
      return; // create validation logic
    }

    setVisibility({ visibility: "visible" });
    setTimeout(() => {
      if (succeeded) {
        reset();
      }
      setVisibility({ visibility: "hidden" });
    }, 5000);
  };

  return (
    <StyledFormDiv>
      <StyledForm ref={formElem} onSubmit={(e) => myHandleSubmit(e)}>
        <StyledInputAndLabelSection>
          <StyledLabel id="name">Name*</StyledLabel>
          <StyledInputNameSection>
            <StyledInputName
              name="first_name"
              aria-labelledby="name"
              type="text"
              placeholder=" First Name"
              value={inputs.first_name}
              onChange={handleOnChange}
              required
            />
            <StyledInput
              type="text"
              placeholder=" Last Name"
              name="last_name"
              value={inputs.last_name}
              onChange={handleOnChange}
              required
            />
          </StyledInputNameSection>
        </StyledInputAndLabelSection>
        <StyledInputAndLabelSection>
          <StyledLabel id="phone">Phone Number*</StyledLabel>
          <StyledInput
            id="phone_number"
            name="phone_number"
            aria-labelledby="phone"
            type="tel"
            placeholder=" 555 555-555"
            value={inputs.phone_number}
            onChange={handleOnChange}
          />
        </StyledInputAndLabelSection>
        <StyledInputAndLabelSection>
          <StyledLabel id="email">Email Address*</StyledLabel>
          <StyledInput
            name="email"
            aria-labelledby="email"
            type="email"
            placeholder=" example@email.com"
            value={inputs.email}
            onChange={handleOnChange}
            required
          />
        </StyledInputAndLabelSection>
        <StyledInputAndLabelSection>
          <StyledLabel id="questions">Question/Comments*</StyledLabel>
          <StyledTextArea
            id="message"
            name="message"
            aria-labelledby="questions"
            // form="contact-form"
            placeholder=" Tell us what you're thinking"
            value={inputs.message}
            onChange={handleOnChange}
            required
          />
        </StyledInputAndLabelSection>
        <StyledInputSubmitSection>
          <StyledInputSubmit
            disabled={state.submitting}
            aria-label="Submit button"
            type="submit"
            value="SUBMIT"
          />
        </StyledInputSubmitSection>
      </StyledForm>
      <StyledFormSent className={visibility.visibility}>
        FORM SENT
      </StyledFormSent>
    </StyledFormDiv>
  );
}
