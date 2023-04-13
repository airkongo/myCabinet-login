import { memo, SVGProps } from 'react';

const Rectangle2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 707 85' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 15C0 6.71573 6.71573 0 15 0H692C700.284 0 707 6.71573 707 15V70C707 78.2843 700.284 85 692 85H15C6.71572 85 0 78.2843 0 70V15Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Rectangle2Icon);
export { Memo as Rectangle2Icon };
