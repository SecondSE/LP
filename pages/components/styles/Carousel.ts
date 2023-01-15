import styled, { css } from "styled-components";
import Image from "next/image";
import mq from "../../../utils/mq";

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
  & button {
    position: absolute;
    bottom: 0;
    left: 50%;
  }
  cursor: pointer;
`;

export const SCarouselSlide = styled.div<ICarouselSlide>`
  position: relative;
  flex: 0 0 auto;
  opacity: ${(props) => (props.active ? 0.5 : 0)};
  transition: all 0.5s ease;
  width: 100%;
  height: 100%;
  z-index: 0;
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
  left: 2%;
  font-family: ${({ theme }) => theme.headFont2};

  z-index: 1;
  ${mq("tiny", "min")} {
    font-size: clamp(1rem, 1.5vw + 1rem, 1.2rem);
    width: 100%;
  }

  ${mq("desktopS", "min")} {
    font-size: clamp(1rem, 1.5vw + 1rem, 1.3rem);
    width: 420px;
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
`;

export const SlideText = styled.h3``;
