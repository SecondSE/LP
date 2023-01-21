import styled from "styled-components";
import mq from "../../../utils/mq";

export const StyledContactSection = styled.section`
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`;

export const StyledDiv = styled.div`
  display: flex;
  max-width: 1600px;
  flex-direction: column-reverse;
  justify-content: center;
  margin: 30px auto;
  ${mq("tiny", "min")} {
  }

  ${mq("desktopS", "min")} {
    margin-bottom: 0;
  }
  ${mq("custom1", "min")} {
  } ;
`;

export const StyledRightSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-bottom: 25px;
`;

export const StyledLeftSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;

  ${mq("tiny", "min")} {
  }
  ${mq("custom1", "min")} {
  } ;
`;

export const StyledInputNameSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
`;
export const StyledInputSubmitSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  ${mq("tiny", "min")} {
  }
  ${mq("custom1", "min")} {
  } ;
`;
export const StyledInputSubmit = styled.input`
  border: none;
  background-color: transparent;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  &:hover {
    color: #1d1d1d;
    background-color: #fff;
    border-radius: 3px;
    width: 100px;
    transition: 0.4s;
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  color: white;
  font-size: clamp(14px, 4vw, 1.3rem);
  border: 1px white solid;
  height: 40px;
  width: 100%;
  padding-left: 2%;
`;
export const StyledTextArea = styled.textarea`
  height: 140px;
  background-color: transparent;
  color: white;
  font-size: clamp(14px, 4vw, 1.4rem);
  border: 1px white solid;
  padding-left: 2%;
`;
export const StyledLabel = styled.label`
  color: white;
  margin: 10px 0;
`;
export const StyledInputAndLabelSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;
export const StyledForm = styled.form`
  font-family: ${({ theme }) => theme.mainFont};
  font-size: clamp(14px, 4vw, 1.4rem);
  & :: placeholder {
    font-family: ${({ theme }) => theme.mainFont};
    font-size: clamp(1rem, 5vw, 1.5rem);
    padding-top: 0.5rem;
    color: grey;
  }
  ${mq("tiny", "min")} {
    margin: 0 1rem;
    width: 100%;
  }

  ${mq("tablet", "min")} {
    margin: 0 auto;
    width: 90%;
  }

  ${mq("custom1", "min")} {
    margin: 0 auto;
    width: 700px;
  } ;
`;
export const StyledInputName = styled(StyledInput)`
  margin-right: 20px;
`;
export const StyledH3 = styled.h3`
  font-size: clamp(4.22rem, 17vw, 8rem);
  font-family: ${({ theme }) => theme.headFont3};
  text-align: center;
  margin: 0 1rem;
`;
export const StyledH4 = styled.h4`
  font-size: clamp(3rem, 6vw, 6rem);
  font-family: ${({ theme }) => theme.headFont3};
  margin: 20px 1rem 0 1rem;
  text-align: center;
`;

export const StyledThankYou = styled.div`
  font-family: ${({ theme }) => theme.mainFont};
  font-size: clamp(1rem, 5vw, 1.5rem);
`;
