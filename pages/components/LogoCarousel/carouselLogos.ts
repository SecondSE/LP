import bBClubImg from "../../../public/imgs/clients/bBClub.svg";
import NateImg from "../../../public/imgs/clients/Nate.png";
import onlyNYImg from "../../../public/imgs/clients/onlyNY.png";
import soundMintImg from "../../../public/imgs/clients/soundMint.png";
import trapNationImg from "../../../public/imgs/clients/trapNation.png";
import whaleBoneImg from "../../../public/imgs/clients/whaleBone.png";

interface LogoData {
  img: string;
}

const carouselLogos: LogoData[] = [
  { img: bBClubImg },
  { img: NateImg },
  { img: onlyNYImg },
  { img: trapNationImg },
  { img: soundMintImg },
  { img: whaleBoneImg },
];

export default carouselLogos;
