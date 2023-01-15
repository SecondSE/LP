import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

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
