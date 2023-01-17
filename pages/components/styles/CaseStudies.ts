import Image from "next/image";
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
  margin: 2rem 0;
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

  ${mq("tiny", "min")} {
    text-align: center;
    font-size: ${({ theme }) => theme.head2};
  }

  ${mq("tablet", "min")} {
    margin-bottom: 2rem;
  }

  ${mq("desktopS", "min")} {
    text-align: left;
    margin: 1rem auto;
    width: 70%;
    font-size: ${({ theme }) => theme.head1};
  }
`;

export const CaseText = styled.p`
  font-family: ${({ theme }) => theme.mainFont};

  ${mq("tiny", "min")} {
    font-size: ${({ theme }) => theme.regSize};
    text-align: center;
    margin: 1.5rem auto;
    width: 80%;
  }

  ${mq("tablet", "min")} {
    font-size: ${({ theme }) => theme.head3};
    width: 70%;
  }

  ${mq("desktopS", "min")} {
    text-align: left;
  }
`;

export const CaseHeader = styled.h3`
  font-family: ${({ theme }) => theme.headFont2};

  ${mq("tiny", "min")} {
    text-align: center;
    font-size: ${({ theme }) => theme.head3};
  }

  ${mq("tablet", "min")} {
    margin-bottom: 1rem;
  }

  ${mq("desktopS", "min")} {
    text-align: left;
    margin: 1rem auto;
    width: 70%;
    font-size: ${({ theme }) => theme.head3};
  }
`;

export const CaseList = styled.ul`
  font-family: ${({ theme }) => theme.mainFont};
  font-size: ${({ theme }) => theme.head4};

  ${mq("tiny", "min")} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem auto;
  }

  ${mq("desktopS", "min")} {
    display: block;
    width: 70%;
    margin: 0 auto;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  ${mq("tiny", "min")} {
    margin: 0 auto;
  }

  ${mq("desktopS", "min")} {
    margin: 0;
  }
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
  ${mq("tiny", "min")} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  ${mq("tablet", "min")} {
    flex-direction: row;
  }

  ${mq("desktopS", "min")} {
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  ${mq("tiny", "min")} {
    width: 275px;
    height: 275px;
    margin: 1.2rem 0;
  }

  ${mq("tablet", "min")} {
    margin: 0.5rem;
  }

  ${mq("desktopS", "min")} {
    width: 300px;
    height: 280px;
    margin: 0.5rem;
  }
`;

export const CaseImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const StyledCase = styled.div``;
