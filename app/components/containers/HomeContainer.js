"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  mobileNavToggle,
  setWievportWidth,
} from "@/src/redux/features/nav-slice";

export default function HomeContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mobileNavToggle(false));
  }, []);

  return (
    <div className="flex justify-center">
      <Link href="/paintings">
        <div className="flex flex-col">
          <Image
            src="/img/other/home_picture.jpg"
            alt="Logo of the author"
            width={800}
            height={568.109}
            priority={true}
            style={{ width: "auto", height: "auto" }}
          />
          <p className="py-1 text-sm">
            {`Fala Gorąca, olej na płótnie, 240 x 160 cm, 2022`}
          </p>
        </div>
      </Link>
    </div>
  );
}
