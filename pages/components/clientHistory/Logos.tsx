import {
  StyledTrapNationImage,
  StyledOnlyNYImage,
  StyledBBClubImage,
  StyledWhaleBoneImage,
  StyledSoundMintImage,
  StyledNateImage,
  StyledLogoDiv,
} from "../styles/ClientHistory.styled";
import bBClubImg from "../../../assets/clientLogos/bBClub.svg";
import NateImg from "../../../assets/clientLogos/Nate.png";
import onlyNYImg from "../../../assets/clientLogos/onlyNY.png";
import soundMintImg from "../../../assets/clientLogos/soundMint.png";
import trapNationImg from "../../../assets/clientLogos/trapNation.png";
import whaleBoneImg from "../../../assets/clientLogos/whaleBone.png";

export default function Logos() {
  return (
    <StyledLogoDiv>
      <StyledNateImage src={NateImg} alt="Nate Logo" />
      <StyledTrapNationImage src={trapNationImg} alt="A logo for Trap Nation" />
      <StyledSoundMintImage
        src={soundMintImg}
        alt="A logo for SoundMint Logo"
      />
      <StyledWhaleBoneImage src={whaleBoneImg} alt="A logo for Whale Bone" />
      <StyledBBClubImage
        src={bBClubImg}
        alt="A logo for Billionaire Boys Club"
      />
      <StyledOnlyNYImage src={onlyNYImg} alt="A logo for OnlyNY" />
    </StyledLogoDiv>
  );
}
