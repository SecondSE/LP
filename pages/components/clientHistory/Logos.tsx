import {
  StyledTrapNationImage,
  StyledOnlyNYImage,
  StyledBBClubImage,
  StyledWhaleBoneImage,
  StyledSoundMintImage,
  StyledNateImage,
  StyledLogoDiv,
} from "../styles/ClientHistory.styled";
import bBClubImg from "../../../public/imgs/clients/bBClub.svg";
import NateImg from "../../../public/imgs/clients/Nate.png";
import onlyNYImg from "../../../public/imgs/clients/onlyNY.png";
import soundMintImg from "../../../public/imgs/clients/soundMint.png";
import trapNationImg from "../../../public/imgs/clients/trapNation.png";
import whaleBoneImg from "../../../public/imgs/clients/whaleBone.png";

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
