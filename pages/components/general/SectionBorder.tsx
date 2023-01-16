import {
  BorderWrapper,
  LeftBorder,
  RelativeWrapper,
  RightBorder,
} from "../styles/Main.styled";

import { MaxWrapper } from "../styles/Wrappers.styled";

const SectionBorder: React.FC = function () {
  return (
    <BorderWrapper>
      <MaxWrapper>
        <RelativeWrapper>
          <LeftBorder />
          <RightBorder />
        </RelativeWrapper>
      </MaxWrapper>
    </BorderWrapper>
  );
};

export default SectionBorder;
