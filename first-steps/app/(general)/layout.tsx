import { Navbar } from "@/components";
import type { ReactNode } from "react";

export default function AboutLayout({
 children
}: {
 children: ReactNode;
}) {
  return (
    <>
    <Navbar/>
    <main className="flex flex-col items-center p-24">
       <span className="text-5xl">Hola mundo</span>
       {children}
    </main>
    </>
  );
}