import {
  StyledLowerDiv,
  StyledBigImage,
  StyledSmallImage,
  StyledImagesDiv,
  StyledSmallImageB,
  StyledBigImageDiv,
} from "../styles/AboutUs.styled";
import SoundMintImage from "../../../assets/SoundMintNeon.webp";
import NateGiftHuntImage from "../../../assets/NateGiftHunt.webp";
import WinnerWonderLandImage from "../../../assets/WinnerWonderland.webp";
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
