import styled, { css } from "styled-components";
import Image from "next/image";
import mq from "../../utils/mq";

interface ICarouselSlide {
  active: boolean;
}

interface ICarouselProps {
  currentSlide: number;
}

export const SCarouselWrapper = styled.div`
  display: flex;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  cursor: pointer;

  & .left {
    font-size: 1.5rem;
    position: absolute;
    bottom: 45%;
    background-color: rgb(0 0 0);
    border-radius: 30px;
    ${mq("tiny", "min")} {
      left: 10px;
    }
  }
  & .right {
    font-size: 1.5rem;
    position: absolute;
    bottom: 45%;
    ${mq("tiny", "min")} {
      right: 10px;
      background-color: rgb(0 0 0);
      border-radius: 30px;
    }
  }

  ${mq("desktopS", "min")} {
    padding: 0 1.1rem;
  }
`;

export const SCarouselSlide = styled.div<ICarouselSlide>`
  position: relative;
  flex: 0 0 auto;
  opacity: ${(props) => (props.active ? 0.5 : 0)};
  transition: all 0.5s ease;
  width: 100%;
  height: 100%;
  z-index: 0;
  &:hover {
    opacity: 1;
  }
`;

export const SCarouselSlides = styled.div<ICarouselProps>`
  position: relative;
  display: flex;
  ${(props) =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  width: 100%;
  height: 100%;
`;

export const SContainer = styled.div`
  align-items: center;
  display: flex;
`;

export const STextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
  position: absolute;
`;

export const CarouselImage = styled(Image)`
  position: relative;
  height: 400px;
  width: 100%;
  object-fit: cover;
`;

export const CarouselTitle = styled.h2`
  position: absolute;
  top: 10%;
  left: 5%;
  font-family: ${({ theme }) => theme.headFont2};
  padding: 1rem;
  background-color: black;
  box-shadow: -12px 7px 2px #1d1d1d;
  border-radius: 3px;
  ${mq("tiny", "min")} {
    width: 169px;
  }
  ${mq("phoneMed", "min")} {
    width: 200px;
  }
  ${mq("tablet", "min")} {
    width: 240px;
  }
  ${mq("desktopS", "min")} {
    width: 260px;
  }

  z-index: 1;
  ${mq("tiny", "min")} {
    font-size: clamp(1rem, 1.5vw + 1rem, 1.2rem);
  }

  ${mq("desktopS", "min")} {
    font-size: clamp(1rem, 1.5vw + 1rem, 1.3rem);
  }

  ${mq("customX", "min")} {
    font-size: clamp(1rem, 1.5vw + 1rem, 2rem);
  }
`;

export const SlideImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const SlideImage = styled(Image)`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
  filter: grayscale(1);
  transition: filter 500ms ease-out;
  &:hover {
    filter: grayscale(0);
  }
`;

export const SlideText = styled.h3``;
