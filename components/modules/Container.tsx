interface Props {
  maxWidth?: number | string;
  children?: any;
  edges?: boolean;
}

const Container = ({ maxWidth, edges = false, children }: Props) => {
  return (
    <div
      className={`w-full mx-auto${!edges ? ' p-wrapMobile md:p-wrap' : ''}`}
      style={{
        maxWidth: typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`,
      }}
    >
      {children}
    </div>
  );
};

export { Container };
export default Container;
