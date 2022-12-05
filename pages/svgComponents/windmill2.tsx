import React from 'react'

export default function Windmill2() {
  return (
    <svg
      width="120"
      height="194"
      viewBox="0 0 120 194"
      // viewBox="0 0 750 1262.95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`group duration-300 cursor-pointers hover:scale-105 bottom-8 cursor-pointer hover:[animation-play-state:paused] h-full`}
    >
      <path
        d="M58 193.061L80.5553 193.362L79.9539 167.197L76.6457 166.897L72.4354 46H66.1199L61.3081 166.596L58.3007 166.897L58 193.061Z"
        fill="#3AA5E5"
      />
      <g opacity="0.99" filter="url(#filter0_d_320_843)">
        <path
          // this one
          d="M85.9858 108.564C81.7747 109.67 65.5918 54.9814 62.4996 51.9948C59.4087 49.0099 2.9692 33.5531 4.08814 29.4622C5.20708 25.3695 62.2888 39.1061 66.5 38C70.7102 36.8939 112.535 -2.82318 115.625 0.161636C118.718 3.14831 78.1189 44.402 77 48.4948C75.881 52.5869 90.1964 107.458 85.9858 108.564Z"
          fill="#4BA9E2"
          className="windmill2 testAnimation will-change-transform group-hover:[animation-play-state:paused]"
        />
      </g>
      <path
        opacity="0.99"
        d="M75.1738 45.8475C75.1822 49.2792 72.3228 52.0682 68.7871 52.0769C65.2514 52.0855 62.3783 49.3106 62.3699 45.8788C62.3615 42.447 65.221 39.658 68.7567 39.6494C72.2924 39.6407 75.1654 42.4157 75.1738 45.8475Z"
        fill="#182641"
      />
      <defs>
        <filter
          id="filter0_d_320_843"
          x="0.0717773"
          y="0.00195312"
          width="119.722"
          height="116.579"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_320_843"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_320_843"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
