import Div from "./Div";

export default function Spacing({ lg, md }: { lg: string; md: string }) {
  return <Div className={`cs-height_${lg} cs-height_lg_${md}`}></Div>;
}
