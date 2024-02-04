"use client";

import { Turn as NavBtn } from "hamburger-react";
import { mobileNavToggle } from "@/src/redux/features/nav-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function MobileNavBtn() {
  const navStatus = useSelector((state) => state.navReducer.value.isOpen);
  const dispatch = useDispatch();

  return (
    <div className="hidden w-3/6 items-center justify-end sm:flex md:flex">
      <NavBtn
        toggled={navStatus}
        toggle={() => dispatch(mobileNavToggle(!navStatus))}
        color={"#0001c0"}
        label="Show menu"
        hideOutline={true}
        rounded
        distance="md"
        size={30}
      />
    </div>
  );
}

export default MobileNavBtn;
