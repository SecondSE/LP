import { StyledLink, FillImage } from "../styles/General.styled";
import {
  EmailIcon,
  LinkedInIcon,
  StyledSpanSection,
  StyledSocialMediaSection,
  IconWrapper,
  StyledRightSection,
  StyledLeftSection,
  StyledFooterSection,
  LogoWrapper,
  StyledCopyright,
  StyledParagraph,
  StyledSpan,
  StyledInputSubmit,
  StyledInputEmail,
  StyledFooter,
  StyledForm,
  StyledCopyrightDiv,
} from "../styles/Footer.styled";
import { StyledFormSent } from "../styles/Contact.styled";
import LogoImg from "../../../public/imgs/sse-logo.png";
import { useForm } from "@formspree/react";
import { useState, useEffect, FormEvent } from "react";
import { useRef } from "react";

export default function Footer() {
  let year = new Date().getFullYear();

  const [state, handleSubmit, reset] = useForm("xwkjpaoa");
  const [visibility, setVisibility] = useState({ visibility: "accept" });

  const formElem = useRef<HTMLFormElement>(null);

  const [inputs, setInputs] = useState({
    email: "",
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
      });
    } else {
      return; // create validation logic
    }

    setVisibility({ visibility: "visible" });
    setTimeout(() => {
      if (succeeded) {
        reset();
      }
      setVisibility({ visibility: "accept" });
    }, 5000);
  };

  return (
    <StyledFooter>
      <StyledFooterSection>
        <StyledLeftSection>
          <section>
            <StyledParagraph id="email-form">
              Enter your email to get occasional updates on new work, trends,
              and what we see happening in the brand world.
            </StyledParagraph>
            <StyledForm ref={formElem} onSubmit={(e) => myHandleSubmit(e)}>
              <StyledInputEmail
                className={visibility.visibility}
                aria-describedby="email-form"
                type="email"
                name="email"
                id="name"
                value={inputs.email}
                placeholder="Email Address"
                onChange={handleOnChange}
                required
              />
              <StyledInputSubmit
                disabled={state.submitting}
                aria-label="Submit button to send email"
                type="submit"
                value="Submit"
              />
            </StyledForm>
          </section>
        </StyledLeftSection>
        <StyledRightSection>
          <LogoWrapper>
            <StyledLink
              aria-label="Link to send you back to the beginning of the website"
              href={"/"}
            ></StyledLink>
            <FillImage src={LogoImg} alt="This is the Logo of the site" />
          </LogoWrapper>
          <StyledSpanSection>
            <StyledSpan>hi@secondsightexperience.nyc</StyledSpan>
            {/* <StyledSpan>Connect with us on Social Media!</StyledSpan> */}
          </StyledSpanSection>
          <StyledSocialMediaSection>
            <IconWrapper>
              <StyledLink
                href="mailto:hi@secondsightexperience.nyc"
                aria-label="This link will open your email client"
              ></StyledLink>
              <EmailIcon />
            </IconWrapper>
            <IconWrapper>
              <StyledLink
                href="https://www.linkedin.com/company/second-sight-experience/"
                target="_blank"
                aria-label="This link will redirect you to our linked in"
              ></StyledLink>
              <LinkedInIcon />
            </IconWrapper>
            {/* <IconWrapper>
                <StyledLink href="https://instagram.com"></StyledLink>
                <InstagramIcon />
              </IconWrapper>

              <IconWrapper>
                <StyledLink href="https://twitter.com"></StyledLink>
                <TwitterIcon />
              </IconWrapper>

              <IconWrapper>
                <StyledLink href="https://instagram.com"></StyledLink>
                <FacebookIcon />
              </IconWrapper> */}
          </StyledSocialMediaSection>
        </StyledRightSection>
      </StyledFooterSection>
      <StyledCopyrightDiv>
        <StyledCopyright>
          &copy; Copyright {year} SecondSight LLC.
        </StyledCopyright>
      </StyledCopyrightDiv>
    </StyledFooter>
  );
}
