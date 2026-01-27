import parse from "html-react-parser";
import Button from "./Button";
import Div from "./Div";
import Spacing from "./Spacing";

export default function SectionHeading({
  title,
  subtitle,
  btnLink,
  btnText,
  variant,
  children,
}: {
  title: string;
  subtitle: string;
  btnLink?: string;
  btnText?: string;
  variant?: string;
  children?: React.ReactNode;
}) {
  return (
    <Div
      className={
        variant
          ? `cs-section_heading ${variant}`
          : `cs-section_heading cs-style1`
      }
    >
      <h3 className="cs-section_subtitle">{parse(subtitle)}</h3>
      <h2 className="cs-section_title">{parse(title)}</h2>
      {children}
      {btnText && (
        <>
          <Spacing lg="45" md="20" />
          <Button btnLink={btnLink || ""} btnText={btnText} />
        </>
      )}
    </Div>
  );
}
