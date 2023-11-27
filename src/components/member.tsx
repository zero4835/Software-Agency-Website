import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

const Member: React.FC<Props> = ({ id, name, socialId, link }) => (
  <div>
    <Image
      src={`assets/team/member_faces_${id}.svg`}
      alt={name}
      width={1336}
      height={1555}
    />
    <div className=''>{name}</div>
    <div className=''>
      <Link href={link}>
        <a target='_blank'>{socialId}</a>
      </Link>
    </div>
  </div>
);

export default Member;