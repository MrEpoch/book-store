'use client';

import Link from "next/link";
import { ReactNode } from "react";

export default function ClosingLink({ children, className, href }: { children: ReactNode, className: string, href: string }) {

  function toggleMenu() {
    document.getElementById("is-hidden")?.classList.add("hidden");
  }

    return (
        <Link onClick={toggleMenu} href={href} className={className}>{children}</Link>
    )
}
