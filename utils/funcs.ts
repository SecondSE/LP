const borderAnim = function (dirScale: string) {
  return `
  &.anim-appear,
  &.anim-enter {
    transform: scale${dirScale}(0);
  }

  &.anim-appear-active,
  &.anim-enter-active {
    transform: scale${dirScale}(1);
    transition: transform 1000ms ease-in;
  }

  &.anim-appear-done,
  &.anim-enter-done {
    transform: scale${dirScale}(1);
  }
`;
};

const showComp = function () {
  return `
    &.show-appear,
    &.show-enter {
      opacity: 0;
    }

    &.show-appear-active,
    &.show-enter-active {
      opacity: 1;
      transition: opacity 300ms ease-out;
    }

    &.show-appear-done,
    &.show-enter-done {
      opacity: 1;
    }
  `;
};

const opaTranslate = function (dir: string, pos: string, time: string) {
  return `
    &.move-appear,
    &.move-enter {
      opacity: 0;
      transform: translate${dir}(${pos}px);
    }

    &.move-appear-active,
    &.move-enter-active {
      transform: translate${dir}(0px);
      opacity: 1;
      transition: all ${time}ms ease-in;
    }

    &.move-appear-done,
    &.move-enter-done {
      opacity: 1;
      transform: translate${dir}(0px);
    }

  `;
};

const funcs = {
  borderAnim,
  showComp,
  opaTranslate,
};

export default funcs;
