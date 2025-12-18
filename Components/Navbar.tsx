"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

function NavLink(props: NavLinkProps) {
  return (
    <li>
      <Link
        href={props.href}
        className="text-[#333] no-underline transition-colors duration-300 hover:text-[#0056d2]"
      >
        {props.children}
      </Link>
    </li>
  );
}

function Hamburger({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="flex flex-col gap-[5px] cursor-pointer md:hidden"
      id="hamburger"
      onClick={onClick}
    >
      <span className="w-[25px] h-[3px] bg-[#333] rounded-[2px]"></span>
      <span className="w-[25px] h-[3px] bg-[#333] rounded-[2px]"></span>
      <span className="w-[25px] h-[3px] bg-[#333] rounded-[2px]"></span>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-[5%] py-4 relative">
      <div className="text-2xl font-bold text-[#0056d2]">Booking</div>

      <Hamburger onClick={() => setIsOpen(!isOpen)} />

      <ul
        className={`
          absolute top-[70px] right-[5%] w-48 flex-col gap-4 p-4 rounded-[10px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.1)] z-50
          
          ${isOpen ? "flex" : "hidden"} 

          md:static md:flex md:w-auto md:flex-row md:gap-8 md:p-0 md:bg-transparent md:shadow-none
        `}
        id="nav-links"
      >
        <NavLink href="/">Ajout réservation</NavLink>
        <NavLink href="/Booking">Booking</NavLink>
      </ul>
    </nav>
  );
}
