import {StyledTrapNationImage, StyledOnlyNYImage, StyledBBClubImage, StyledWhaleBoneImage,StyledSoundMintImage, StyledNateImage, StyledLogoDiv} from "../styles/ClientHistory.styled";
import bBClubImg from "../../../assets/clientLogos/bBClub.svg";
import NateImg from "../../../assets/clientLogos/Nate.svg";
import onlyNYImg from "../../../assets/clientLogos/onlyNY.svg";
import soundMintImg from "../../../assets/clientLogos/soundMint.svg";
import trapNationImg from "../../../assets/clientLogos/trapNation.svg";
import whaleBoneImg from "../../../assets/clientLogos/whaleBone.svg";


export default function Logos() {
    return ( 
            <StyledLogoDiv>
                <StyledNateImage src={NateImg} alt="Nate Logo" />
                <StyledSoundMintImage src={soundMintImg} alt="SoundMint Logo" height={70}/>
                <StyledWhaleBoneImage src={whaleBoneImg} alt="WhaleBone Logo" />
                <StyledBBClubImage src={bBClubImg} alt="Billionaire Boys Club Logo" />
                <StyledOnlyNYImage src={onlyNYImg} alt="OnlyNY Logo" />
                <StyledTrapNationImage src={trapNationImg} alt="Trap Nation Logo" />
            </StyledLogoDiv>
    )
}