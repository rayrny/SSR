import { SVGProps } from "react";

const CameraIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 400 400"
      width="current"
      height="current"
      {...props}
    >
      <g
        stroke="current"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.9}
        strokeWidth={16}
      >
        <path d="M105.676 129.417c81.54-11.49 176.594-4.429 186.791 0 10.197 4.429 16.578 129.545 8.705 136.084-7.873 6.54-191.197 27.709-195.496 16.855-4.3-10.854-14.313-110.016-9.306-125.307" />
        <path d="M168.732 172.972c37.915-53.335 107.067 32.542 58.474 67.694-37.76 27.317-82.091-15.261-64.363-52.309" />
        <path d="M189.743 191.456c15.245-15.291 32.788 13.781 14.327 22.009-14.449 6.438-23.209-9.725-14.327-19.223M253.031 116.608c3.734-2.144 10.825-2.144 21.274 0M259.107 158.709s3.027-1.358 7.598 0" />
      </g>
    </svg>
  );
};

export default CameraIcon;
