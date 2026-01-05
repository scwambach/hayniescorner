"use client";
import { useEffect, useState } from "react";
import Wiffle from "../svg/Wiffle";
import Link from "next/link";
import { Container } from "../modules/Container";
import { breakpoints } from "@/styles";
import { GlobalProps } from "@/app/(site)/layout";

export const Header = ({
  logo,
  navigation,
  siteTitle,
  subPage,
}: {
  logo?: GlobalProps["site"]["mainLogo"];
  navigation?: GlobalProps["navigation"];
  siteTitle?: GlobalProps["site"]["siteTitle"];
  subPage?: boolean;
}) => {
  const splitAtSecondSpace = (str: string) => {
    const words = str.split(" ");
    if (words.length <= 2) {
      return (
        <span>
          <span className="font-bold uppercase text-logoBold">{str}</span>
        </span>
      );
    } else {
      const firstPart = words.slice(0, 2).join(" ");
      const secondPart = words.slice(2).join(" ");
      return (
        <span>
          <span className="font-bold uppercase text-logoBold block">
            {firstPart}{" "}
          </span>
          <span className="font-medium uppercase text-logo block">
            {secondPart}
          </span>
        </span>
      );
    }
  };

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.oldScroll < window.scrollY && window.scrollY > 100) {
        setScrollingDown(true);
      } else if (window.scrollY < 100) {
        setScrollingDown(false);
      }

      window.oldScroll = window.scrollY;
    };
  }, []);

  const today = new Date();
  const date = new Date("10/24/2023");
  const isPast = today > date;

  return (
    <header
      className={`header text-white transition-all ease-in-out fixed ${
        subPage || scrollingDown ? "bg-black " : ""
      }top-0 left-0 w-full z-30`}
    >
      <Container maxWidth={breakpoints.xxl}>
        <div className="flex justify-between items-start">
          <Link href="/">
            <div className="flex my-1 md:my-4 items-center">
              {logo && (
                <span
                  dangerouslySetInnerHTML={{
                    __html: logo,
                  }}
                />
              )}
              <span className="my-2 ml-5 mt-ten tracking-logo logo-copy-container">
                {siteTitle && <>{splitAtSecondSpace(siteTitle)}</>}
              </span>
            </div>
          </Link>
          <nav className="navigation lg:mr-twenty">
            <button
              name="Menu Toggle"
              className={`toggle block w-10 mr-0 ml-auto my-6 md:my-8 lg:hidden ${
                menuOpen ? "open" : "close"
              }`}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <span className="bar block bg-white h-1 w-full" />
              <span className="bar block bg-white mt-five h-1 w-full" />
              <span className="bar block bg-white mt-five h-1 w-full" />
            </button>
            <ul
              className={`lg:flex text-navItem uppercase font-bold tracking-nav ${
                menuOpen ? "open" : "close"
              }`}
            >
              {navigation?.map((item) => {
                const { _key, url, copy } = item;
                return (
                  <li
                    className={`relative transition-all ease-in-out opacity-0 lg:opacity-100 lg:ml-navItem `}
                    key={_key}
                  >
                    <Link
                      href={url}
                      className={`nav-item relative block p-5 lg:p-0 lg:py-thirty lg:min-w-menuItem text-center`}
                    >
                      {copy}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {!isPast && (
              <Link
                className="wiffle-icon hidden lg:block absolute top-2 xxxl:top-3 right-2 xxxl:right-7"
                href="/wiffle-ball"
              >
                <Wiffle size={30} />
                <span className="caption w-16 text-xs absolute top-full left-1/2 -translate-x-1/2 bg-white text-black text-center p-px mt-1 rounded-[5px]">
                  Wiffle Ball
                </span>
              </Link>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
};
