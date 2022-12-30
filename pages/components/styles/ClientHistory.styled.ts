import styled from "styled-components";
import Image from "next/image"
import mq from "../../../utils/mq";

export const StyledClientSection = styled.section`
    border-top: 1px white solid;
`;

export const StyledDiv= styled.div`
    max-width:1600px;
    margin: 30px  auto 50px auto;
`;

export const StyledUpperDiv = styled.div`
    color:white;
    margin: 0 auto:
`;

export const StyledH1 = styled.h1`
 font-size: 3rem;
 ${mq("tiny", "min")} {
    text-align: center;
    margin: auto;
  }
  ${mq("custom1", "min")} {
    text-align: left;
    margin: none;
  } ;
`;

export const StyledP = styled.p`
 font-size: 1rem;
 ${mq("tiny", "min")} {
    text-align: center;
    margin: 20px auto 30px auto;
  }
  ${mq("custom1", "min")} {
    text-align: left;

    margin: 30px 15px 25px 33%;
  } ;
 
`;

export const StyledLogoDiv = styled.div`
    
    ${mq("tiny", "min")} {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        gap: 20px 0;
    }
    ${mq("custom1", "min")} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        justify-items: center;
        
      } ;
    ${mq("custom2", "min")} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        justify-items: center;
        
    } ;

`;

const ImageSizing = styled(Image)`
 
`;

export const StyledTrapNationImage = styled(ImageSizing)`

`;
export const StyledOnlyNYImage  = styled(ImageSizing)`

`;
export const StyledBBClubImage  = styled(ImageSizing)`
   
`;
export const StyledWhaleBoneImage = styled(ImageSizing)`
   
`;

// sound mint logo has inline height styling at Logos.tsx
export const StyledSoundMintImage = styled(ImageSizing)`
${mq("tiny", "min")} {
    height: 70px;
}
${mq("custom1", "min")} {
    height: 50px;
  } ;
${mq("custom2", "min")} {
    height: 70px;

} ;
`;
export const StyledNateImage = styled(ImageSizing)`
   
`;