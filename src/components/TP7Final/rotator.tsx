import React from "react";

type RotatorProps = {
  isStopped: boolean;
  isPlaying: boolean;
  isRewinding: boolean;
  rotateDirection: "up" | "down" | null;
};

const Rotator: React.FC<RotatorProps> = ({
  isStopped,
  isPlaying,
  isRewinding,
  rotateDirection,
}) => {
  const isRotate = isRewinding || isPlaying;
  return (
    <g
      className={`rotate ${isStopped && "rotate-reset"} ${
        !isRotate && "rotate-paused"
      } rotate-fast-${rotateDirection}`}
    >
      <path
        d="M113.908 173.386v-.474c.256-60.766 49.596-109.948 110.422-109.948 60.985 0 110.422 49.438 110.422 110.423S285.315 283.809 224.33 283.809s-110.422-49.438-110.422-110.423Z"
        fill="none"
      ></path>
      <circle cx={224.33} cy={173.387} r={28.936} fill="none" className="s" />
      <path fill="none" d="M224.33 140.592v-74.27m0 139.859v74.27" />
      <path
        d="M146.028 176.22c-.884 0-1.513-.473-1.573-1.431h.532c.03.644.39.988 1.033.988 1.243 0 1.303-1.527 1.348-2.643-.285.577-.749.884-1.37.884-.959 0-1.588-.727-1.588-1.708 0-1.018.719-1.722 1.692-1.707 1.273.015 1.708 1.078 1.708 2.516 0 1.213-.18 3.1-1.782 3.1Zm.075-5.213c-.727 0-1.199.562-1.199 1.303 0 .727.397 1.288 1.124 1.288.748 0 1.228-.532 1.228-1.31 0-.72-.45-1.28-1.154-1.28Zm4.327 5.167c-1.497 0-1.797-1.37-1.797-2.643 0-1.453.375-2.943 1.828-2.943 1.033 0 1.542.63 1.542 1.385h-.532c-.052-.629-.352-.966-1.01-.966-1.191 0-1.318 1.52-1.34 2.464.261-.592.755-.876 1.377-.876 1.01 0 1.565.779 1.565 1.775 0 .988-.659 1.804-1.632 1.804Zm.016-3.182c-.772 0-1.221.621-1.221 1.393 0 .726.442 1.355 1.176 1.355.778 0 1.153-.63 1.153-1.385 0-.734-.345-1.363-1.108-1.363Zm4.544 3.19h-.47l1.774-5.594h.464l-1.767 5.594Zm4.24-.082v-.517c.763-.697 2.036-1.962 2.515-2.86.112-.21.172-.458.172-.697 0-.644-.427-1.026-1.033-1.026-.651 0-1.093.434-1.086 1.123h-.509c.015-.98.689-1.535 1.602-1.535.869 0 1.535.464 1.535 1.393 0 .779-.561 1.438-1.026 1.992-.494.591-1.1 1.16-1.647 1.7h2.74v.426h-3.264Zm6.952-1.214v1.213h-.487v-1.213h-2.434v-.524l2.314-3.676h.607v3.788h.83v.412h-.83Zm-.48-3.684-2.014 3.273h2.015v-3.273Z"
        className="f"
      />

      <circle cx={224.33} cy={150.651} r={2.067} fill="none" className="s" />
      <circle cx={204.64} cy={184.754} r={2.067} fill="none" className="s" />
      <circle cx={244.019} cy={184.754} r={2.067} fill="none" className="s" />
      <path
        d="M290.691 170.642c-.51 0-.982.148-1.394.389a2.755 2.755 0 0 0-1.395-.389 2.794 2.794 0 0 0 0 5.586c.51 0 .983-.148 1.395-.388.412.24.884.388 1.394.388 1.538 0 2.79-1.253 2.79-2.793s-1.252-2.793-2.79-2.793Zm-2.789 5.394a2.602 2.602 0 0 1 0-5.201c.436 0 .84.118 1.202.309-.724.505-1.202 1.342-1.202 2.291s.478 1.787 1.202 2.292a2.57 2.57 0 0 1-1.202.309Zm1.395-4.787c.72.462 1.202 1.267 1.202 2.186s-.481 1.724-1.202 2.187a2.6 2.6 0 0 1-1.203-2.187c0-.919.482-1.724 1.203-2.186Zm1.394 4.787a2.56 2.56 0 0 1-1.202-.31c.725-.504 1.202-1.342 1.202-2.291s-.477-1.786-1.201-2.291a2.56 2.56 0 0 1 1.201-.31 2.602 2.602 0 0 1 0 5.202ZM279.335 176.226c-.926 0-1.628-.501-1.68-1.51h.5c0 .702.597 1.106 1.217 1.106.657 0 1.247-.419 1.247-1.159s-.582-1.136-1.24-1.136c-.096 0-.193.007-.29.022v-.44c.097.014.201.022.298.022.597 0 1.128-.36 1.128-1.032 0-.695-.553-1.054-1.165-1.054-.665 0-1.053.359-1.135 1.054h-.493c.038-.95.777-1.458 1.628-1.458.858 0 1.657.441 1.657 1.436 0 .643-.425 1.076-.993 1.24.672.128 1.128.659 1.128 1.376 0 1.04-.919 1.533-1.807 1.533Zm27.442-.082v-5.002l-2.03 5.002h-.479l-2.038-5.002v5.002h-.456v-5.406h.799l1.95 4.823 1.932-4.823h.8v5.406h-.478Z"
        className="f"
      />
      <path
        d="M308.843 177.865h-8.657a.578.578 0 0 1-.577-.577v-7.705c0-.32.259-.578.577-.578h8.657c.318 0 .577.259.577.578v7.705c0 .318-.26.577-.577.577Zm-8.657-8.668a.385.385 0 0 0-.385.386v7.705c0 .212.173.385.385.385h8.657a.386.386 0 0 0 .385-.385v-7.705a.386.386 0 0 0-.385-.386h-8.657Z"
        className="f"
      />
    </g>
  );
};

export default Rotator;
