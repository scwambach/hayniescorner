"use client";
import Link from "next/link";

export interface LinkObjectProps {
  anchor?: boolean;
  anchorName?: string;
  children?: any | any[];
  classes?: string;
  copy?: string;
  index?: number;
  newTab?: boolean;
  setActiveIndex?: (index: number) => void;
  url?: string;
}

export const LinkObject = ({
  anchor,
  anchorName,
  children,
  classes,
  copy,
  index,
  newTab,
  setActiveIndex,
  url = "/",
}: LinkObjectProps) => {
  const isSelf = () => {
    return url.indexOf("http") < 0;
  };

  return (
    <>
      {isSelf() ? (
        <Link
          href={url}
          onFocus={() => {
            if (setActiveIndex && index !== undefined) setActiveIndex(index);
          }}
          className={classes}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          <span className="relative">{children || copy}</span>
        </Link>
      ) : anchor ? (
        <a
          onFocus={() => {
            if (setActiveIndex && index !== undefined) setActiveIndex(index);
          }}
          className={classes}
          href={url}
        >
          <span className="relative">{children || copy}</span>
        </a>
      ) : (
        <a
          onFocus={() => {
            if (setActiveIndex && index !== undefined) setActiveIndex(index);
          }}
          className={classes}
          onClick={(e) => {
            if (anchor && anchorName) {
              e.preventDefault();
              const elem = document.getElementById(anchorName);
              elem?.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
              });
            }
          }}
          href={
            classes === "phone"
              ? `tel:${url}`
              : classes === "email"
                ? `mailto:${url}`
                : url
          }
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          <span className="relative">{children || copy}</span>
        </a>
      )}
    </>
  );
};
