"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BasketIcon from "./BasketIcon";
import DropDownBasket from "./DropDownBasket";
import React, { useState, useRef } from "react";
import useItemStore from "@/store/itemStore";

const Navigation = () => {
  const { items } = useItemStore((state) => state);
  const pathname = usePathname();
  const [isHovering, setIsHovering] = useState(false); // State til at håndtere hover-tilstand
  const timeoutRef = useRef(null); // Reference til timeout for at kontrollere forsinkelsen af hover

  // Funktion der aktiveres, når musen kommer ind på kurvikonet
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Rydder eventuelle tidligere timeout, så hover ikke afbrydes for hurtigt
    setIsHovering(true); // Sætter state til at vise dropdown
  };

  // Funktion der aktiveres, når musen forlader kurvikonet
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 200); // Forsinkelse på 200ms for at sikre at hover-tilstanden ikke forsvinder for hurtigt
  };

  return (
    <header className="fixed top-0 px-(--content-width) w-full bg-white z-10 shadow-md">
      <nav>
        <ul className="flex items-center justify-between py-4 px-8">
          {/* Venstre side */}
          <div className="flex gap-8">
            <Link href="/">
              <li className={pathname === "/" ? "underline" : "text-black"}>
                Home
              </li>
            </Link>
            <Link href="/products">
              <li
                className={
                  pathname === "/products" ? "underline" : "text-black"
                }
              >
                Products
              </li>
            </Link>
          </div>

          {/* Højre side: kurv */}
          <li
            className="relative"
            onMouseEnter={handleMouseEnter} // Starter hover når musen kommer ind på elementet
            onMouseLeave={handleMouseLeave} // Starter timeout, når musen forlader elementet
          >
            <Link href="/basket">
              <BasketIcon />
            </Link>

            {isHovering && (
              <div className="absolute right-0 z-1 mt-2 w-120 bg-white shadow-lg p-8">
                <DropDownBasket />
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
