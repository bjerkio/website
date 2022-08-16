import { FC, SVGProps } from 'react';
import { ThemeUIStyleObject } from 'theme-ui';

type Props = ThemeUIStyleObject & SVGProps<SVGSVGElement>;

export const Hamburger: FC<Props> = () => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 32 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27 21.4336H0V18.2891H27V21.4336Z"
        fill="#0F2040"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32 12.2891H0V9.14453H32V12.2891Z"
        fill="#0F2040"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 3.14459H0V0H24V3.14459Z"
        fill="#0F2040"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32 3.14459H27V0H32V3.14459Z"
        fill="#0F2040"
      />
    </svg>
  );
};
