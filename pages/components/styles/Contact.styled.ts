import styled from "styled-components";
import mq from "../../../utils/mq";

// TODO: Place Holder text left margin.
// TODO: Media Queries.

export const StyledContactSection = styled.section`
  border-top: 1px solid white;
`;
export const StyledDiv = styled.div`
  display: flex;
  max-width: 1600px;
  flex-direction: column-reverse;
  justify-content: center;
  margin: 30px auto;
  ${mq("tiny", "min")} {
  }
  ${mq("custom1", "min")} {
  } ;
`;

export const StyledRightSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

export const StyledLeftSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${mq("tiny", "min")} {
    width: 100%;
  }
  ${mq("custom1", "min")} {
    width: 100%;
  } ;
`;

export const StyledInputNameSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;
export const StyledInput = styled.input`
  background-color: transparent;
  color: grey;
  border: 1px white solid;
  height: 40px;
  width: 100%;
`;
export const StyledTextArea = styled.textarea`
  height: 120px;
  background-color: transparent;
  color: grey;
  border: 1px white solid;
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
  width: 600px;
  font-family: ${({ theme }) => theme.mainFont};
  font-size: clamp(12px, 4vw, 1.4rem);
  & :: placeholder {
    font-family: ${({ theme }) => theme.mainFont};
    font-size: clamp(1rem, 5vw, 1.5rem);
    padding-top: 0.5rem;
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
    width: 600px;
  } ;
`;
export const StyledInputName = styled(StyledInput)`
  margin-right: 20px;
`;
export const StyledH1 = styled.h1`
  font-size: clamp(3.5rem, 6vw, 6rem);
  font-family: ${({ theme }) => theme.headFont};
  text-align: center;
`;
export const StyledH2 = styled.h2`
  font-size: clamp(2rem, 6vw, 2rem);
  font-family: ${({ theme }) => theme.headFont};
  margin-top: 20px;
  text-align: center;
`;

export const StyledThankYou = styled.div`
  font-family: ${({ theme }) => theme.mainFont};
  font-size: clamp(1rem, 5vw, 1.5rem);
`;
