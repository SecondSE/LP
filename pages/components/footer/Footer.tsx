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
  let year = new Date().getFullYear();
  return (
    <StyledFooter>
      <StyledFooterSection>
        <StyledLeftSection>
          <section>
            <LogoWrapper>
              <StyledLink
                aria-label="Link to send you back to the beginning of the website"
                href={"/"}
              ></StyledLink>
              <FillImage src={LogoImg} alt="This is the Logo of the site" />
            </LogoWrapper>
            <StyledParagraph id="email-form">
              Enter your email to get occasional updates on new work, trends,
              and what we see happening in the brand world.
            </StyledParagraph>
            <StyledForm action="" method="get">
              <StyledInputEmail
                aria-describedby="email-form"
                type="email"
                name="name"
                id="name"
                placeholder="Email Address"
                required
              />
              <StyledInputSubmit
                aria-label="Submit button to send email"
                type="submit"
                value="Submit"
              />
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
          </section>
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
