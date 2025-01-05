import React, { SVGProps } from 'react';
import classNames from 'classnames';
import { motion } from 'motion/react';
import { Monogram } from './Monogram';

export type IconProps = Partial<SVGProps<SVGSVGElement>> & {
  title?: string;
};

const PATH_ANIMATION = {
  initial: { pathLength: 0, pathOffset: 1 },
  animate: { pathLength: 1, pathOffset: 0 },
  transition: { duration: 1, ease: 'easeInOut' },
};

const Symbols = {
  Monogram: (props: IconProps) => <Monogram {...props} />,
  Logo: (props: IconProps) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 197" width="300" height="197" {...props}>
      <path
        d="M0,0 L6,0 L11,4 L18,14 L31,32 L41,46 L45,41 L55,27 L70,5 L74,2 L81,2 L87,7 L104,76 L122,147 L125,159 L125,169 L121,174 L13,174 L-16,175 L-30,175 L-40,172 L-43,167 L-41,156 L-20,69 L-5,6 L-2,1 Z "
        fill={props.stroke}
        transform="translate(169,8)"
      />
      <path
        d="M0,0 L20,0 L41,4 L58,10 L72,17 L88,28 L99,40 L103,45 L112,61 L116,74 L117,84 L117,97 L113,113 L105,129 L98,138 L82,153 L64,163 L50,169 L37,173 L19,177 L2,177 L-3,174 L-5,170 L-4,118 L-5,57 L-5,6 Z "
        fill={props.stroke}
        transform="translate(16,7)"
      />
    </svg>
  ),
  Liverpool: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={96} height={96} viewBox="0 0 48 48" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M30.39 40.818V24c0-1.346-1.345-2.69-2.69-2.69h-6.054"
      ></path>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M34.427 40.818V19.291c0-1.346-1.345-2.691-2.69-2.691H21.645"
      ></path>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M38.464 40.818V14.582c0-1.346-1.346-2.691-2.691-2.691H21.645"
      ></path>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M42.5 40.818V9.873c0-1.346-1.345-2.691-2.69-2.691H21.645m-4.035 0V24c0 1.346 1.345 2.69 2.69 2.69h6.055"
      ></path>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.573 7.182v21.527c0 1.346 1.345 2.691 2.69 2.691h10.091"
      ></path>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.536 7.182v26.236c0 1.346 1.346 2.691 2.691 2.691h14.128"
      ></path>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.5 7.182v30.945c0 1.346 1.346 2.691 2.69 2.691h18.164"
      ></path>
    </svg>
  ),
  Amazon: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={96} height={96} viewBox="0 0 48 48" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M24 20.205v-7.59h7.59m0 0L24 20.205m7.59-14.231v6.641M17.359 5.974v14.231H24m9.658 4.569c1.297-.526 3.606-1.224 4.3-.382c.752.912-.198 2.889-1.073 4.426"
      ></path>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.77 25.383c2.05 1.629 8.109 4.122 14.563 4.122c6.153 0 9.91-2.23 11.858-3.59M26.846 5.974l4.744 4.744m-9.487-4.744l5.692 6.641M17.359 7.872L24 15.462m-6.641-1.898L24 20.205"
      ></path>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"
      ></path>
    </svg>
  ),
  Ring: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" {...props}>
      <defs>
        <mask id="ipTDiamondRing0">
          <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
            <circle cx={25} cy={29} r={14}></circle>
            <path d="m18 8l3-4h8.054L32 8l-7 6z" />
          </g>
        </mask>
      </defs>
      <path fill={props.stroke} d="M0 0h48v48H0z" mask="url(#ipTDiamondRing0)"></path>
    </svg>
  ),
  Drink: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor">
        <path d="m8.205 15.358l-3.688-4.277C2.625 8.887 1.68 7.79 2.098 6.895S3.98 6 6.901 6h4.198c2.922 0 4.383 0 4.803.895c.42.894-.527 1.992-2.42 4.186l-3.687 4.277C9.425 15.786 9.24 16 9 16s-.426-.214-.795-.642M8.5 6l-.401-2.406a1 1 0 0 0-.67-.784L5 2m4 14v6m-1.5 0h3"></path>
        <path d="M15.86 8.833A3.52 3.52 0 0 0 18.482 10A3.51 3.51 0 0 0 22 6.5C22 4.567 20.425 3 18.482 3A3.51 3.51 0 0 0 15 6"></path>
      </g>
    </svg>
  ),
  Dinner: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 512 512" {...props}>
      <path
        fill={props.stroke}
        d="M464 344.063c0-109.308-84.755-199.193-192-207.39V80h-32v56.673c-107.245 8.2-192 98.082-192 207.39v33.107h416Zm-32 1.107H80v-1.107c0-97.046 78.953-176 176-176s176 78.953 176 176ZM16 416h480v32H16z"
      ></path>
    </svg>
  ),
  Vals: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        d="M14 3.5c0 .83-.67 1.5-1.5 1.5S11 4.33 11 3.5S11.67 2 12.5 2s1.5.67 1.5 1.5M8.5 5C7.67 5 7 5.67 7 6.5S7.67 8 8.5 8S10 7.33 10 6.5S9.33 5 8.5 5m5.5 7l-.78-2.25h2.96l2.16-1.08c.37-.17.52-.63.33-1a.737.737 0 0 0-1-.34l-.82.41l-.49-.84c-.29-.65-1-1.02-1.7-.86l-2.47.53c-.69.15-1.19.78-1.19 1.5v.7l-2.43 1.62h.01c-.08.07-.19.16-.25.28l-.89 1.77l-1.78.89c-.37.17-.52.64-.33 1.01a.753.753 0 0 0 1.01.33l2.22-1.11L9.6 11.5L11 13c-1 3-8 7-8 7s4 2 9 2s9-2 9-2s-5-4-7-8m2.85-.91l-.32.16h-1.2l.06.16c.52 1.03 1.28 2.09 2.11 3.03l-.53-3.41z"
      ></path>
    </svg>
  ),
  Dance: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 256 256" {...props}>
      <path
        fill={props.stroke}
        d="M118 66.23V16a6 6 0 0 0-12 0v50.23a86 86 0 1 0 12 0M185.74 146h-35.87c-1.3-32.59-13-54.15-22.36-66.35A74.15 74.15 0 0 1 185.74 146m-99.6 12h51.72c-1.63 37.69-18.33 58.46-25.86 66c-7.54-7.55-24.23-28.33-25.86-66m0-12c1.63-37.69 18.33-58.46 25.86-66c7.54 7.51 24.23 28.29 25.86 66Zm10.35-66.35c-9.38 12.2-21.06 33.76-22.36 66.35H38.26a74.15 74.15 0 0 1 58.23-66.35M38.26 158h35.87c1.3 32.59 13 54.15 22.36 66.35A74.15 74.15 0 0 1 38.26 158m89.25 66.35c9.38-12.2 21.06-33.76 22.36-66.35h35.87a74.15 74.15 0 0 1-58.23 66.35M254 88a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0V94h-10a6 6 0 0 1 0-12h10V72a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6m-46-42h-18v18a6 6 0 0 1-12 0V46h-18a6 6 0 0 1 0-12h18V16a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12"
      ></path>
    </svg>
  ),
  Love: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" {...props}>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}>
        <path d="M29.516 17.5c5.523 9.566 4.96 20.23-1.258 23.82S12.523 40.067 7 30.5S2.04 10.27 8.258 6.68S23.994 7.934 29.516 17.5"></path>
        <path d="M18.258 17.5c-5.523 9.566-4.96 20.23 1.258 23.82s15.736-1.254 21.259-10.82s4.96-20.23-1.259-23.82C33.3 3.09 23.781 7.934 18.258 17.5"></path>
        <path d="M23.753 10.344c2.145 1.908 4.13 4.325 5.764 7.156c5.522 9.566 4.959 20.23-1.259 23.82c-1.298.75-2.74 1.132-4.26 1.18"></path>
      </g>
    </svg>
  ),
  KidsNotAllowed: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.75a3 3 0 1 0 0-6a3 3 0 0 0 0 6m5.25 6.75a5.25 5.25 0 1 0-10.5 0v2.25H9l.75 7.5h4.5l.75-7.5h2.25zM1 18.991l4 4m0-4l-4 4m18-4l4 4m0-4l-4 4"
      ></path>
    </svg>
  ),
  Dress: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" color="currentColor">
        <path d="m15 4l-3 2l-3-2c-.586.51-1.93 1.293-1.997 2.146c-.029.37.126.571.435.975C8.112 8.002 9 8.521 9 10h6c0-1.48.888-1.998 1.562-2.879c.31-.404.464-.606.434-.975C16.93 5.293 15.587 4.509 15 4M9 4V2m6 2V2m-5.5 8h5m3.5 9c2 0 3-2.173 3-2.173c-2.825-1.836-4.5-3.993-5.413-5.622c-.347-.62-.521-.93-.755-1.068C14.598 10 14.285 10 13.659 10H10.34c-.626 0-.939 0-1.173.137s-.408.447-.755 1.068C7.5 12.834 5.825 14.99 3 16.827C3 16.827 4 19 6 19"></path>
        <path d="M13.706 14c.34.796 1.815 2.671 3.435 4.31c.597.605.896.907.855 1.42c-.04.512-.29.683-.79 1.025C16.07 21.53 14.336 22 12 22s-4.07-.469-5.207-1.245c-.5-.342-.75-.513-.79-1.025c-.04-.513.259-.815.856-1.42c1.62-1.639 3.096-3.514 3.435-4.31"></path>
      </g>
    </svg>
  ),
  Suit: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.8 3.959c-1.032.665-2.907-.04-3.672 1.077c-.233.34-.118.79.112 1.69l1.99 9.773c.45 1.758.674 2.637 1.373 3.15c.285.21.58.308.897.351M5.8 3.959C7.184 3.066 5.99 2 8 2l2.155 1.693c.859.674 1.288 1.012 1.32 1.488c.032.477-.347.875-1.106 1.67l-.554.58c-.379.397-.569.596-.796.579s-.389-.242-.71-.691zm12.4 0c1.032.665 2.907-.04 3.672 1.077c.233.34.118.79-.112 1.69l-1.99 9.773c-.45 1.758-.674 2.637-1.372 3.15c-.286.21-.582.308-.898.351m.7-16.041C16.816 3.066 18.01 2 16 2l-2.155 1.693c-.859.674-1.288 1.012-1.32 1.488c-.032.477.347.875 1.106 1.67l.554.58c.379.397.569.596.796.579s.389-.242.71-.691zM10.287 7l.87 1.452c.205.34.307.512.338.703c.03.192-.015.386-.104.773L9.55 17.941c-.247 1.386.485 2.06 1.196 2.95c.591.74.887 1.109 1.255 1.109s.664-.37 1.255-1.11c.71-.888 1.443-1.563 1.196-2.949L12.61 9.928c-.089-.387-.133-.581-.103-.773c.03-.191.133-.362.337-.703L13.714 7"
        color="currentColor"
      ></path>
    </svg>
  ),
  Tie: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.721 5.61c-.559-.99-.838-1.486-.674-1.936s.692-.638 1.748-1.012l.9-.319C11.341 2.114 11.665 2 12 2s.659.114 1.305.343l.9.32c1.056.373 1.584.56 1.748 1.01c.165.45-.115.946-.674 1.936l-.516.915c-.265.469-.397.703-.63.887c-.23.184-.445.245-.875.368c-.411.118-.88.221-1.258.221s-.847-.103-1.258-.221c-.43-.123-.644-.184-.876-.368s-.364-.418-.629-.887zM10.08 8l-1.66 7.144c-.36 1.55-.539 2.324-.333 3.052l.012.043c.216.725.782 1.278 1.912 2.385c.933.913 1.4 1.37 1.973 1.376h.032c.574-.007 1.04-.463 1.973-1.376c1.13-1.107 1.696-1.66 1.912-2.385l.012-.043c.206-.728.026-1.503-.334-3.052L13.921 8"
        color="currentColor"
      ></path>
    </svg>
  ),
  Heel: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" {...props}>
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M29.183 20C31.264 15.054 36.35 10.667 39 8c1.104.667 5 2.604 5 7c0 4-1.455 7.111-3 8l-5.987 4.191a23 23 0 0 0-6.533 7.01L25 40H4v-4c2.429-1.333 9.82-5.867 13-8c7 4 10.5-4 12.183-8M43 21v19"
      ></path>
    </svg>
  ),
  Search: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}>
      <path
        fill={props.stroke}
        d="M9.539 15.23q-2.398 0-4.065-1.666Q3.808 11.899 3.808 9.5t1.666-4.065T9.539 3.77t4.064 1.666T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l5.909 5.907q.14.14.15.345q.009.203-.15.363q-.16.16-.354.16t-.354-.16l-5.908-5.908q-.75.639-1.725.989t-1.96.35m0-1q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361T12.9 6.14T9.54 4.77q-1.991 0-3.361 1.37T4.808 9.5t1.37 3.36t3.36 1.37"
      ></path>
    </svg>
  ),
  Password: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}>
      <path
        fill={props.stroke}
        d="M3 17.5h18q.213 0 .356.144t.144.357t-.144.356T21 18.5H3q-.213 0-.356-.144t-.144-.357t.144-.356T3 17.5m1-6.666l-.744 1.312q-.089.163-.265.207q-.178.045-.34-.044q-.161-.09-.205-.267q-.044-.179.048-.338l.744-1.312H1.75q-.192 0-.317-.125t-.125-.316t.125-.317t.317-.126h1.489l-.745-1.262q-.092-.16-.048-.338t.206-.267t.339-.044t.265.207L4 9.065l.744-1.261q.089-.163.266-.208t.338.045t.206.267t-.048.338L4.76 9.508h1.49q.192 0 .317.125t.125.316t-.125.317t-.317.126H4.761l.745 1.312q.092.16.048.338t-.206.267q-.161.089-.338.044q-.177-.044-.266-.207zm8 0l-.744 1.312q-.089.163-.266.207q-.177.045-.338-.044q-.162-.09-.206-.267q-.044-.179.048-.338l.744-1.312H9.75q-.192 0-.317-.125t-.125-.316t.125-.317t.317-.126h1.489l-.745-1.262q-.092-.16-.048-.338t.206-.267t.339-.044t.265.207L12 9.065l.744-1.261q.089-.163.266-.208t.338.045q.162.09.206.267t-.048.338l-.744 1.262h1.488q.192 0 .317.125t.125.316t-.125.317t-.317.126h-1.489l.745 1.312q.092.16.048.338t-.206.267t-.339.044t-.265-.207zm8 0l-.744 1.312q-.089.163-.266.207q-.177.045-.338-.044q-.162-.09-.206-.267q-.044-.179.048-.338l.744-1.312H17.75q-.192 0-.317-.125t-.125-.316t.125-.317t.317-.126h1.489l-.745-1.262q-.092-.16-.048-.338t.206-.267t.338-.044t.266.207L20 9.065l.744-1.261q.089-.163.266-.208t.338.045t.206.267t-.048.338l-.744 1.262h1.488q.192 0 .317.125t.125.316t-.125.317t-.317.126h-1.489l.745 1.312q.092.16.048.338t-.206.267t-.338.044t-.266-.207z"
      ></path>
    </svg>
  ),
  Heart: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}>
      <path
        fill={props.stroke}
        fillOpacity={0}
        d="M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9c0 0 -7.43 -7.79 -8.24 -9c-0.48 -0.71 -0.76 -1.57 -0.76 -2.5c0 -2.49 2.01 -4.5 4.5 -4.5c1.56 0 2.87 0.84 3.74 2c0.76 1 0.76 1 0.76 1Z"
      >
        <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></animate>
      </path>
      <path
        fill="none"
        stroke={props.stroke}
        strokeDasharray={32}
        strokeDashoffset={32}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
      >
        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"></animate>
      </path>
    </svg>
  ),
  Error: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" {...props}>
      <path
        fill={props.stroke}
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m6 11l5-5l13 13L37 6l5 5l-13 13l13 13l-5 5l-13-13l-13 13l-5-5l13-13z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  Success: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"></path>
    </svg>
  ),
  Menu: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}>
      <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M4 5h10M4 12h16M4 19h16"></path>
    </svg>
  ),
  Happiness: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" {...props}>
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" color="currentColor">
        <motion.circle cx={12} cy={12} r={10} {...PATH_ANIMATION}></motion.circle>
        <motion.path
          d="M8 15a5 5 0 0 0 4 2a5 5 0 0 0 4-2m-1-7s-1 1-1 2c.75-1 2.25-1 3 0M9 8s1 1 1 2c-.75-1-2.25-1-3 0"
          {...PATH_ANIMATION}
        />
      </g>
    </svg>
  ),
} as const;

type Symbol = keyof typeof Symbols;

interface IconProperties {
  symbol: Symbol;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
}

export const Icon: React.FC<SVGProps<SVGSVGElement> & IconProperties> = ({ symbol, size, stroke, ...props }) => {
  return (
    <>
      {Symbols[symbol]({
        className: classNames({
          'w-4 h-4': size === 'sm',
          'w-6 h-6': size === 'md',
          'w-8 h-8': size === 'lg',
          'w-12 h-12': size === 'xl',
          'w-16 h-16': size === '2xl',
          'w-24 h-24': size === '3xl',
          'w-32 h-32': size === '4xl',
          'w-48 h-48': size === '5xl',
        }),
        stroke: stroke || 'oklch(var(--a))',
        ...props,
      })}
    </>
  );
};

export default Symbol;
