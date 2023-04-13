import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1603 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_3_1115)'>
      <path
        d='M534.405 -0.0132823L0.0361328 -0.0133057L0.0361321 15.9868L534.405 15.9868L534.405 -0.0132823Z'
        fill='black'
      />
      <path d='M1070.15 2.38762e-05L523.929 0L523.929 16L1070.15 16L1070.15 2.38762e-05Z' fill='#C92227' />
      <path
        d='M1603.05 -0.00131942L1068.68 -0.00134277L1068.68 15.9987L1603.05 15.9988L1603.05 -0.00131942Z'
        fill='#00773D'
      />
    </g>
    <defs>
      <clipPath id='clip0_3_1115'>
        <rect width={16.0001} height={1603} fill='white' transform='translate(1603) rotate(90)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(FrameIcon);
export { Memo as FrameIcon };
