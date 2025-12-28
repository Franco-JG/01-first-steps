'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import style from "./ActiveLink.module.css";

interface Props {
    href: string,
    label: string
    
}

//alt export const ActiveLink: React.FC<Props> = ({href, label}) => {
export const ActiveLink = ({href, label}: Props) => {

  const pathname = usePathname();
  console.log(pathname)

return (
    <Link 
      href={href}
      className={`${style.link} ${pathname === href && style.active}`}
    >
      {label}
    </Link>
  )
}