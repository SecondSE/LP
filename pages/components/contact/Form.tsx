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
<<<<<<< HEAD
  StyledThankYou,
} from "../styles/Contact.styled";
import { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Form() {
  const [state, handleSubmit] = useForm("xnqweapp");
  const contactForm = useRef(null);

  const handleContactRedirect = () => {
    setTimeout(() => {
      let homeURL = window.location.origin;
      window.location.href = `${homeURL}/#Home`;
    }, 2000);
  };

  if (state.succeeded) {
    handleContactRedirect();
    return (
      <>
        <Form />
        <StyledThankYou>Thank you for your submission!</StyledThankYou>
      </>
    );
  }

  return (
    <>
      <StyledForm
        ref={contactForm}
        onSubmit={handleSubmit}
        method="POST"
        id="contact-form"
      >
        <StyledInputAndLabelSection>
          <StyledLabel>Name*</StyledLabel>
          <StyledInputNameSection>
            <StyledInputName
              id="name"
              name="name"
=======
} from "../styles/Contact.styled";

export default function Form() {
  return (
    <>
      <StyledForm action="" method="get" id="contact-form">
        <StyledInputAndLabelSection>
          <StyledLabel id="name">Name*</StyledLabel>
          <StyledInputNameSection>
            <StyledInputName
              aria-labelledby="name"
>>>>>>> development
              type="text"
              placeholder=" First Name"
              required
            />
<<<<<<< HEAD
            <StyledInput
              id="name"
              name="name"
              type="text"
              placeholder=" Last Name"
              required
            />
          </StyledInputNameSection>
        </StyledInputAndLabelSection>

        <StyledInputAndLabelSection>
          <StyledLabel>Phone Number*</StyledLabel>
          <StyledInput type="tel" placeholder=" 555 555-555" required />
        </StyledInputAndLabelSection>
        <StyledInputAndLabelSection>
          <StyledLabel>Email Address*</StyledLabel>
          <StyledInput
            id="email"
            name="email"
=======
            <StyledInput type="text" placeholder=" Last Name" required />
          </StyledInputNameSection>
        </StyledInputAndLabelSection>
        <StyledInputAndLabelSection>
          <StyledLabel id="phone">Phone Number*</StyledLabel>
          <StyledInput
            aria-labelledby="phone"
            type="tel"
            placeholder=" 555 555-555"
            required
          />
        </StyledInputAndLabelSection>
        <StyledInputAndLabelSection>
          <StyledLabel id="email">Email Address*</StyledLabel>
          <StyledInput
            aria-labelledby="email"
>>>>>>> development
            type="email"
            placeholder=" example@email.com"
            required
          />
        </StyledInputAndLabelSection>
        <StyledInputAndLabelSection>
<<<<<<< HEAD
          <StyledLabel>Question/Comments*</StyledLabel>
          <StyledTextArea
            id="message"
            name="message"
            // form="contact-form"
=======
          <StyledLabel id="questions">Question/Comments*</StyledLabel>
          <StyledTextArea
            aria-labelledby="questions"
            form="contact-form"
>>>>>>> development
            placeholder=" Tell us what you're thinking"
            required
          />
        </StyledInputAndLabelSection>
<<<<<<< HEAD
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <StyledInputSubmitSection>
          <StyledInputSubmit
            type="submit"
            value="SUBMIT"
            disabled={state.submitting}
=======
        <StyledInputSubmitSection>
          <StyledInputSubmit
            aria-label="Submit button"
            type="submit"
            value="SUBMIT"
>>>>>>> development
          />
        </StyledInputSubmitSection>
      </StyledForm>
    </>
  );
}
