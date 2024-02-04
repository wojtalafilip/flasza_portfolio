"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mobileNavToggle } from "@/src/redux/features/nav-slice";

function ContactContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mobileNavToggle(false));
  }, []);

  return (
    <div className="px-8 pt-20">
      <div className="flex">
        <p>Email:&nbsp;</p>
        <a
          href="mailto: kingaflasza328@gmail.com"
          className="hover:text-cobalt hover:duration-200"
        >
          kingaflasza328@gmail.com
        </a>
      </div>
      <p>
        Instagram:{" "}
        <a
          href="https://www.instagram.com/kinga.flasza/"
          className="hover:text-cobalt hover:duration-200"
        >
          @kinga.flasza
        </a>
      </p>
    </div>
  );
}

export default ContactContainer;
