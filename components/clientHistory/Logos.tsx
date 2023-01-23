import {
  StyledTrapNationImage,
  StyledOnlyNYImage,
  StyledBBClubImage,
  StyledWhaleBoneImage,
  StyledSoundMintImage,
  StyledNateImage,
  StyledLogoDiv,
} from "../styles/ClientHistory.styled";
import bBClubImg from "../../public/imgs/clients/bBClub.svg";
import NateImg from "../../public/imgs/clients/Nate.png";
import onlyNYImg from "../../public/imgs/clients/onlyNY.png";
import soundMintImg from "../../public/imgs/clients/soundMint.png";
import trapNationImg from "../../public/imgs/clients/trapNation.png";
import whaleBoneImg from "../../public/imgs/clients/whaleBone.png";

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
