import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import mq from "../../../utils/mq";

export const TopBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #fff;

  ${mq("tiny", "min")} {
    display: none;
  }

  ${mq("desktopS", "min")} {
    display: block;
  }
`;

export const BotBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #fff;
  ${mq("tiny", "min")} {
    display: none;
  }

  ${mq("desktopS", "min")} {
    display: block;
  }
`;

export const LeftBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
  background-color: #fff;
  ${mq("tiny", "min")} {
    display: none;
  }

  ${mq("desktopS", "min")} {
    display: block;
  }
`;

export const RightBorder = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  background-color: #fff;
  ${mq("tiny", "min")} {
    display: none;
  }

  ${mq("desktopS", "min")} {
    display: block;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  text-decoration: none;
`;

export const FillImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
