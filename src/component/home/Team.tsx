import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import Div from "../ui/Div";

export default function Team({
  memberImage,
  memberName,
  memberDesignation,
  memberSocial,
}: {
  memberImage: string;
  memberName: string;
  memberDesignation: string;
  memberSocial: {
    linkedin: string;
    twitter: string;
    youtube: string;
    facebook: string;
  };
}) {
  return (
    <Div className="cs-team cs-style1">
      <Div className="cs-member_thumb">
        <Image src={memberImage} alt={memberName} width={100} height={100} />
        <Div className="cs-member_overlay" />
      </Div>
      <Div className="cs-member_info">
        <h2 className="cs-member_name">
          <Link href="/team/team-details">{memberName}</Link>
        </h2>
        <Div className="cs-member_designation">{memberDesignation}</Div>
      </Div>
      <Div className="cs-member_social cs-primary_color">
        {memberSocial.linkedin && (
          <Link href={memberSocial.linkedin}>
            <Icon icon="fa6-brands:linkedin-in" />
          </Link>
        )}
        {memberSocial.twitter && (
          <Link href={memberSocial.twitter}>
            <Icon icon="fa-brands:twitter" />
          </Link>
        )}
        {memberSocial.youtube && (
          <Link href={memberSocial.youtube}>
            <Icon icon="fa-brands:youtube" />
          </Link>
        )}
        {memberSocial.facebook && (
          <Link href={memberSocial.facebook}>
            <Icon icon="fa-brands:facebook-f" />
          </Link>
        )}
      </Div>
    </Div>
  );
}
