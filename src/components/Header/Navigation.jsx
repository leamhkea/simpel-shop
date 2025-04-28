"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BasketIcon from "./BasketIcon";
import SearchBar from "./SearchBar";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 px-(--content-width) w-full bg-white z-1 shadow-md">
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
          <Link href="/basket">
            <li>
              <BasketIcon />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import BasketIcon from "./BasketIcon";

// const Navigation = () => {
//   const pathname = usePathname();
//   return (
//     <section>
//       <nav>
//         <ul className="flex items-center fixed top-0 py-4">
//           <div className="flex gap-8">
//             <Link href="/">
//               <li
//                 className={pathname === "/" ? "text-[#F2968F]" : "text-black"}
//               >
//                 Home
//               </li>
//             </Link>
//             <Link href="/products">
//               <li
//                 className={
//                   pathname === "/products" ? "text-[#F2968F]" : "text-black"
//                 }
//               >
//                 Products
//               </li>
//             </Link>
//           </div>

//           <Link href="/basket">
//             <li>
//               <BasketIcon
//                 className={
//                   pathname === "/basket" ? "text-[#F2968F]" : "text-black"
//                 }
//               />
//             </li>
//           </Link>
//         </ul>
//       </nav>
//     </section>
//   );
// };

// export default Navigation;
