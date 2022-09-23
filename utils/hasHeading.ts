export const hasHeading = ({
  heading,
  subHeading,
  message,
}: {
  heading?: string;
  subHeading?: string;
  message?: any | any[];
}) => {
  return !!heading || !!subHeading || !!message;
};
