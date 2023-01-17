const breakpoints = {
  tiny: "0",
  iphoneSE: "320",
  small: "375",
  phoneMed: "487",
  phoneLg: "530",
  tablet: "768",
  tabletLg: "992",
  iPadPro: "1024",
  desktopS: "1200",
  desktopM: "1600",
  desktopL: "1920",
  desktopXL: "2560",
};

function mq(device: string, bounds: string, mode = "portrait") {
  const bpArray: string[][] = Object.keys(breakpoints).map(function bpValues(
    bpKey
  ) {
    //@ts-ignore
    return [bpKey, breakpoints[bpKey]];
  });

  const [result] = bpArray.reduce(function makeQuery(acc, [name, size]) {
    if (name === device) {
      return [...acc, `@media screen and (${bounds}-width: ${size}px)`];
    }
    return acc;
  }, []);

  return result;
}

export default mq;
