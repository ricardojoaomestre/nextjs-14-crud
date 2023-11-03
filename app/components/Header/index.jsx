import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <Link className="btn btn-ghost normal-case text-xl" href="/">
        Home
      </Link>

      <ul className="menu menu-horizontal px-1">
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
