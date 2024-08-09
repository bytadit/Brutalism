import Link from "next/link";
import React from "react";
import Logo from "./Logo";

export default function NavbarLogo({ bgColor }: { bgColor: string }) {
  return (
    <>
      <div className="text-center sm:mb-0">
        <Link href="/">
          <aside className="flex flex-row justify-between gap-1 items-center sm:m-0">
          <Logo bgcolor={`${bgColor}`} />
            <span className="text-xl flex flex-col text-white">
              <p className={`font-bold text-[${bgColor}]`}>Bytadit</p>
            </span>
          </aside>
        </Link>
      </div>
    </>
  );
}
