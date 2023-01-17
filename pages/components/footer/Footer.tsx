import { StyledLink, FillImage } from "../styles/General.styled";
import {
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
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
import LogoImg from "../../../public/imgs/sse-logo.png";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterSection>
        <StyledLeftSection>
          <section>
            <LogoWrapper>
              <StyledLink href={"/"}></StyledLink>
              <FillImage src={LogoImg} alt="This is the Logo of the site" />
            </LogoWrapper>
            <StyledParagraph>
              Enter your email to get occasional updates on new work, trends,
              and what we see happening in the brand world.
            </StyledParagraph>
            <StyledForm action="" method="get">
              <StyledInputEmail
                type="email"
                name="name"
                id="name"
                placeholder="Email Address"
                required
              />
              <StyledInputSubmit type="submit" value="Submit" />
            </StyledForm>
          </section>
        </StyledLeftSection>
        <StyledRightSection>
          <section>
            <StyledSpanSection>
              <StyledSpan>EMAIL@secondsight.com</StyledSpan>
              {/* <StyledSpan>Connect with us on Social Media!</StyledSpan> */}
            </StyledSpanSection>

            <StyledSocialMediaSection>
              <IconWrapper>
                <StyledLink href="https://www.linkedin.com/company/second-sight-experience/"></StyledLink>
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
          </section>
        </StyledRightSection>
      </StyledFooterSection>
      <StyledCopyrightDiv>
        <StyledCopyright>
          &copy; Copyright 2022 SecondSight LLC.
        </StyledCopyright>
      </StyledCopyrightDiv>
    </StyledFooter>
  );
}
