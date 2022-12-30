import styled from "styled-components";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import mq from "../../../utils/mq";

export const StyledFooter = styled.footer`
  border-top: 1px white solid;
  border-bottom: 1px white solid;
`;

export const StyledFooterSection = styled.section`
  display: flex;
  height: auto;
  max-width: 1600px;
  margin: 0 auto;
  ${mq("tiny", "min")} {
    flex-direction: column;
  }
  ${mq("custom1", "min")} {
    flex-direction: row;
  } ;
`;

export const StyledLeftSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  ${mq("tiny", "min")} {
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 60%;
  }
  ${mq("custom1", "min")} {
    width: 50%;
    text-align: left;
  } ;
`;

export const StyledRightSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mq("tiny", "min")} {
    margin: auto;
  }
  ${mq("custom1", "min")} {
    width: 50%;
    margin: 40px auto auto auto;
  } ;
`;

export const StyledSpanSection = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 20px;
  ${mq("tiny", "min")} {
    align-items: center;
  }
  ${mq("custom1", "min")} {
    align-items: start;
  } ;
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 160px;
  ${mq("tiny", "min")} {
    margin: 25px auto 15px auto;
  }
  ${mq("custom1", "min")} {
    margin: 25px 0 0 0;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  height: 30px;
  width: 30px;
`;

export const StyledSocialMediaSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const LinkedInIcon = styled(FaLinkedin)`
  color: grey;
  height: 100%;
  width: 100%;
`;

export const InstagramIcon = styled(FaInstagram)`
  color: grey;
  height: 100%;
  width: 100%;
`;

export const TwitterIcon = styled(FaTwitter)`
  color: grey;
  height: 100%;
  width: 100%;
`;

export const FacebookIcon = styled(FaFacebook)`
  color: grey;
  height: 100%;
  width: 100%;
`;

export const StyledCopyright = styled.span`
  font-family: ${({ theme }) => theme.mainFont};
  display: inline-block;
  margin: 10px 0;
  color: white;
  font-size: 0.9rem;
`;

export const StyledCopyrightDiv = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
`;

export const StyledParagraph = styled.p`
  font-family: ${({ theme }) => theme.mainFont};
  font-size: 1.1rem;
  max-width: 285px;
  min-width: 200px;
  margin-bottom: 15px;
  color: white;
`;

export const StyledSpan = styled.span`
  font-family: ${({ theme }) => theme.mainFont};
  font-size: 1.1rem;
  display: inline-block;
  margin-top: 20px;
`;

export const StyledInputSubmit = styled.input`
  color: white;
  height: 30px;
  text-decoration: underline;
  border: none;
  background-color: transparent;
  font-weight: bold;
  font-size: 1rem;
  ${mq("custom1", "min")} {
    margin-left: 10px;
  } ;
`;

export const StyledInputEmail = styled.input`
  font-family: ${({ theme }) => theme.mainFont};
  font-size: clamp(16px, 4vw, 1rem);
  border: none;
  height: 30px;
  justify-content: start;
  ${mq("tiny", "min")} {
    width: 100%;
  }
  ${mq("custom1", "min")} {
    width: 75%;
  } ;
`;

export const StyledForm = styled.form`
  display: flex;
  ${mq("tiny", "min")} {
    flex-direction: column;
    justify-content: center;
  }
  ${mq("custom1", "min")} {
    flex-direction: row;
    justify-content: start;
  } ;
`;
