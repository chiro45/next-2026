
import { ActiveLink } from "../active-link/ActiveLink";
import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";

const arrLinks = [
  { route: "/about", label: "About" },
  { route: "/pricing", label: "Pricing" },
  { route: "/contact", label: "Contact" },
];

// const temporalAsync = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, 2000);
//   });
// };

export const Navbar = async () => {

  //await temporalAsync();
  return (
    <nav className="flex justify-between bg-blue-800 bg-opacity-30 0 p-2 m-2 rounded">
      <Link className="flex items-center gap-1" href={"/"}>
        <span>Home </span>
        <HomeIcon />
      </Link>

      <div>
        {arrLinks.map(({ route, label }) => (
          <ActiveLink key={route} route={route} label={label}/>
        ))}
      </div>
    </nav>
  );
};
