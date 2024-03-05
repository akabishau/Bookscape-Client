const BOOK_PATHS = [
  'M405.44 3.41822C422.012 0.859187 438.869 0.854182 455.44 3.42214V269.5H405.44V3.41822Z',
  'M779.44 3.42823C796.012 0.869195 812.869 0.864192 829.44 3.43216V269.5H779.44V3.42823Z',
  'M1343.49 3.41688C1359.72 0.859532 1376.25 0.854628 1392.49 3.42111V269.5H1343.49V3.41688Z',
  'M1397.49 27.2347C1411.74 24.9206 1426.24 24.9154 1440.49 27.2377V269.5H1397.49V27.2347Z',
  'M1295.49 57.2347C1309.74 54.9206 1324.24 54.9154 1338.49 57.2377V269.5H1295.49V57.2347Z',
  'M1217.76 53.8271L1290.35 253.281L1246.18 269.359L1173.59 69.9033C1187.43 62.3882 1202.33 56.9693 1217.76 53.8271Z',
  'M515.44 5.40158C530.349 2.87132 545.523 2.86626 560.44 5.40522V269.51H515.44V5.40158Z',
  'M354.44 13.408C369.671 10.8557 385.217 10.8572 400.44 13.4123V269.5H354.44V13.408Z',
  'M677.44 13.408C692.671 10.8557 708.217 10.8572 723.44 13.4123V269.5H677.44V13.408Z',
  'M728.44 13.408C743.671 10.8557 759.217 10.8572 774.44 13.4123V269.5H728.44V13.408Z',
  'M565.44 13.4131C581.994 10.8539 598.894 10.8555 615.44 13.4179V269.5H565.44V13.4131Z',
  'M297.44 269.5V23.4207C314.681 20.863 332.198 20.863 349.44 23.4207V269.5H297.44Z',
  'M460.44 269.5V23.4182C477.012 20.8639 493.868 20.8639 510.44 23.4182V269.5H460.44Z',
  'M620.44 269.5V23.4207C637.672 20.863 655.208 20.863 672.44 23.4207V269.5H620.44Z',
  'M834.44 269.5V23.4282C851.012 20.8739 867.868 20.8739 884.44 23.4282V269.5H834.44Z',
  'M909.363 223.5H1165.52C1168.06 238.723 1168.06 254.277 1165.52 269.5H909.363C906.816 254.277 906.816 238.723 909.363 223.5Z',
  'M893.371 166.5H1135.51C1138.07 183.742 1138.07 201.258 1135.51 218.5H893.371C890.813 201.258 890.813 183.742 893.371 166.5Z',
  'M1181.52 116.54H929.359C926.792 131.212 926.756 146.22 929.253 160.906C929.253 160.906 929.253 160.906 929.253 160.906L929.362 161.54H1181.52L1181.63 160.906L1181.52 116.54ZM1181.52 116.54C1184.09 131.212 1184.12 146.22 1181.63 160.906L1181.52 116.54Z',
  'M132.94 21.9899C148.16 19.3399 163.72 19.3399 178.94 21.9899V270H132.94V21.9899Z',
  'M182.94 1.98994C201.51 -0.660059 220.37 -0.660059 238.94 1.98994V270H182.94V1.98994Z',
  'M242.94 11.9899C259.5 9.33994 276.38 9.33994 292.94 11.9899V270H242.94V11.9899Z',
  'M80.3916 32.4656L0.0065918 253.322L48.5605 270.994L128.946 50.1378L80.3916 32.4656Z'
];

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  const stop1Ref = useRef<SVGStopElement | null>(null);
  const stop2Ref = useRef<SVGStopElement | null>(null);

  useEffect(() => {
    if (stop1Ref.current && stop2Ref.current) {
      stop1Ref.current.setAttribute('offset', `${progress}%`);
      stop2Ref.current.setAttribute('offset', `${progress}%`);
    }
  }, [progress]);

  return (
    <Wrapper>
      {/* TODO: Learn more about SVG and how to use it in React */}
      <svg
        // svg fills the entire width and height of the parent container and maintains its aspect ratio due to the viewBox attribute
        width="100%"
        height="100%"
        viewBox="0 0 1441 271"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="0">
            <stop id="stop1" ref={stop1Ref} offset="50%" stopColor="black" />
            <stop
              id="stop2"
              ref={stop2Ref}
              offset="50%"
              stopColor="transparent"
            />
          </linearGradient>
          <mask id="bookMask">
            {BOOK_PATHS.map((d, i) => (
              <path key={i} d={d} fill="white" />
            ))}
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#progressGradient)"
          mask="url(#bookMask)"
        />

        <rect
          width="100%"
          height="100%"
          fill="url(#progressGradient)"
          mask="url(#bookMask)"
        />
        {BOOK_PATHS.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#18191C" />
        ))}
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: aliceblue;
`;
