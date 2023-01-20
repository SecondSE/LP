import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    txtColor: string;
    mainFont: string;
    headFont: string;
    headFont2: string;
    headFont3: string;
    thinFont: string;
    caption: string;
    regSize: string;
    head1: string;
    head2: string;
    head3: string;
    head4: string;
    borderAnim: (dirScale: string) => string;
    showComp: () => string;
  }
}
