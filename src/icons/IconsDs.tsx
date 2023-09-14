import * as React from 'react';
import { SVGProps } from 'react';

export const SvgUserOctagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9999 11C13.2867 11 14.3299 9.95681 14.3299 8.66998C14.3299 7.38316 13.2867 6.34003 11.9999 6.34003C10.7131 6.34003 9.66992 7.38316 9.66992 8.66998C9.66992 9.95681 10.7131 11 11.9999 11Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 16.66C16 14.86 14.21 13.4 12 13.4C9.79 13.4 8 14.86 8 16.66"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SvgHolaglow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={98}
    height={24}
    fill="currentColor"
    viewBox="0 0 98 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.34062 11.5573V17.136C9.37875 18.5869 10.6623 19.5 12.0729 19.5C13.7504 19.5 15.0721 18.4118 15.25 16.5231C14.9323 16.8358 14.5765 16.9609 14.1317 16.9609C13.3565 16.9609 12.9371 16.5231 12.9371 15.685V15.4974V10.7443C12.9371 8.08009 11.3612 6.19136 8.54 6.19136C6.72271 6.19136 5.24854 7.07943 4.39708 8.43031V0.25L0 1.06303C0.775208 2.06368 0.775208 2.67657 0.775208 3.58967V17.136C0.775208 17.899 0.775208 18.024 0.0508333 19.1248H5.13417C4.40979 17.8239 4.40979 17.8239 4.40979 17.0359V10.2815C4.91813 9.41845 5.74417 8.93064 6.88792 8.93064C8.36208 8.93064 9.34062 9.83122 9.34062 11.5573ZM21.375 6C17.4716 6 14.5 8.57535 14.5 12.6063C14.5 16.6124 17.4716 19.2376 21.375 19.25C25.2784 19.25 28.25 16.6124 28.25 12.5815C28.25 8.5878 25.3036 6 21.375 6ZM24.4977 13.0293C24.4977 15.5674 23.3519 17.0852 21.4757 17.0852C19.4989 17.0852 18.2775 15.219 18.2649 12.1709C18.2649 9.65775 19.3855 8.1399 21.2617 8.1399C23.2386 8.1399 24.4977 10.0185 24.4977 13.0293ZM29.2568 17.248V3.61183C29.2568 2.69268 29.2568 2.07571 28.5 1.06842L32.7928 0.25V17.1473C32.7928 17.9405 32.7928 17.9405 33.5 19.25L33.5 19.25H28.5496C29.2568 18.142 29.2568 18.0161 29.2568 17.248ZM37.5056 19.25C39.1535 19.25 40.5986 18.3365 41.2704 17.3849C41.6127 18.5648 42.4873 19.2373 43.8817 19.25C45.5549 19.25 46.8225 18.1461 47 16.2303C46.6831 16.5475 46.3282 16.6743 45.8845 16.6743C45.1113 16.6743 44.693 16.2303 44.693 15.3802V10.9394C44.693 7.58976 42.7662 5.75 39.4324 5.75C36.2253 5.75 34.1084 7.29793 33.8296 10.2923C34.8437 9.02349 36.0986 8.42716 37.9113 8.42716C39.8887 8.42716 41.1056 9.4422 41.1056 11.117V11.4215L38.0634 11.9671C35.0972 12.4746 33.5 13.8195 33.5 15.8623C33.5 17.8797 35.1859 19.25 37.5056 19.25ZM41.1183 15.8877C40.6746 16.4713 40.0028 16.8393 39.1028 16.8393C37.9746 16.8393 37.1634 16.1922 37.1634 15.1391C37.1634 14.2002 37.8099 13.3755 39.2803 13.1471L41.1183 12.8172V15.8877ZM46 20.6453C46 19.4888 46.8771 18.6215 48.5169 18.1061C47.7161 17.6913 47.1949 17 47.1949 16.1075C47.1949 15.1145 47.9449 14.2095 49.0381 13.757C47.4619 13.0656 46.5212 11.7332 46.5212 10.0237C46.5212 7.43436 48.6186 5.75 51.822 5.75C52.7246 5.75 53.5254 5.8757 54.2246 6.13966H58.4958L56.8432 8.46508C57.0212 8.93017 57.1229 9.4581 57.1229 10.0237C57.1229 12.6131 55 14.2975 51.822 14.2975C51.3517 14.2975 50.9195 14.2723 50.4746 14.1969C50.1949 14.3226 50.0042 14.4986 50.0042 14.7626C50.0042 15.1774 50.3347 15.4036 50.9576 15.479L55.1017 16.0196C57.6441 16.3212 58.75 17.4777 58.75 19.3003C58.75 21.8394 56.2966 23.75 52.1017 23.75C48.5424 23.7374 46 22.5307 46 20.6453ZM52.8898 21.9902C54.8602 21.9902 56.1314 21.324 56.1314 20.3561C56.1314 19.7402 55.7119 19.3631 54.5805 19.1746L49.9788 18.5587H49.9407C49.4703 18.8352 49.1653 19.3003 49.1653 19.8408C49.1653 21.1229 50.6907 21.9902 52.8898 21.9902ZM51.822 12.676C53.0678 12.676 53.8686 11.683 53.8686 10.0112C53.8686 8.35196 53.0678 7.34637 51.822 7.34637C50.5763 7.34637 49.7754 8.33939 49.7754 10.0112C49.7881 11.6578 50.589 12.676 51.822 12.676ZM59.5049 3.61183V17.248C59.5049 18.0161 59.505 18.142 58.8119 19.25H63.75L63.75 19.25C63.0446 17.9405 63.0446 17.9405 63.0446 17.1473V0.25L58.75 1.06842C59.505 2.07571 59.5049 2.69268 59.5049 3.61183ZM64 12.6063C64 8.57535 66.9716 6 70.875 6C74.8036 6 77.75 8.5878 77.75 12.5815C77.75 16.6124 74.7784 19.25 70.875 19.25C66.9842 19.2376 64 16.6124 64 12.6063ZM70.9757 17.0852C72.8519 17.0852 73.9977 15.5674 73.9977 13.0293C73.9977 10.0185 72.7386 8.1399 70.7617 8.1399C68.8855 8.1399 67.7649 9.65775 67.7649 12.1709C67.7775 15.219 69.0115 17.0852 70.9757 17.0852ZM83.5701 14.5619L81.4906 8.86014C81.3091 8.37335 81.2068 8.09908 81.211 7.82647C81.2165 7.47465 81.3994 7.12558 81.8183 6.32602H76.5L76.5001 6.32613C77.1931 7.51706 77.1932 7.5171 77.8359 9.08821L81.9947 19.25H83.6835L87.2248 10.7607L90.8165 19.25H92.5053L96.6893 9.08821C97.2816 7.66917 97.2817 7.6691 97.9999 6.32621L98 6.32602H93.9672C94.7737 7.71978 94.7737 7.71978 94.3326 8.88548L92.228 14.5872L88.8127 6.25H86.8593L83.5701 14.5619Z"
    />
  </svg>
);

export const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.7535 3.22671C15.4645 2.92998 14.9896 2.92372 14.6929 3.21272C14.3962 3.50172 14.3899 3.97655 14.6789 4.27329L21.4724 11.2484H0.75C0.335786 11.2484 0 11.5842 0 11.9984C0 12.4127 0.335786 12.7484 0.75 12.7484H21.4724L14.6789 19.7236C14.3899 20.0204 14.3962 20.4952 14.6929 20.7842C14.9896 21.0732 15.4645 21.0669 15.7535 20.7702L23.7871 12.5217C24.0707 12.2305 24.0707 11.7664 23.7871 11.4752L15.7535 3.22671Z"
    />
  </svg>
);

export const SvgAngle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    width={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M9.70711 5.29289C9.31658 4.90237 8.68342 4.90237 8.29289 5.29289C7.90237 5.68342 7.90237 6.31658 8.29289 6.70711L13.5858 12L8.29289 17.2929C7.90237 17.6834 7.90237 18.3166 8.29289 18.7071C8.68342 19.0976 9.31658 19.0976 9.70711 18.7071L15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L9.70711 5.29289Z" />
  </svg>
);

export const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    width={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.301262 0.301262C0.702944 -0.100421 1.3542 -0.100421 1.75588 0.301262L12 10.5454L22.2441 0.301262C22.6458 -0.100421 23.2971 -0.100421 23.6987 0.301262C24.1004 0.702944 24.1004 1.3542 23.6987 1.75588L13.4546 12L23.6987 22.2441C24.1004 22.6458 24.1004 23.2971 23.6987 23.6987C23.2971 24.1004 22.6458 24.1004 22.2441 23.6987L12 13.4546L1.75588 23.6987C1.3542 24.1004 0.702944 24.1004 0.301262 23.6987C-0.100421 23.2971 -0.100421 22.6458 0.301262 22.2441L10.5454 12L0.301262 1.75588C-0.100421 1.3542 -0.100421 0.702944 0.301262 0.301262Z"
    />
  </svg>
);

export const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    width={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    className="rotate-45"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.301262 0.301262C0.702944 -0.100421 1.3542 -0.100421 1.75588 0.301262L12 10.5454L22.2441 0.301262C22.6458 -0.100421 23.2971 -0.100421 23.6987 0.301262C24.1004 0.702944 24.1004 1.3542 23.6987 1.75588L13.4546 12L23.6987 22.2441C24.1004 22.6458 24.1004 23.2971 23.6987 23.6987C23.2971 24.1004 22.6458 24.1004 22.2441 23.6987L12 13.4546L1.75588 23.6987C1.3542 24.1004 0.702944 24.1004 0.301262 23.6987C-0.100421 23.2971 -0.100421 22.6458 0.301262 22.2441L10.5454 12L0.301262 1.75588C-0.100421 1.3542 -0.100421 0.702944 0.301262 0.301262Z"
    />
  </svg>
);

export const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={24}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 26 24"
    {...props}
  >
    <path d="M1 6H25" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M1 18H25" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const SvgCalling = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    width={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.76047 1.41176C4.14294 1.41176 3.52276 1.66393 2.90648 2.27058L2.90114 2.27584L2.89568 2.28098C2.36791 2.77888 2.00005 3.32569 1.76934 3.91209L1.76788 3.91581C1.53238 4.50455 1.41176 5.14907 1.41176 5.83341C1.41176 6.89756 1.65708 8.03505 2.16917 9.25159C2.68713 10.4707 3.4041 11.712 4.3046 12.9641C5.21931 14.2203 6.24516 15.4229 7.38286 16.5719C8.53205 17.7098 9.73532 18.7362 11.0039 19.6629C12.2529 20.5722 13.5055 21.2899 14.7501 21.8203C15.9781 22.3435 17.1149 22.5882 18.1553 22.5882C18.8563 22.5882 19.4978 22.4585 20.0862 22.2134L20.09 22.2118C20.6705 21.9739 21.1957 21.5994 21.6868 21.0582C21.9651 20.7512 22.1756 20.4261 22.3396 20.0788C22.4878 19.765 22.5543 19.4499 22.5543 19.1492C22.5543 18.9449 22.5129 18.7554 22.4289 18.5425C22.3641 18.4001 22.2547 18.263 22.0566 18.1258L22.0497 18.121L18.3173 15.4711C18.0637 15.299 17.8499 15.181 17.6621 15.1042C17.4869 15.0324 17.3516 15.0099 17.2405 15.0099C17.1029 15.0099 16.9686 15.0449 16.8056 15.1441L16.7857 15.1562L16.7651 15.167C16.5919 15.2574 16.3784 15.419 16.1245 15.6728L16.1212 15.6761L15.2662 16.5198C15.2656 16.5205 15.265 16.5211 15.2643 16.5217C15.0152 16.7699 14.6923 16.9186 14.304 16.9186C14.1477 16.9186 13.9673 16.901 13.7738 16.8285L13.7586 16.8228L13.7436 16.8163C13.6987 16.7971 13.657 16.778 13.6262 16.7638L13.6174 16.7598C13.5813 16.7432 13.5657 16.7364 13.5562 16.7326L13.5213 16.7186L13.4881 16.701C13.0425 16.4651 12.5136 16.0916 11.9055 15.577L11.9045 15.5762C11.2876 15.0524 10.6868 14.4858 10.0712 13.8817L10.0664 13.877L10.0618 13.8722C9.46186 13.2608 8.90965 12.6509 8.39423 12.0553L8.38911 12.0494C7.87968 11.4473 7.49461 10.9196 7.25796 10.4858L7.22786 10.4306L7.20799 10.371C7.20663 10.3669 7.20293 10.3569 7.18661 10.3183C7.18535 10.3154 7.18401 10.3122 7.18261 10.3089C7.16849 10.2756 7.14738 10.2258 7.12636 10.1697L7.11224 10.1321L7.10249 10.0931C7.06831 9.95638 7.04753 9.81934 7.04753 9.66212C7.04753 9.31271 7.16576 8.98343 7.42935 8.71688L8.28851 7.82381L8.29334 7.81898C8.53241 7.57991 8.70303 7.35892 8.81043 7.1689L8.81604 7.15896L8.82198 7.14921C8.91966 6.98873 8.95623 6.84332 8.95623 6.71435C8.95623 6.61812 8.92932 6.47644 8.85519 6.30347L8.85058 6.29272C8.77399 6.10549 8.65711 5.89411 8.47939 5.64727L8.47652 5.64329L5.85159 1.94347C5.7259 1.76192 5.56827 1.63722 5.37949 1.55009L5.3698 1.54562C5.1888 1.45874 4.97786 1.41176 4.76047 1.41176ZM1.92148 1.2592C2.74963 0.446137 3.70875 0 4.76047 0C5.17381 0 5.5935 0.087885 5.97591 0.270492C6.37134 0.453918 6.73046 0.734069 7.00987 1.13625L9.62664 4.82454C9.85344 5.13982 10.0289 5.44559 10.1551 5.7528C10.283 6.05274 10.368 6.38341 10.368 6.71435C10.368 7.1237 10.2487 7.51691 10.0339 7.87333C9.84912 8.19762 9.59449 8.51368 9.29658 8.81227L8.45989 9.68199C8.46052 9.69142 8.46174 9.70158 8.464 9.71398C8.46977 9.728 8.47621 9.74323 8.48404 9.76172L8.48753 9.76998C8.49644 9.79102 8.50869 9.81999 8.52159 9.85336C8.69616 10.1616 9.00346 10.5896 9.46434 11.1345C9.96329 11.7109 10.493 12.2956 11.0649 12.8788C11.6671 13.4698 12.2392 14.0083 12.8177 14.4995C13.3682 14.9653 13.8016 15.2656 14.1215 15.4388C14.153 15.4523 14.1824 15.4658 14.2045 15.4759L14.2128 15.4797C14.2338 15.4893 14.252 15.4977 14.2696 15.5055C14.2728 15.5058 14.2772 15.5062 14.2832 15.5064L15.1279 14.6729C15.4322 14.3688 15.7533 14.1063 16.0915 13.9262C16.4424 13.7167 16.8213 13.5981 17.2405 13.5981C17.5585 13.5981 17.875 13.6659 18.1967 13.7975C18.5044 13.9234 18.8084 14.0978 19.1169 14.3076L19.1228 14.3116L22.8638 16.9676C23.2465 17.2334 23.542 17.5665 23.7256 17.9839L23.7305 17.9949L23.7349 18.0061C23.8737 18.3529 23.9661 18.7248 23.9661 19.1492C23.9661 19.6616 23.852 20.1823 23.6162 20.6817C23.3962 21.1475 23.1098 21.5904 22.7329 22.0063C22.1178 22.6841 21.4237 23.1905 20.6273 23.5173C19.8609 23.8363 19.0348 24 18.1553 24C16.8917 24 15.5664 23.7027 14.1967 23.119C12.8438 22.5426 11.4988 21.7695 10.1728 20.8041L10.1719 20.8034C8.84396 19.8335 7.58611 18.7601 6.38705 17.5726L6.3822 17.5678C5.1948 16.3689 4.1212 15.1107 3.16205 13.7934L3.15966 13.7901C2.2087 12.468 1.43539 11.1351 0.869362 9.80257L0.868493 9.80051C0.296654 8.4424 0 7.11812 0 5.83341C0 4.98244 0.150214 4.15936 0.456338 3.39333C0.766936 2.60473 1.25538 1.88897 1.92148 1.2592Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.6824 4.65882C14.6824 4.26898 14.9984 3.95294 15.3882 3.95294C16.6209 3.95294 17.7548 4.72466 18.5366 5.56717C18.9736 6.03553 19.3421 6.55975 19.6047 7.07067C19.8602 7.56759 20.0471 8.11311 20.0471 8.61176C20.0471 9.00161 19.731 9.31765 19.3412 9.31765C18.9513 9.31765 18.6353 9.00161 18.6353 8.61176C18.6353 8.43277 18.5567 8.11994 18.3492 7.71616C18.1489 7.32666 17.857 6.90813 17.5037 6.52964L17.5022 6.52803C16.8383 5.81226 16.0526 5.36471 15.3882 5.36471C14.9984 5.36471 14.6824 5.04867 14.6824 4.65882Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.6824 0.705882C14.6824 0.316034 14.9984 0 15.3882 0C20.1489 0 24 3.85109 24 8.61176C24 9.00161 23.684 9.31765 23.2941 9.31765C22.9043 9.31765 22.5882 9.00161 22.5882 8.61176C22.5882 4.63079 19.3692 1.41176 15.3882 1.41176C14.9984 1.41176 14.6824 1.09573 14.6824 0.705882Z"
    />
  </svg>
);

export const SvgUserSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M18.14 21.62C17.26 21.88 16.22 22 15 22H8.99998C7.77998 22 6.73999 21.88 5.85999 21.62C6.07999 19.02 8.74998 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.58 10.58C15.58 12.56 13.98 14.17 12 14.17C10.02 14.17 8.41998 12.56 8.41998 10.58C8.41998 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58Z"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SvgHolaGlowStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={196}
    height={196}
    fill="currentColor"
    viewBox="0 0 196 196"
    {...props}
  >
    <path d="M97.92 0L108.48 80.7638L176.64 38.9045L121.6 97.6717L196 126.07L116.96 118.683L141.6 196L97.92 127.876L54.4 196L79.04 118.683L0 126.07L74.4 97.6717L19.36 38.9045L87.52 80.7638L97.92 0Z" />
  </svg>
);

export const SvgInstagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M2.07036 2.07036C3.57432 0.566401 5.81665 0 8.67692 0H15.3231C18.1834 0 20.4257 0.566401 21.9296 2.07036C23.4336 3.57432 24 5.81665 24 8.67692V15.3231C24 18.1834 23.4336 20.4257 21.9296 21.9296C20.4257 23.4336 18.1834 24 15.3231 24H8.67692C5.81665 24 3.57432 23.4336 2.07036 21.9296C0.566401 20.4257 0 18.1834 0 15.3231V8.67692C0 5.81665 0.566401 3.57432 2.07036 2.07036ZM3.37579 3.37579C2.38744 4.36414 1.84615 5.99874 1.84615 8.67692V15.3231C1.84615 18.0013 2.38744 19.6359 3.37579 20.6242C4.36414 21.6126 5.99874 22.1538 8.67692 22.1538H15.3231C18.0013 22.1538 19.6359 21.6126 20.6242 20.6242C21.6126 19.6359 22.1538 18.0013 22.1538 15.3231V8.67692C22.1538 5.99874 21.6126 4.36414 20.6242 3.37579C19.6359 2.38744 18.0013 1.84615 15.3231 1.84615H8.67692C5.99874 1.84615 4.36414 2.38744 3.37579 3.37579ZM17.32 6.46154C17.32 5.95174 17.7333 5.53846 18.2431 5.53846H18.2559C18.7657 5.53846 19.179 5.95174 19.179 6.46154C19.179 6.97134 18.7657 7.38462 18.2559 7.38462H18.2431C17.7333 7.38462 17.32 6.97134 17.32 6.46154ZM12 9.04615C10.3686 9.04615 9.04615 10.3686 9.04615 12C9.04615 13.6314 10.3686 14.9538 12 14.9538C13.6314 14.9538 14.9538 13.6314 14.9538 12C14.9538 10.3686 13.6314 9.04615 12 9.04615ZM7.2 12C7.2 9.34903 9.34903 7.2 12 7.2C14.651 7.2 16.8 9.34903 16.8 12C16.8 14.651 14.651 16.8 12 16.8C9.34903 16.8 7.2 14.651 7.2 12Z" />
  </svg>
);

export const SvgFilters = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M3.98167 9.78825C4.23385 9.78825 4.43829 9.99894 4.43829 10.2588V15.5294C4.43829 15.7893 4.23385 16 3.98167 16C3.72948 16 3.52504 15.7893 3.52504 15.5294V10.2588C3.52504 9.99894 3.72948 9.78825 3.98167 9.78825Z" />
    <path d="M3.98167 0C4.23385 0 4.43829 0.21069 4.43829 0.470588V2.72941C4.43829 2.98931 4.23385 3.2 3.98167 3.2C3.72948 3.2 3.52504 2.98931 3.52504 2.72941V0.470588C3.52504 0.21069 3.72948 0 3.98167 0Z" />
    <path d="M12.0182 12.8C12.2704 12.8 12.4749 13.0107 12.4749 13.2706V15.5294C12.4749 15.7893 12.2704 16 12.0182 16C11.7661 16 11.5616 15.7893 11.5616 15.5294V13.2706C11.5616 13.0107 11.7661 12.8 12.0182 12.8Z" />
    <path d="M12.0182 0C12.2704 0 12.4749 0.21069 12.4749 0.470588V5.74118C12.4749 6.00107 12.2704 6.21176 12.0182 6.21176C11.7661 6.21176 11.5616 6.00107 11.5616 5.74118V0.470588C11.5616 0.21069 11.7661 0 12.0182 0Z" />
    <path d="M2.45542 3.47904C2.32532 3.63456 2.24656 3.883 2.24656 4.2353V8.75295C2.24656 9.10525 2.32532 9.35369 2.45542 9.50921C2.57462 9.65172 2.79745 9.78824 3.25112 9.78824H4.71231C5.16598 9.78824 5.38881 9.65172 5.50801 9.50921C5.6381 9.35369 5.71687 9.10525 5.71687 8.75295V4.2353C5.71687 3.883 5.6381 3.63456 5.50801 3.47904C5.38881 3.33653 5.16598 3.20001 4.71231 3.20001H3.25112C2.79745 3.20001 2.57462 3.33653 2.45542 3.47904ZM1.76372 2.86451C2.10113 2.46113 2.6089 2.25883 3.25112 2.25883H4.71231C5.35453 2.25883 5.86229 2.46113 6.19971 2.86451C6.52624 3.25486 6.63012 3.75936 6.63012 4.2353V8.75295C6.63012 9.22889 6.52624 9.73339 6.19971 10.1237C5.86229 10.5271 5.35453 10.7294 4.71231 10.7294H3.25112C2.6089 10.7294 2.10113 10.5271 1.76372 10.1237C1.43719 9.73339 1.33331 9.22889 1.33331 8.75295V4.2353C1.33331 3.75936 1.43719 3.25486 1.76372 2.86451Z" />
    <path d="M10.492 6.4908C10.3619 6.64632 10.2831 6.89476 10.2831 7.24706V11.7647C10.2831 12.117 10.3619 12.3654 10.492 12.521C10.6112 12.6635 10.834 12.8 11.2877 12.8H12.7488C13.2025 12.8 13.4253 12.6635 13.5446 12.521C13.6746 12.3654 13.7534 12.117 13.7534 11.7647V7.24706C13.7534 6.89476 13.6746 6.64632 13.5446 6.4908C13.4253 6.34829 13.2025 6.21177 12.7488 6.21177H11.2877C10.834 6.21177 10.6112 6.34829 10.492 6.4908ZM9.80026 5.87626C10.1377 5.47289 10.6454 5.27059 11.2877 5.27059H12.7488C13.3911 5.27059 13.8988 5.47289 14.2362 5.87626C14.5628 6.26662 14.6667 6.77112 14.6667 7.24706V11.7647C14.6667 12.2406 14.5628 12.7451 14.2362 13.1355C13.8988 13.5389 13.3911 13.7412 12.7488 13.7412H11.2877C10.6454 13.7412 10.1377 13.5389 9.80026 13.1355C9.47373 12.7451 9.36985 12.2406 9.36985 11.7647V7.24706C9.36985 6.77112 9.47373 6.26662 9.80026 5.87626Z" />
  </svg>
);
export const SvgWhatsapp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M0 12C0 5.39839 5.39839 0 12 0C18.6016 0 24 5.39839 24 12C24 18.6016 18.6016 24 12 24C9.94658 24 7.8938 23.4586 6.14511 22.4742L2.48379 23.5203C1.25827 23.8704 0.116528 22.7557 0.437248 21.5221L1.42262 17.7322C0.547495 16.0113 0 14.0657 0 12ZM12 1.41176C6.17808 1.41176 1.41176 6.17808 1.41176 12C1.41176 13.9007 1.93969 15.7075 2.79696 17.3149C2.88034 17.4712 2.90187 17.6532 2.85729 17.8247L1.80359 21.8774C1.75777 22.0536 1.92088 22.2128 2.09595 22.1628L6.04608 21.0342C6.23394 20.9805 6.43564 21.0071 6.60317 21.1077C8.18633 22.0575 10.0935 22.5882 12 22.5882C17.8219 22.5882 22.5882 17.8219 22.5882 12C22.5882 6.17808 17.8219 1.41176 12 1.41176Z" />
    <path d="M8.74495 7.62353C8.58616 7.62353 8.40016 7.68344 8.18105 7.89881L8.1757 7.90406L8.17024 7.9092C7.97133 8.09658 7.83934 8.29553 7.75762 8.50292L7.75616 8.50664C7.66965 8.7226 7.62353 8.96322 7.62353 9.22503C7.62353 9.64303 7.71989 10.1033 7.93412 10.6117C8.15422 11.1288 8.46164 11.6619 8.85332 12.2058C9.25308 12.7539 9.70196 13.2795 10.2006 13.7825C10.7047 14.2807 11.2318 14.7295 11.787 15.1345C12.3286 15.5281 12.8676 15.8358 13.3987 16.0618C13.9132 16.2807 14.374 16.3765 14.7817 16.3765C15.0485 16.3765 15.2869 16.3274 15.5031 16.2375L15.5069 16.2359C15.7091 16.1532 15.8993 16.0208 16.0864 15.8149C16.1846 15.7067 16.2586 15.5929 16.317 15.4693C16.3596 15.3792 16.3765 15.2941 16.3765 15.2171C16.3765 15.1871 16.372 15.1545 16.3537 15.1042C16.3504 15.1006 16.3408 15.0908 16.3196 15.0761L16.3127 15.0713L14.6341 13.8813C14.536 13.8151 14.4647 13.7775 14.413 13.7563C14.3965 13.7496 14.3852 13.7462 14.3783 13.7445L14.3746 13.7467L14.3548 13.7588L14.3341 13.7696C14.3036 13.7855 14.239 13.8291 14.1403 13.9277L14.137 13.931L13.7514 14.3109C13.5704 14.4906 13.3283 14.6016 13.046 14.6016C12.9456 14.6016 12.815 14.5903 12.6712 14.5364L12.656 14.5307L12.641 14.5243C12.616 14.5136 12.5929 14.503 12.5792 14.4968L12.5754 14.495L12.5618 14.4889L12.5304 14.4763L12.4972 14.4588C12.2626 14.3348 12.0005 14.1476 11.715 13.9064L11.714 13.9056C11.4259 13.6613 11.1477 13.3991 10.8671 13.1242L10.8624 13.1195L10.8577 13.1148C10.5804 12.8326 10.326 12.5519 10.0897 12.2793L10.0846 12.2734C9.84815 11.9944 9.65535 11.7338 9.53031 11.5049L9.50015 11.4497L9.48361 11.4001L9.48139 11.3949L9.4797 11.3909C9.47345 11.3762 9.46081 11.3465 9.44825 11.313L9.4341 11.2753L9.42432 11.2363C9.40252 11.1492 9.38792 11.0556 9.38792 10.948C9.38792 10.6977 9.47522 10.4495 9.67034 10.2513L10.0585 9.84847L10.0633 9.84364C10.1535 9.75362 10.2062 9.6817 10.2328 9.63458L10.2385 9.62464L10.2439 9.61567C10.2417 9.60872 10.2385 9.60006 10.2341 9.58985L10.2295 9.57909C10.2088 9.52856 10.1726 9.46007 10.1066 9.36853L10.1037 9.36454L8.91814 7.69597C8.90964 7.68371 8.90203 7.676 8.89512 7.67032C8.88794 7.66443 8.87761 7.6575 8.8618 7.65021L8.85212 7.64575C8.82615 7.6333 8.78879 7.62353 8.74495 7.62353ZM7.19684 6.88666C7.62822 6.46484 8.15291 6.21176 8.74495 6.21176C8.98446 6.21176 9.23032 6.26233 9.4575 6.37028C9.69152 6.47905 9.90788 6.64718 10.0757 6.88771L11.2532 8.54496C11.3686 8.70516 11.4633 8.86808 11.5337 9.03847C11.606 9.20829 11.6599 9.40864 11.6599 9.62146C11.6599 9.88166 11.584 10.1258 11.4559 10.3397C11.3521 10.5205 11.2155 10.6876 11.066 10.8375L10.8918 11.0183C10.9577 11.1105 11.0456 11.2235 11.1592 11.3577C11.3789 11.6112 11.6108 11.8666 11.8601 12.1206C12.1273 12.3824 12.3768 12.6166 12.6266 12.8284C12.763 12.9436 12.8781 13.0312 12.9725 13.0964L13.1445 12.9269C13.2947 12.7772 13.4669 12.6333 13.6613 12.5284C13.8702 12.4055 14.106 12.3309 14.3694 12.3309C14.5694 12.3309 14.7617 12.3738 14.9468 12.4494C15.118 12.5193 15.2792 12.6129 15.4327 12.7171L15.4386 12.7211L17.1262 13.9175C17.3476 14.0714 17.5314 14.274 17.6469 14.5361L17.6517 14.5471L17.6562 14.5582C17.7329 14.7498 17.7882 14.9665 17.7882 15.2171C17.7882 15.5061 17.7237 15.7971 17.5932 16.0729C17.4786 16.3152 17.3286 16.5469 17.1317 16.7639C16.8205 17.1063 16.4614 17.3703 16.0435 17.5417C15.6495 17.7054 15.2268 17.7882 14.7817 17.7882C14.151 17.7882 13.5022 17.64 12.846 17.3609C12.2066 17.0889 11.5751 16.7258 10.9563 16.276L10.9554 16.2753C10.341 15.8272 9.75938 15.3316 9.20553 14.7839L9.20068 14.7791C8.65229 14.2262 8.15564 13.6452 7.7114 13.0359L7.70901 13.0326C7.26676 12.4187 6.90286 11.7939 6.63458 11.1633L6.6337 11.1612C6.3596 10.5112 6.21176 9.86389 6.21176 9.22503C6.21176 8.79632 6.28758 8.37689 6.44488 7.9835C6.60666 7.57377 6.85943 7.20586 7.19684 6.88666Z" />
  </svg>
);
