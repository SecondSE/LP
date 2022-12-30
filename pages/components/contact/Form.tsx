import {StyledInputName, StyledForm, StyledTextArea, StyledLabel, StyledInput, StyledInputSubmitSection, StyledInputNameSection, StyledInputSubmit, StyledInputAndLabelSection} from "../styles/Contact.styled"

export default function Form(){
    return(
    <>
        <StyledForm action="" method="get" id="contact-form">
            <StyledInputAndLabelSection>
                <StyledLabel>Name*</StyledLabel>
                <StyledInputNameSection>
                    <StyledInputName type="text" placeholder=" First Name" required/>
                    <StyledInput type="text" placeholder=" Last Name"  required/>
                </StyledInputNameSection>
            </StyledInputAndLabelSection>
            
            <StyledInputAndLabelSection>
                <StyledLabel>Phone Number*</StyledLabel>
                <StyledInput type="tel" placeholder=" 555 555-555" required/>
            </StyledInputAndLabelSection>
            <StyledInputAndLabelSection>
                <StyledLabel>Email Address*</StyledLabel>
                <StyledInput type="email" placeholder=" example@email.com" required/>
            </StyledInputAndLabelSection>
            <StyledInputAndLabelSection>
                <StyledLabel>Question/Comments*</StyledLabel>
                <StyledTextArea form="contact-form" placeholder=" Tell us what you're thinking" required/>
            </StyledInputAndLabelSection>
            <StyledInputSubmitSection>
                <StyledInputSubmit type="submit" value="SUBMIT"/>
            </StyledInputSubmitSection>
            
        </StyledForm>

    </>
    )
}