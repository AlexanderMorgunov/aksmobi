import { FC } from "react";

interface IProps extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

const ArrowLeftCarousel: FC<IProps> = ({ isActive }) => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.46967 5.46967C0.176777 5.76256 0.176777 6.23744 0.46967 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989592 6.3033 0.696698C6.01041 0.403805 5.53553 0.403805 5.24264 0.696698L0.46967 5.46967ZM16 5.25L1 5.25L1 6.75L16 6.75L16 5.25Z"
        fill="url(#paint0_linear_1_9946)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_9946"
          x1="16"
          y1="6"
          x2="15.6769"
          y2="3.26566"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={isActive ? "#FF6709" : "#fff"} />
          <stop offset="1" stopColor={isActive ? "#FD5E1A" : "#fff"} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { ArrowLeftCarousel };
