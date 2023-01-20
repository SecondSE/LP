import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
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
  const lBorder = useRef<HTMLDivElement>(null);
  const rBorder = useRef<HTMLDivElement>(null);
  const tBorder = useRef<HTMLDivElement>(null);
  return (
    <BorderWrapper>
      <MaxWrapper>
        <RelativeWrapper>
          {section !== 0 ? <TopBorder ref={tBorder} origin={originX} /> : null}
          <CSSTransition
            nodeRef={lBorder}
            in={toggle}
            appear={toggle}
            timeout={1000}
            classNames="anim"
          >
            <LeftBorder ref={lBorder} origin={originY} />
          </CSSTransition>
          <CSSTransition
            nodeRef={rBorder}
            in={toggle}
            appear={toggle}
            timeout={1000}
            classNames="anim"
          >
            <RightBorder ref={rBorder} origin={originY} />
          </CSSTransition>
        </RelativeWrapper>
      </MaxWrapper>
    </BorderWrapper>
  );
};

export default SectionBorder;
