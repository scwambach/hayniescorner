import { PortableText } from "next-sanity";
import type { IntrinsicElement } from "@/utils/jsx";
import { slugify } from "@/utils/slugify";
import { Elements } from "@/utils/types";
import { ImageObject } from "../modules/ImageObject";

export interface PortableProps {
  content: any[];
  gap?: string;
  headingClasses?: string;
  className?: string;
  componentId?: string;
  elementTag?: Elements;
}

export const Portable = ({
  content,
  className,
  elementTag,
  gap = "gap-8",
  componentId,
  headingClasses,
}: PortableProps) => {
  const elm = elementTag || "div";
  const Element = elm as IntrinsicElement;

  const customBlockComponents = {
    types: {
      image: ({ value }: { value: any }) => {
        return (
          <div>
            <ImageObject {...value} alt="" imageWidth={600} />
          </div>
        );
      },
    },
    marks: {
      link: ({
        children,
        value,
      }: {
        children: React.ReactNode;
        value: any;
      }) => {
        const rel = value.href?.startsWith("http")
          ? "noopener noreferrer"
          : undefined;
        return (
          <a
            href={value.href}
            rel={rel}
            target={value.href?.startsWith("http") ? "_blank" : undefined}
            className="font-extrabold"
          >
            {children}
          </a>
        );
      },
    },
    block: {
      h1: ({ children }: { children: string }) => (
        <h1
          id={slugify(children[0])}
          className={`text-pretty heading ${headingClasses ? ` ${headingClasses}` : ""}`}
        >
          {children}
        </h1>
      ),
      h2: ({ children }: { children: string }) => (
        <h2
          id={slugify(children[0])}
          className={`text-pretty heading ${headingClasses ? ` ${headingClasses}` : ""}`}
        >
          {children}
        </h2>
      ),
      h3: ({ children }: { children: string }) => (
        <h3
          id={slugify(children[0])}
          className={`text-pretty heading ${headingClasses ? ` ${headingClasses}` : ""}`}
        >
          {children}
        </h3>
      ),
      h4: ({ children }: { children: string }) => (
        <h4
          id={slugify(children[0])}
          className={`text-pretty heading ${headingClasses ? ` ${headingClasses}` : ""}`}
        >
          {children}
        </h4>
      ),
      h5: ({ children }: { children: string }) => (
        <h5
          id={slugify(children[0])}
          className={`text-pretty heading ${headingClasses ? ` ${headingClasses}` : ""}`}
        >
          {children}
        </h5>
      ),
      h6: ({ children }: { children: string }) => (
        <h6
          id={slugify(children[0])}
          className={`text-pretty heading ${headingClasses ? ` ${headingClasses}` : ""}`}
        >
          {children}
        </h6>
      ),
      normal: ({ children }: { children: string }) => (
        <p className="text-pretty leading-[1.6]">{children}</p>
      ),
    },

    list: {
      bullet: ({ children }: { children: string }) => (
        <ul className="list-disc list-inside">{children}</ul>
      ),
      number: ({ children }: { children: string }) => (
        <ol className="list-decimal list-inside">{children}</ol>
      ),
    },
  } as any;

  return (
    <Element
      id={componentId}
      className={`portable${className ? ` ${className}` : ""} flex flex-col ${gap}`}
    >
      <PortableText value={content} components={customBlockComponents} />
    </Element>
  );
};
