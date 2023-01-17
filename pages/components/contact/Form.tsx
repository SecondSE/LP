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

export default function Form() {
  return (
    <>
      <StyledForm action="" method="get" id="contact-form">
        <StyledInputAndLabelSection>
          <StyledLabel id="name">Name*</StyledLabel>
          <StyledInputNameSection>
            <StyledInputName
              aria-labelledby="name"
              type="text"
              placeholder=" First Name"
              required
            />
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
            type="email"
            placeholder=" example@email.com"
            required
          />
        </StyledInputAndLabelSection>
        <StyledInputAndLabelSection>
          <StyledLabel id="questions">Question/Comments*</StyledLabel>
          <StyledTextArea
            aria-labelledby="questions"
            form="contact-form"
            placeholder=" Tell us what you're thinking"
            required
          />
        </StyledInputAndLabelSection>
        <StyledInputSubmitSection>
          <StyledInputSubmit
            aria-label="Submit button"
            type="submit"
            value="SUBMIT"
          />
        </StyledInputSubmitSection>
      </StyledForm>
    </>
  );
}
