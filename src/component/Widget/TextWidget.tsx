import Image from "next/image";
import Div from "../ui/Div";

export default function TextWidget({
  logoSrc,
  logoAlt,
  text,
}: {
  logoSrc: string;
  logoAlt: string;
  text: string;
}) {
  return (
    <Div className="cs-text_widget">
      <Image src={logoSrc} alt={logoAlt} width={100} height={100} />
      <p>{text}</p>
    </Div>
  );
}
