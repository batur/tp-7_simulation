import React from "react";

type RewindProps = {
  isRewinding: boolean;
  rewindDirection: "up" | "down" | null;
};

const Rewind: React.FC<RewindProps> = ({ isRewinding, rewindDirection }) => {
  return (
    <path
      className={`rewind ${isRewinding && `rewind-${rewindDirection}`}`}
      fill="none"
      d="M94.117 260.195a5.305 5.305 0 1 1-10.61 0V86.578a5.305 5.305 0 1 1 10.61 0v73.611a4.726 4.726 0 0 0 2.855 4.34 9.645 9.645 0 0 1 0 17.714 4.726 4.726 0 0 0-2.855 4.34v73.612Z"
    />
  );
};

export default Rewind;
