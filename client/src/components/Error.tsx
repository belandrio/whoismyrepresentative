import React, { memo } from "react";
import CloseIcon from "../icons/closeIcon";

type ErrorProps = {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

const ErrorToaster: React.FC<ErrorProps> = ({ setError }) => {
  return (
    <div className="flex items-center w-full p-4 text-black bg-white rounded-lg border-2 border-red-200">
      <div className="ml-3 text-xl font-normal">Something went wrong!</div>
      <div className="ml-3 text-sm font-normal">
        Please try again in few minutes...
      </div>

      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
        data-dismiss-target="#toast-default"
        aria-label="Close"
        onClick={() => setError(false)}
      >
        <CloseIcon />
      </button>
    </div>
  );
};
export default memo(ErrorToaster);
