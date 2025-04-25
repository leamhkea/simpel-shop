"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BasketIcon from "./BasketIcon";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex justify-between items-baseline fixed top-0 w-full py-4">
        <div className="grid gap-8">
          <Link href="/">
            <li
              className={pathname === "/" ? "text-[#F2968F]" : "text-gray-400"}
            >
              Home
            </li>
          </Link>
          <Link href="/products">
            <li
              className={pathname === "/" ? "text-[#F2968F]" : "text-gray-400"}
            >
              Products
            </li>
          </Link>
        </div>
        <Link href="/basket">
          <li>
            <BasketIcon
              className={pathname === "/" ? "text-[#F2968F]" : "text-gray-400"}
            />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
