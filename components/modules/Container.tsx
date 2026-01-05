interface Props {
  maxWidth?: number | string;
  children?: any;
  edges?: boolean;
}

export const Container = ({ maxWidth, edges = false, children }: Props) => {
  return (
    <div
      className={`w-full mx-auto${
        !edges ? " px-5 sm:p-wrapMobile lg:p-wrap" : ""
      }`}
      style={{
        maxWidth: typeof maxWidth === "string" ? maxWidth : `${maxWidth}px`,
      }}
    >
      {children}
    </div>
  );
};
