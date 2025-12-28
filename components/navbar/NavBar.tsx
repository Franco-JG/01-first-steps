import { House } from "lucide-react"
import Link from "next/link"
import { ActiveLink } from "@/components";


const navItems = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/pricing", label: "Pricing" },
]

export const NavBar = () => {
  return (
    <nav className="flex bg-sky-950 m-2 p-2 rounded-lg gap-2 text-white">
        <Link className="flex items-center gap-1 flex-1" href="/">
          <House size={"1rem"}/>
          Home
        </Link>
        {/* //alt Opcion con destructuring */}
        {/* { navItems.map(
          ({ href, label }) => (
            <ActiveLink key={label} href={href} label={label}/>
          )
        )} */}
        {/* //alt Opcion sin destructuring, con spread operator */}
        { navItems.map(
          navItem => (
            <ActiveLink key={navItem.href} {...navItem}/>
          )
        )}
    </nav>
  )
}
