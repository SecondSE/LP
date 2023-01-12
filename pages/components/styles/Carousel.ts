import styled, { css } from "styled-components";
import Image from "next/image";

interface ICarouselSlide {
  active?: boolean;
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
`;

export const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
  height: 100%;
`;

export const SCarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  ${(props) =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
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
  height: 400px;
  width: 100%;
  object-fit: cover;
`;
