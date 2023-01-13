import styled from "styled-components";
import mq from "../../../utils/mq";

interface ContainerProps {
  init?: boolean;
}

export const StyledCaseContainer = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${mq("tiny", "min")} {
    flex-direction: column;
  }

  ${mq("desktopS", "min")} {
    flex-direction: row;
  }
`;

export const TextWrapper = styled.div`
  height: 100%;

  ${mq("tiny", "min")} {
    width: 100%;
  }

  ${mq("desktopS", "min")} {
    width: 40%;
  }
`;

export const CaseTitle = styled.h2`
  font-family: ${({ theme }) => theme.headFont2};
  font-size: ${({ theme }) => theme.head1};
`;

export const ImagesWrapper = styled.div`
  height: 100%;

  ${mq("tiny", "min")} {
    width: 100%;
  }

  ${mq("desktopS", "min")} {
    width: 60%;
  }
`;

export const ImgsDivision = styled.div`
  width: 100%;
  ${mq("tablet", "min")} {
    display: flex;
  }
`;

export const StyledCase = styled.div``;
