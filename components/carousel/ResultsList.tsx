import { CaseList, ListItem } from "../styles/CaseStudies";

interface ListProps {
  arr: string[];
}

const ResultsList: React.FC<ListProps> = function ({ arr }) {
  return (
    <CaseList>
      {arr.map((elem, i) => (
        <ListItem key={i}>{elem}</ListItem>
      ))}
    </CaseList>
  );
};

export default ResultsList;
