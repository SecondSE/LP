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
} from "../styles/Contact.styled";
import { useForm, ValidationError } from "@formspree/react";

export default function Form() {
  const [state, handleSubmit] = useForm("xlekdrav");

  const handleContactRedirect = () => {
    setTimeout(() => {
      let homeURL = window.location.origin;
      window.location.href = `${homeURL}/#Contact`;
    }, 2000);
  };

  if (state.succeeded) {
    handleContactRedirect();
    return (
      <>
        <Form />
        <p>Thank you for submitting</p>
      </>
    );
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit} method="POST" id="contact-form">
        <StyledInputAndLabelSection>
          <StyledLabel>Name*</StyledLabel>
          <StyledInputNameSection>
            <StyledInputName
              id="name"
              name="name"
              type="text"
              placeholder=" First Name"
              required
            />
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
            type="email"
            placeholder=" example@email.com"
            required
          />
        </StyledInputAndLabelSection>
        <StyledInputAndLabelSection>
          <StyledLabel>Question/Comments*</StyledLabel>
          <StyledTextArea
            id="message"
            name="message"
            // form="contact-form"
            placeholder=" Tell us what you're thinking"
            required
          />
        </StyledInputAndLabelSection>
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
          />
        </StyledInputSubmitSection>
      </StyledForm>
    </>
  );
}
