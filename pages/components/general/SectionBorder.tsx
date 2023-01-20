import { useContext } from "react";
import GlobalContext from "../../../context/global/GlobalContext";
import {
  BorderWrapper,
  LeftBorder,
  RelativeWrapper,
  RightBorder,
  TopBorder,
} from "../styles/General.styled";

import { MaxWrapper } from "../styles/Wrappers.styled";

interface BorderProps {
  tfrmOrigin: string;
}

const SectionBorder: React.FC<BorderProps> = function ({ tfrmOrigin }) {
  const globalContext = useContext(GlobalContext);

  const { secCount } = globalContext;

  return (
    <BorderWrapper>
      <MaxWrapper>
        <RelativeWrapper>
          <TopBorder className="test" />
          <LeftBorder className="test" />
          <RightBorder className="test" />
        </RelativeWrapper>
      </MaxWrapper>
    </BorderWrapper>
  );
};

export default SectionBorder;
