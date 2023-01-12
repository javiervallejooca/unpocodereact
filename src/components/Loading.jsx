import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <Oval
      ariaLabel="loading-indicator"
      height={100}
      width={100}
      strokeWidth={5}
      strokeWidthSecondary={1}
      color="blue"
      secondaryColor="white"
    />
  );
};

export default Loading;
