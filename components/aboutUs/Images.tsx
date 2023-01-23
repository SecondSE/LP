import {
  StyledLowerDiv,
  StyledBigImage,
  StyledSmallImage,
  StyledImagesDiv,
  StyledSmallImageB,
  StyledBigImageDiv,
} from "../styles/AboutUs.styled";
import SoundMintImage from "../../public/imgs/aboutUs/SoundMintNeon.webp";
import NateGiftHuntImage from "../../public/imgs/aboutUs/NateGiftHunt.webp";
import WinnerWonderLandImage from "../../public/imgs/aboutUs/WinnerWonderland.webp";
export default function Images() {
  return (
    <StyledLowerDiv>
      <StyledBigImageDiv>
        <StyledBigImage src={SoundMintImage} alt="SoundMint Image" />
      </StyledBigImageDiv>
      <StyledImagesDiv>
        <StyledSmallImageB src={NateGiftHuntImage} alt="Gift Hunt Image" />
        <StyledSmallImage
          src={WinnerWonderLandImage}
          alt="Winner wonderland Image"
        />
      </StyledImagesDiv>
    </StyledLowerDiv>
  );
}
