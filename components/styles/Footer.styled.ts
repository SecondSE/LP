import styled from "styled-components";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import mq from "../../utils/mq";

export const StyledFooter = styled.footer`
  border-top: 1px white solid;
`;

export const StyledFooterSection = styled.section`
  display: flex;
  height: auto;
  max-width: 1600px;
  margin: 30px auto 0 auto;
  ${mq("tiny", "min")} {
    flex-direction: column-reverse;
  }
  ${mq("custom1", "min")} {
    padding: 0 1rem;
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
    padding-left: 1rem;
    width: 50%;
    text-align: left;
  } ;
`;

export const StyledRightSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mq("tiny", "min")} {
    margin: 0 1rem 20px 1rem;
  }
  ${mq("custom1", "min")} {
    width: 50%;
  } ;
`;

export const StyledSpanSection = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
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
  height: 31px;
  ${mq("tiny", "min")} {
  }
  ${mq("custom1", "min")} {
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  height: 30px;
  width: 30px;
`;

export const StyledSocialMediaSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: end;
  width: 100%;
`;

export const LinkedInIcon = styled(FaLinkedin)`
  color: grey;
  height: 100%;
  width: 100%;
`;

// export const InstagramIcon = styled(FaInstagram)`
//   color: grey;
//   height: 100%;
//   width: 100%;
// `;

// export const TwitterIcon = styled(FaTwitter)`
//   color: grey;
//   height: 100%;
//   width: 100%;
// `;

// export const FacebookIcon = styled(FaFacebook)`
//   color: grey;
//   height: 100%;
//   width: 100%;
// `;
export const EmailIcon = styled(FaEnvelope)`
  color: grey;
  height: 100%;
  width: 100%;
  &:hover {
    transition: 0.3s;
    transform: translateY(-30%);
  }
`;

export const StyledCopyright = styled.span`
  font-family: ${({ theme }) => theme.mainFont};
  display: inline-block;
  margin: 10px 0;
  color: white;
  font-size: 0.95rem;
`;

export const StyledCopyrightDiv = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: center;
`;

export const StyledParagraph = styled.p`
  font-family: ${({ theme }) => theme.thinFont};
  font-size: clamp(0.8em, 17vw, 1.2rem);
  word-spacing: 1px;
  line-height: 1.1;
  letter-spacing: 1px;
  max-width: 285px;
  min-width: 200px;
  margin-bottom: 15px;
  color: white;
`;

export const StyledSpan = styled.span`
  font-family: ${({ theme }) => theme.thinFont};
  font-size: clamp(0.8em, 17vw, 1.2rem);
  word-spacing: 1px;
  line-height: 1.1;
  letter-spacing: 1px;
  display: inline-block;
  margin: 10px 0 10px 0;
`;

export const StyledInputSubmit = styled.input`
  color: white;
  height: 30px;
  text-decoration: underline;
  border: none;
  background-color: transparent;
  font-weight: bold;
  font-size: 1rem;
  ${mq("tiny", "min")} {
    margin: 0 auto;
  }
  ${mq("custom1", "min")} {
  }
  &:hover {
    color: #1d1d1d;
    background-color: #fff;
    border-radius: 3px;
    width: 60px;
    height: 30px;
    transition: 0.4s;
  }
`;

export const StyledInputEmail = styled.input`
  font-family: ${({ theme }) => theme.mainFont};
  font-size: clamp(16px, 4vw, 1rem);
  font-weight: bold;
  padding-left: 2%;
  height: 30px;
  color: black;
  justify-content: start;
  letter-spacing: 2px;

  &.borderOff {
    border: none;
  }
  &.borderOn {
    border: solid 5px #66ff99;
    border-radius: 3px;
  }

  ${mq("tiny", "min")} {
    width: 100%;
  }
  ${mq("custom1", "min")} {
    width: 75%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  ${mq("tiny", "min")} {
    flex-direction: column;
    justify-content: center;
  }
  ${mq("custom1", "min")} {
    flex-direction: row;
    justify-content: start;
  } ;
`;
