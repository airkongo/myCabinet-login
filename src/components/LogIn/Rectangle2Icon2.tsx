import { memo, SVGProps } from 'react';

const Rectangle2Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 560 89' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 15C0 6.71573 6.71573 0 15 0H545C553.284 0 560 6.71573 560 15V74C560 82.2843 553.284 89 545 89H15C6.71574 89 0 82.2843 0 74V15Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Rectangle2Icon2);
export { Memo as Rectangle2Icon2 };
