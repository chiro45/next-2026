
'use client'
import Link from "next/link";

import styles from './ActiveLink.module.css'
import { usePathname } from "next/navigation";

type Props = {
  label: string;
  route: string;
};

export const ActiveLink = ({ route, label }: Props) => {

    const pathName = usePathname()
    
  return (
    <Link className={`${styles.link} ${pathName === route  && styles['active-link']}`} key={route} href={route}>
      {label}
    </Link>
  );
};
