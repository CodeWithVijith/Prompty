import { JSX, SVGProps } from "react";

export const CopyIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <rect x="3" y="3" width="13" height="13" rx="2" />
  </svg>
);
