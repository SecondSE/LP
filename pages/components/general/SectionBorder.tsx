import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
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
  toggle: boolean;
  originX: string;
  originY: string;
  section: number;
}

const SectionBorder: React.FC<BorderProps> = function ({
  originX = "right",
  originY = "top",
  toggle,
  section,
}) {
  return (
    <BorderWrapper>
      <MaxWrapper>
        <RelativeWrapper>
          {section !== 0 ? <TopBorder origin={originX} /> : null}
          <CSSTransition
            in={toggle}
            appear={toggle}
            timeout={1000}
            classNames="anim"
          >
            <LeftBorder origin={originY} />
          </CSSTransition>
          <CSSTransition
            in={toggle}
            appear={toggle}
            timeout={1000}
            classNames="anim"
          >
            <RightBorder origin={originY} />
          </CSSTransition>
        </RelativeWrapper>
      </MaxWrapper>
    </BorderWrapper>
  );
};

export default SectionBorder;
