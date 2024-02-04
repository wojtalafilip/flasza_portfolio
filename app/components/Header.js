"use client";

import Logo from "./Logo";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import { useSelector } from "react-redux";

export default function Header() {
  const navStatus = useSelector((state) => state.navReducer.value.isOpen);

  return (
    <>
      <div className="flex items-center justify-between pb-8 sm:pb-4">
        <Logo />
        <Navigation />
      </div>
      {navStatus ? <MobileNav /> : ""}
    </>
  );
}
