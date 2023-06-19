import { SVGProps } from "react";

const CatDefaultIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="M104.613 165C62.49 136.517 97.206 92.081 125 137.46M259 133.798c20.706-33.271 69.781-28.907 39.253 16.202M161.153 159c-.791-4.9 1.692-9.636 2.847-14M194 165c.409-8.384.948-16.789 2-25M228 159v-13M153 223c7.473-2.085 15.386-2.977 23-4M225 219c7.895-1.574 15.281-1.069 23 0M188 256.005c33.5-17.263 29.338 8.597 3.479 4.56M201 267c-1.946 21.306-19.027 23.175-34 16.734" />
      <path d="M200.041 267c-1.177 28.299 23.54 24.006 36.959 10.407M111 243c-14.674-4.772-30.188-5.035-45-7M116 267c-16.132 3.808-32.257 6.752-48 12M293 233c11.501-3.04 22.688-7.38 34-11M297 261c11.857-1.503 25.138-.973 36-.571" />
    </g>
  </svg>
);
export default CatDefaultIcon;
