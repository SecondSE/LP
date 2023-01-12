import { useState } from "react";
import caseStudies from "./CaseStudies";
import { CaseContext } from "./CaseContext";

interface CaseProps {
  children: JSX.Element[];
}

export default function Case({children}: CaseProps) {
  const [case, setCase] = useState(0);

  

  return (
    <>
      <Case1 />
      <Case2 />
      <Case3 />
    </>
  );
}
