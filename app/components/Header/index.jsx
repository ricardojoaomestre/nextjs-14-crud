import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-full bg-gray-300">
      <nav className="bg-gray-300 center py-12">
        <ul className="flex flex-row gap-3 text-lg capitalize font-semibold">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
