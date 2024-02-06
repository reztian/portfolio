import Link from "next/link";
import React from "react";

interface ILink {
  url: string;
  title: string;
}

interface INavLinkProps {
  link: ILink;
}

const NavLink: React.FC<INavLinkProps> = ({ link }) => {
  return (
    <div>
      <Link href={link.url} className="">
        {link.title}
      </Link>
    </div>
  );
};

export default NavLink;
