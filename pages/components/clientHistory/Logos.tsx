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
      <StyledTrapNationImage src={trapNationImg} alt="Trap Nation Logo" />
      <StyledSoundMintImage src={soundMintImg} alt="SoundMint Logo" />
      <StyledWhaleBoneImage src={whaleBoneImg} alt="WhaleBone Logo" />
      <StyledBBClubImage src={bBClubImg} alt="Billionaire Boys Club Logo" />
      <StyledOnlyNYImage src={onlyNYImg} alt="OnlyNY Logo" />
    </StyledLogoDiv>
  );
}
