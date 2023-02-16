import { FC } from 'react';

const Close: FC = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.5">
        <path
          d="M13 1L1 13"
          stroke="#262626"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 1L13 13"
          stroke="#262626"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};
export default Close;
