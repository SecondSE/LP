const borderAnim = function (dirScale: string) {
  return `
  .anim-appear,
  .anim-enter {
    transform: scale${dirScale}(0);
  }

  .anim-appear-active,
  .anim-enter-active {
    transform: scale${dirScale}(1);
    transition: transform 300ms ease-in;
  }

  .anim-appear-done,
  .anim-enter-done {
    transform: scale${dirScale}(1);
  }
`;
};

const showComp = function () {
  return `
    .show-appear,
    .show-enter {
      opacity: 0;
    }

    .show-appear-active,
    .show-enter-active {
      opacity: 1;
      transition: opacity 300ms ease-out;
    }

    .show-appear-done,
    .show-enter-done {
      opacity: 1;
    }
  `;
};

const funcs = {
  borderAnim,
  showComp,
};

export default funcs;
