import Image from "next/image";
import Div from "../ui/Div";

export default function AuthorWidget({
  src,
  name,
  description,
}: {
  src: string;
  name: string;
  description: string;
}) {
  return (
    <Div className="cs-author_card text-center">
      <Image
        src={src}
        alt="Author"
        width={100}
        height={100}
        className="cs-radius_50"
      />
      <h3>{name}</h3>
      <p>{description}</p>
    </Div>
  );
}
