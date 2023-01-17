const breakpoints = {
  tiny: "0",
  iphoneSE: "320",
  small: "375",
  phoneMed: "487",
  phoneLg: "530",
  custom1: "590",
  custom4: "655",
  tablet: "768",
  custom3: "860",
  custom2: "890",
  tabletLg: "992",
  iPadPro: "1024",
  desktopS: "1200",

  customX: "1367",
  desktopM: "1600",
  desktopL: "1920",
  desktopXL: "2560",
};

function mq(device: string, bounds: string, mode = "portrait") {
  const bpArray = Object.keys(breakpoints).map(function bpValues(bpKey) {
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
