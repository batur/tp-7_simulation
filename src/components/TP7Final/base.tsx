import * as React from "react";
import { SVGProps, memo } from "react";

type TP7Props = {
  props?: SVGProps<SVGSVGElement>;
  rotator: React.ReactNode;
  rewinder: React.ReactNode;
};

const SvgComponent: React.FC<TP7Props> = ({ props, rotator, rewinder }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={440}
    height={460}
    viewBox="0 0 440 460"
    style={{
      stroke: "#4d4d4d",
      strokeWidth: 0.5,
      fill: "#4d4d4d",
      zIndex: -9999,
    }}
    {...props}
  >
    {rotator}
    <path
      fill="none"
      d="M344.897 128.053h2.508l.386-.386V82.72l-.386-.386h-2.507v45.719zM344.897 204.638h2.315l.58-.58v-18.132l-.58-.58h-2.315v19.292zM344.897 161.233h2.315l.58-.578V142.52l-.58-.579h-2.315v19.291zM103.666 356.939h-2.315l-.579-.579v-51.506l.579-.58h2.315v52.665zM103.76 154.096v5.787c0 2.13-.44 3.858-2.57 3.858h-5.461m-.003 19.291h5.464c2.13 0 2.57 1.727 2.57 3.858v5.787"
    />
    <rect
      width={241.136}
      height={347.235}
      x={103.762}
      y={33.528}
      fill="none"
      rx={8.932}
      ry={8.932}
    />
    {rewinder}
    <path
      fill="none"
      d="M90.258 173.387a2.894 2.894 0 1 1 5.788 0 2.894 2.894 0 0 1-5.788 0ZM294.548 276.978a9.067 9.067 0 1 1 18.134 0 9.067 9.067 0 0 1-18.134 0ZM316.1 255.426a9.067 9.067 0 1 1 18.134 0 9.067 9.067 0 0 1-18.133 0ZM123.921 272.349a9.26 9.26 0 1 1 18.52 0 9.26 9.26 0 0 1-18.52 0Z"
      className="s"
    />
    <path
      fill="none"
      d="M295.43 268.794c-4.52 4.52-4.52 11.849 0 16.369s11.85 4.52 16.37 0l21.552-21.553c4.52-4.52 4.52-11.848 0-16.368-4.52-4.52-11.849-4.52-16.369 0l-21.552 21.552ZM133.663 9.414h7.716v24.113h-7.716z"
      className="s"
    />
    <path
      d="M306.864 365.33v-67.895a.662.662 0 0 1 .658-.632.659.659 0 0 1 .657.632v67.895a.655.655 0 0 1-.657.657.657.657 0 0 1-.658-.657ZM322.448 296.989a.662.662 0 0 1 .199.446v67.887a.662.662 0 0 1-.657.632.66.66 0 0 1-.658-.632v-67.887a.662.662 0 0 1 .658-.632c.171 0 .335.067.458.186Z"
      stroke="#4D4D4D"
    ></path>
    <path fill="none" d="M294.598 315.043h40.316" className="s" />
    <path
      d="M109.88 109.688a.393.393 0 0 1-.354-.562l2.42-5.057a.424.424 0 0 1 .75 0l2.42 5.057a.393.393 0 0 1-.355.562h-4.881Zm0-6.617a.393.393 0 0 1-.354-.562l2.42-5.057c.16-.3.59-.3.75 0l2.42 5.057a.393.393 0 0 1-.355.562h-4.881Zm4.881 134.014c.29 0 .48.302.355.562l-2.42 5.057a.424.424 0 0 1-.75 0l-2.42-5.057a.393.393 0 0 1 .354-.562h4.882Z"
      className="f"
    />
    <path
      fill="none"
      d="M282.01 380.57v-84.108l-.58-.579h-57.197l-.578.579v84.108M221.726 380.57v-84.108l-.58-.579H163.95l-.578.579v84.108M103.666 295.883h57.197l.579.579v84.108"
      className="s"
    />
    <path
      d="M188.642 311.771c0-.314.328-.52.61-.385l7.632 3.651a.623.623 0 0 1 0 1.101l-7.631 3.651a.427.427 0 0 1-.611-.385v-7.633Z"
      className="f"
    />
    <rect
      width={7.33}
      height={7.33}
      x={249.967}
      y={311.991}
      className="f"
      rx={0.802}
      ry={0.802}
    />
    <path
      d="M307.547 276.944h-7.585v-.19h7.585v.19zm13.6-21.375h7.585v.189h-7.585z"
      className="f"
    />
    <path
      d="M324.845 251.872h.189v7.585h-.189zM337.849 93.999h-9.028a.501.501 0 0 1-.501-.501V84.47c0-.277.224-.502.501-.502h9.028c.277 0 .501.225.501.502v9.028a.501.501 0 0 1-.501.501Zm-1.552-8.025h-1.002l-1.931 5.086-1.981-5.086h-1.437v6.019h.707v-5.428h.188l2.131 5.428h.716l2.123-5.42v-.008h.26v5.428h.707v-6.019h-.481Zm-30.187-33.22h-5.254v3.002h6.755v-3.003h-1.501z"
      className="f"
    />
    <path
      d="M332.937 42.788H285.29a2.7 2.7 0 0 0-2.7 2.7v23.535a2.7 2.7 0 0 0 2.7 2.7h47.648a2.7 2.7 0 0 0 2.7-2.7V45.488a2.7 2.7 0 0 0-2.7-2.7Zm-35.835 9.215v.75h-5.255v9.76h-1.502v-9.76h-5.255v-1.5h12.012v.75Zm12.011 1.501v2.252h-.75v.751h-.751v.75h-6.757v5.256h-1.501v-11.26h8.258v.75h.75v.75h.751v.751Zm9.76 3.003v.75h-7.508v-1.5h7.507v.75Zm12.761-4.504v2.252h-.75v.75h-.751v.751h-.75v.751h-.751v.75h-.751v.751h-.75v.752h-.752v.75h-.75v.751h-.751v.751h-.75v.75h-.752v.752h-2.252v-.751h.751v-.75h.75v-.752h.752v-.75h.75v-.751h.75v-.752h.752v-.75h.75v-.751h.751v-.75h.75v-.751h.752v-.751h.75v-.75h.751v-.752h-9.008v-1.5h10.51v.75Z"
      className="f"
    />
    <path
      fill="none"
      d="M332.937 42.788H285.29a2.7 2.7 0 0 0-2.7 2.7v23.535a2.7 2.7 0 0 0 2.7 2.7h47.648a2.7 2.7 0 0 0 2.7-2.7V45.488a2.7 2.7 0 0 0-2.7-2.7Z"
      className="s"
    />
    <path
      d="M122.8 53.286v11.109h-1.077V53.286h-3.832v-.896h8.757v.896H122.8Zm11.402 5.481c-.714.232-1.56.282-2.405.282h-2.41v5.346h-1.08V52.39h3.838c1.31 0 2.272.197 2.919.613.962.615 1.343 1.512 1.343 2.724 0 1.46-.83 2.573-2.205 3.039Zm-2.007-5.481h-2.809v4.866h2.261c.648 0 1.576-.034 2.19-.25.928-.331 1.41-1.327 1.41-2.275 0-1.992-1.394-2.341-3.052-2.341Zm5.372 6.166v-.881h8.335v.881h-8.335Zm11.338 4.943h-1.244l4.76-11.059h-6.352v-.946h7.313v1.063l-4.477 10.942Z"
      className="f"
    />
    <path
      fill="none"
      d="M222.072 55.077a2.315 2.315 0 1 1 4.63 0 2.315 2.315 0 0 1-4.63 0Z"
      className="s"
    />
    <circle cx={185.797} cy={55.005} r={1.543} fill="none" className="s" />
    <path
      fill="none"
      d="M294.814 380.907h34.75v3.208h-34.75v-3.208Zm-6.357 41.323 2.413-2.414 2.413 2.413-2.413 2.412-2.413-2.411Zm4.826 0 2.413-2.413 2.413 2.413-2.414 2.413-2.412-2.413Zm4.827 0 2.412-2.413 2.413 2.413-2.413 2.413-2.412-2.413Zm4.825 0 2.413-2.412 2.413 2.413-2.412 2.414-2.414-2.415Zm4.825.002 2.414-2.413 2.413 2.412-2.413 2.413-2.414-2.412Zm4.827 0L315 419.82l2.413 2.412-2.413 2.413-2.413-2.413Zm4.826 0 2.413-2.413 2.413 2.412-2.414 2.413-2.412-2.412Zm4.825.001 2.413-2.413 2.414 2.413-2.413 2.413-2.414-2.413Zm4.827 0 2.413-2.413 2.413 2.413-2.412 2.413-2.414-2.413Zm4.825.001 2.414-2.413 2.413 2.414-2.413 2.413-2.414-2.414Zm-43.432-4.83 2.413-2.413 2.414 2.414-2.413 2.413-2.414-2.414Zm4.825 0 2.413-2.413 2.413 2.414-2.414 2.413-2.412-2.414Zm4.827 0 2.413-2.413 2.413 2.414-2.413 2.413-2.413-2.414Zm4.825.001 2.413-2.413 2.413 2.413-2.412 2.413-2.414-2.413Zm4.827.001 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm4.826.001 2.413-2.413 2.414 2.413L315 419.82l-2.412-2.413Zm4.826 0 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm4.826 0 2.412-2.413 2.413 2.413-2.413 2.413-2.412-2.413Zm4.825.001 2.413-2.413 2.413 2.413-2.412 2.413-2.414-2.413Zm4.825 0 2.414-2.413 2.413 2.413-2.413 2.413-2.414-2.413Zm-43.43-4.831 2.412-2.413 2.413 2.413-2.413 2.413-2.412-2.413Zm4.824.001 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm4.826.002 2.413-2.414 2.413 2.413-2.413 2.412-2.413-2.411Zm4.826 0 2.413-2.414 2.412 2.413-2.413 2.412-2.412-2.411Zm4.826 0 2.413-2.414 2.413 2.413-2.413 2.412-2.413-2.411Zm4.826 0 2.413-2.413 2.414 2.413-2.413 2.413-2.414-2.413Zm4.826 0 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm4.826 0 2.413-2.412 2.413 2.413-2.413 2.414-2.413-2.415Zm4.826.002 2.413-2.413 2.412 2.412-2.413 2.413-2.412-2.412Zm4.824 0 2.414-2.413 2.413 2.412-2.413 2.413-2.414-2.412Zm-43.43-4.832 2.412-2.412 2.413 2.413-2.413 2.414-2.412-2.415Zm4.825.002 2.413-2.413 2.413 2.412-2.412 2.413-2.414-2.412Zm4.825.001 2.414-2.413 2.413 2.413-2.413 2.413-2.414-2.413Zm4.826.001 2.413-2.413 2.412 2.414-2.413 2.413-2.412-2.414Zm4.827 0 2.413-2.413 2.413 2.414-2.414 2.413-2.412-2.414Zm4.827.001 2.412-2.413 2.413 2.413-2.413 2.413-2.412-2.413Zm4.825-.001 2.413-2.413 2.413 2.414-2.412 2.413-2.414-2.414Zm4.825.001 2.414-2.413 2.413 2.413-2.413 2.413-2.414-2.413Zm4.827.001 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm4.825.001 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm-43.432-4.831 2.412-2.413 2.413 2.413-2.413 2.413-2.412-2.413Zm4.825.001 2.413-2.413 2.413 2.413-2.412 2.413-2.414-2.413Zm4.827-.001 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm4.825.001 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm4.826 0 2.413-2.413 2.413 2.413-2.414 2.413-2.412-2.413Zm4.825.001 2.413-2.413 2.414 2.413L315 405.34l-2.412-2.412Zm4.827.002 2.413-2.414 2.413 2.413-2.412 2.412-2.414-2.411Zm4.825 0 2.414-2.413 2.413 2.413-2.413 2.413-2.414-2.413Zm4.827 0 2.413-2.414 2.413 2.413-2.413 2.412-2.413-2.411Zm4.826 0 2.413-2.413 2.413 2.413-2.414 2.413-2.412-2.413Zm-43.433-4.83 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm4.826 0 2.413-2.412 2.412 2.413-2.413 2.414-2.412-2.415Zm4.826 0 2.413-2.412 2.413 2.413-2.413 2.414-2.413-2.415Zm4.825 0 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm4.827 0 2.413-2.412 2.413 2.413-2.413 2.414-2.413-2.415Zm4.826.002 2.41-2.412 2.413 2.412-2.413 2.413-2.41-2.413Zm4.826.001 2.413-2.413 2.412 2.413-2.413 2.413-2.412-2.413Zm4.826.001 2.413-2.413 2.413 2.414-2.413 2.413-2.413-2.414Zm4.825.001 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm4.827 0 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm-43.434-4.831 2.413-2.413 2.413 2.414-2.413 2.413-2.413-2.414Zm4.826 0 2.413-2.413 2.412 2.414-2.413 2.413-2.412-2.414Zm4.826 0 2.413-2.413 2.413 2.414-2.413 2.413-2.413-2.414Zm4.826.001 2.413-2.413 2.414 2.413-2.413 2.413-2.414-2.413Zm4.826.001 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm4.826.001 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm4.826-.001 2.413-2.413 2.412 2.413-2.413 2.413-2.412-2.413Zm4.824.001 2.414-2.413 2.413 2.413-2.413 2.413-2.414-2.413Zm4.827.001 2.413-2.413 2.413 2.413-2.413 2.413-2.413-2.413Zm4.828.002 2.413-2.414 2.413 2.413-2.412 2.412-2.414-2.411Zm-43.435-4.832 2.414-2.413 2.413 2.413-2.413 2.413-2.414-2.413Zm4.826.002 2.413-2.414 2.412 2.413-2.413 2.412-2.412-2.411Zm4.827-.002 2.413-2.413 2.413 2.413-2.414 2.413-2.412-2.413Zm4.827.002 2.412-2.414 2.413 2.413-2.413 2.412-2.412-2.411Zm4.825 0 2.413-2.413 2.413 2.413-2.412 2.413-2.414-2.413Zm4.825 0 2.414-2.412 2.413 2.413-2.413 2.414-2.414-2.415Zm4.827 0 2.413-2.412 2.413 2.413-2.413 2.414-2.413-2.415Zm4.825.002 2.413-2.413 2.413 2.412-2.413 2.413-2.413-2.412Zm4.826 0 2.413-2.413 2.414 2.412-2.413 2.413-2.414-2.412Zm4.826 0 2.413-2.413 2.413 2.412-2.413 2.413-2.413-2.412Z"
      className="s"
    />
    <path
      fill="none"
      d="M334.867 426.587h-44.403l-1.93-1.93v-38.612l1.93-1.93h44.403l1.93 1.93v38.612l-1.93 1.93Z"
      className="s"
    />
    <circle cx={133.084} cy={315.656} r={4.437} className="f" />
    <circle cx={185.797} cy={55.005} r={1.543} className="f" />
  </svg>
);
const Memo = memo(SvgComponent);
export default Memo;
