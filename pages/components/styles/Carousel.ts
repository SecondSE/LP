import styled, { css } from "styled-components";
import Image from "next/image";

interface ICarouselSlide {
  active: boolean;
}

interface ICarouselProps {
  currentSlide: number;
}

interface TitleProps {
  current: number;
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

export const CarouselTitle = styled.h2<TitleProps>`
  position: absolute;
  top: 0;
  left: ${(props) =>
    props.current &&
    css`
      transform: translateX(-${props.current * 100}%);
    `};
  z-index: 1;
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
