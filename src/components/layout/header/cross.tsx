import { FC, SVGProps } from 'react';
import { ThemeUIStyleObject } from 'theme-ui';

type Props = ThemeUIStyleObject & SVGProps<SVGSVGElement>;

export const Cross: FC<Props> = () => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2017 25.1424L0.574293 2.51494L2.79785 0.291382L25.4253 22.9188L23.2017 25.1424Z" fill="#EDF9F1"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4252 2.51497L2.79778 25.1424L0.574219 22.9188L23.2016 0.291407L25.4252 2.51497Z" fill="#EDF9F1"/>
    </svg>
  );
};
