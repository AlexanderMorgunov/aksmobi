import { useIsMobile } from "../../../../shared/hooks/useIsMobile";

const ArrowRightIcon = () => {
  const { isMobile } = useIsMobile();
  return !isMobile ? (
    <svg
      width="58"
      height="12"
      viewBox="0 0 58 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.5303 6.53033C57.8232 6.23744 57.8232 5.76256 57.5303 5.46967L52.7574 0.696699C52.4645 0.403806 51.9896 0.403806 51.6967 0.696699C51.4038 0.989592 51.4038 1.46447 51.6967 1.75736L55.9393 6L51.6967 10.2426C51.4038 10.5355 51.4038 11.0104 51.6967 11.3033C51.9896 11.5962 52.4645 11.5962 52.7574 11.3033L57.5303 6.53033ZM0 6.75H57V5.25H0V6.75Z"
        fill="url(#paint0_linear_1_3355)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_3355"
          x1="0"
          y1="6"
          x2="0.0861335"
          y2="8.76984"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6709" />
          <stop offset="1" stopColor="#FD5E1A" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      width="36"
      height="8"
      viewBox="0 0 36 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.8594 4.35355C36.0547 4.15829 36.0547 3.84171 35.8594 3.64645L32.6774 0.464466C32.4822 0.269204 32.1656 0.269204 31.9703 0.464466C31.7751 0.659728 31.7751 0.976311 31.9703 1.17157L34.7988 4L31.9703 6.82843C31.7751 7.02369 31.7751 7.34027 31.9703 7.53553C32.1656 7.7308 32.4822 7.7308 32.6774 7.53553L35.8594 4.35355ZM0.505859 4.5H35.5059V3.5H0.505859V4.5Z"
        fill="url(#paint0_linear_1_9891)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_9891"
          x1="0.505859"
          y1="4"
          x2="0.64591"
          y2="6.76543"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6709" />
          <stop offset="1" stopColor="#FD5E1A" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export { ArrowRightIcon };
