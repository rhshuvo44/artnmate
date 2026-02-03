import Image from "next/image";
import Link from "next/link";
import Div from "../ui/Div";

export default function Post({
  url,
  src,
  alt,
  date,
  title,
}: {
  url: string;
  src: string;
  alt: string;
  date: string;
  title: string;
}) {
  return (
    <Div className="cs-post cs-style1">
      <Link href={url} className="cs-post_thumb">
        <Image src={src} alt={alt} width={400} height={300} />
        <Div className="cs-post_overlay" />
      </Link>
      <Div className="cs-post_info">
        <Div className="cs-posted_by">{date}</Div>
        <h2 className="cs-post_title">
          <Link href="blog-details.html">{title}</Link>
        </h2>
      </Div>
    </Div>
  );
}
