"use client";

// import { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNavBtn from "./MobileNavBtn";
// import { setWievportWidth } from "@/src/redux/features/nav-slice";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";

export default function Navigation() {
  // const wievportWidth = useSelector(
  //   (state) => state.navReducer.value.wievportWidth,
  // );

  // const dispatch = useDispatch();

  // const mobileNavRequirements = wievportWidth <= 878 ? true : false;

  // const onResize = () => {
  //   dispatch(setWievportWidth(window.innerWidth));
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", onResize);
  //   return () => window.removeEventListener("resize", onResize);
  // }, []);

  return (
    <>
      <MobileNavBtn />
      <DesktopNav />
    </>
  );
}
