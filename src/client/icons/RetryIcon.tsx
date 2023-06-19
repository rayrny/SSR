import { SVGProps } from "react";

const RetryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 400 400"
    width="current"
    {...props}
  >
    <g
      stroke="current"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.9}
      strokeWidth={16}
    >
      <path d="M282 163.929C257.059 139.31 232.006 127 206.841 127 169.094 127 118 142.696 118 208.577S154.633 297 187.935 297c33.303 0 68.827-16.057 81.803-27.776" />
      <path d="M268.846 104c2.864 6.52 5.233 14.126 7.106 22.819 1.873 8.692 3.889 21.432 6.048 38.22-14.474 4.004-24.658 7.276-30.552 9.814-5.894 2.538-12.71 6.587-20.448 12.147" />
    </g>
  </svg>
);
export default RetryIcon;
