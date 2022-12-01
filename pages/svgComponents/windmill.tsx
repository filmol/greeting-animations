import React from 'react'

export default function Windmill({ hideOnMobile }: { hideOnMobile?: boolean }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      viewBox='0 0 750 1262.95'
      className={`group duration-300 cursor-pointers hover:scale-105 bottom-8 cursor-pointer hover:[animation-play-state:paused] h-full ${
        hideOnMobile && 'hidden lg:inline'
      }`}
    >
      <defs>
        <linearGradient
          id='linearGradient3834'
          x1='251.28'
          x2='474.02'
          y1='630.15'
          y2='630.15'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor='#ccc' stopOpacity='0'></stop>
          <stop offset='0.125' stopColor='#ccc' stopOpacity='0.655'></stop>
          <stop offset='0.5' stopColor='#ccc'></stop>
          <stop offset='1' stopColor='#ccc' stopOpacity='0'></stop>
        </linearGradient>
      </defs>
      <g
        fillRule='evenodd'
        stroke='#000'
        strokeLinecap='round'
        strokeWidth='2'
        className='group'
        // transform='translate(-17.756 -37.857)'
      >
        <path
          fill='url(#linearGradient3834)'
          d='M325.86 253.48h73.581L416.96 999.8H297.83z'
          opacity='0.99'
        ></path>
        <path
          fill='#b3b3b3'
          viewBox='0 0 24 24'
          d='M443.66 620.067c-21.91 5.87-110.53-282.22-126.57-298.26-16.033-16.03-304.12-104.66-298.25-126.56 5.87-21.91 299.67 45.39 321.58 39.52 21.905-5.87 242.7-211.05 258.73-195.02 16.04 16.04-189.14 236.83-195.01 258.74-5.87 21.907 61.425 315.71 39.518 321.58z'
          opacity='0.99'
          className='windmill testAnimation will-change-transform group-hover:[animation-play-state:paused]'
        >
          {/* <animateTransform
            attributeType='xml'
            attributeName='transform'
            type='rotate'
            from='360 358 283'
            to='0 358 283'
            dur='4s'
            additive='sum'
            repeatCount='indefinite'
            style={{ animationPlayState: 'paused' }}
          /> */}
        </path>
        <path
          fill='#ccc'
          d='M388.241 283.955c0 18.384-14.903 33.287-33.287 33.287s-33.287-14.903-33.287-33.287 14.903-33.287 33.287-33.287 33.287 14.903 33.287 33.287z'
          opacity='0.99'
        ></path>
      </g>
    </svg>
  )
}