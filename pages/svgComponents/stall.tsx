import { useState } from "react";
import Modal from "../components/modal";

const Stall = () => {
  //   const [cssClass, setCssClass] = useState<string>("");
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        content={{
          title: "Devoteam 5 values",
          link: "https://www.devoteam.com/join-us/values/",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />{" "}
      <g
        className="absolute cursor-pointer"
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
      >
        <path
          d="M112.996 139.121C164.56 139.121 206.36 135.775 206.36 131.646C206.36 127.517 164.56 124.171 112.996 124.171C61.4331 124.171 19.6328 127.517 19.6328 131.646C19.6328 135.775 61.4331 139.121 112.996 139.121Z"
          className="fill-[#7B5B79] dark:fill-[#2D6497]"
        />
        <path
          d="M163.561 80.5994H83.5312V132.262H163.561V80.5994Z"
          className="fill-[#7E6C9E] dark:fill-[#6278B1]"
          stroke="#6278B1"
          stroke-width="1.38192"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M92.5176 97.3853L105.43 97.6133"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M91.6663 96.3733L92.6631 97.4616L91.4199 98.3457"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M106.428 98.6151L105.357 97.595L106.536 96.6309"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M93.2569 95.7319L94.9287 97.5572L92.8438 99.0398"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M104.658 99.256L102.863 97.5454L104.84 95.9285"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M95.6602 102.881L102.308 92.1162"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M94.332 103.091L95.7984 102.797L95.9649 104.287"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M103.697 91.7769L102.254 92.1678L101.984 90.6919"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M94.5566 101.429L97.0158 100.935L97.295 103.434"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M103.385 93.5883L100.967 94.2438L100.514 91.7688"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M102.177 102.997L95.9121 92.0042"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M103.494 103.253L102.039 102.906L101.82 104.39"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M94.5352 91.6149L95.9628 92.0565L96.2846 90.5911"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M103.331 101.584L100.89 101.003L100.523 103.491"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M94.7852 93.4362L97.1792 94.1767L97.719 91.7192"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M101.106 97.5368C101.126 96.3957 100.192 95.4539 99.0187 95.4331C97.8458 95.4124 96.8787 96.3207 96.8586 97.4617C96.8385 98.6028 97.7731 99.5446 98.946 99.5653C100.119 99.5861 101.086 98.6778 101.106 97.5368Z"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M99.0458 81.9163L99.0195 95.4338"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M117.84 107.429L133.418 107.704"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M116.815 106.207L118.017 107.52L116.518 108.587"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M134.625 108.912L133.334 107.682L134.756 106.519"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M118.735 105.433L120.752 107.635L118.236 109.424"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M132.49 109.685L130.324 107.621L132.709 105.67"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M121.633 114.06L129.653 101.073"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M120.033 114.312L121.802 113.956L122.003 115.754"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M131.33 100.662L129.59 101.134L129.264 99.3533"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M120.303 112.307L123.27 111.71L123.606 114.726"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M130.953 102.848L128.035 103.639L127.488 100.653"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M129.498 114.199L121.939 100.936"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M131.086 114.507L129.33 114.089L129.066 115.879"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M120.275 100.467L121.998 101L122.386 99.2319"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M130.887 112.493L127.943 111.792L127.5 114.794"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M120.576 102.665L123.464 103.558L124.116 100.594"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M128.205 107.611C128.23 106.234 127.102 105.098 125.687 105.073C124.272 105.048 123.105 106.144 123.081 107.52C123.057 108.897 124.184 110.033 125.599 110.058C127.014 110.083 128.181 108.987 128.205 107.611Z"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M125.629 80.813L125.685 105.073"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M144.885 91.6311L156.149 91.8301"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M144.145 90.749L145.014 91.6984L143.93 92.4696"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M157.022 92.7038L156.088 91.814L157.116 90.9729"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M145.532 90.189L146.991 91.7812L145.172 93.0745"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M155.478 93.2632L153.912 91.771L155.636 90.3606"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M147.629 96.4265L153.428 87.0359"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M146.471 96.6089L147.75 96.3518L147.895 97.6518"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M154.638 86.7394L153.38 87.0804L153.145 85.793"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M146.666 95.1587L148.811 94.7275L149.055 96.9077"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M154.366 88.3196L152.256 88.8914L151.861 86.7324"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M153.315 96.5269L147.85 86.9373"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M154.462 96.7503L153.193 96.4482L153.002 97.7423"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M146.648 86.598L147.894 86.9832L148.175 85.7048"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M154.318 95.2932L152.189 94.7866L151.869 96.9568"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M146.865 88.1872L148.954 88.8332L149.424 86.6895"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M152.379 91.7632C152.397 90.7678 151.582 89.9462 150.559 89.9281C149.535 89.9101 148.692 90.7023 148.674 91.6977C148.657 92.6931 149.472 93.5147 150.495 93.5327C151.518 93.5508 152.362 92.7585 152.379 91.7632Z"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M150.558 89.9286L150.518 81.916"
          stroke="white"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M169.374 74.4198C169.163 74.2243 166.52 74.0599 162.261 73.9273V13.7932H159.623V73.8542C141.368 73.4017 102.436 73.4021 86.1028 73.8965V13.7932H83.0356V74.0071C80.3575 74.1233 78.7677 74.2608 78.6524 74.4198C77.7621 75.647 77.2811 79.9896 78.6524 81.9166C80.0236 83.8435 167.543 83.2611 169.374 81.9166C171.205 80.572 170.637 75.5914 169.374 74.4198Z"
          className="fill-[#604F80] dark:fill-[#2D6497]"
        />
        <path
          d="M105.284 63.7807C107.911 64.8314 109.931 63.7807 109.931 63.7807V73.5562C119.125 73.5046 129.173 73.509 138.351 73.5679V57.0679L145.267 73.6244C148.825 73.6603 152.157 73.7054 155.142 73.7596L156.893 73.092C156.893 73.092 146.132 41.0438 140.621 37.7956C135.11 34.5475 120.45 36.3881 120.45 36.3881C120.45 36.3881 117.044 35.955 113.65 37.5791C110.255 39.2032 105.824 50.1385 105.824 50.1385L95.8826 45.6994L93.9375 53.7115C93.9375 53.7115 100.499 61.8665 105.284 63.7807Z"
          fill="#D7EBE7"
        />
        <path
          d="M121.375 18.0502C121.375 18.0502 125.772 14.5797 128.396 14.7158C131.019 14.8519 136.725 18.5946 137.472 20.0917C138.219 21.5888 135.977 29.2747 135.977 29.2747L133.464 23.745L131.019 26.847L121.375 18.0502Z"
          fill="#D74859"
        />
        <path
          d="M109.934 73.5565C119.224 73.5044 129.386 73.5095 138.641 73.5701L138.35 67.8327L131.024 67.3345C131.024 67.3345 130.481 59.0973 130.889 50.3948C131.305 41.5023 134.531 36.1171 134.531 36.1171L132.951 35.9883C132.951 35.9883 131.178 38.2449 129.978 42.148C128.901 45.6513 128.452 48.9882 128.452 48.9882L115.248 48.5382C115.248 48.5382 115.358 44.8502 116.448 41.3676C117.539 37.8851 118.798 36.3476 118.798 36.3476L116.441 36.6416C116.441 36.6416 113.325 40.0147 112.492 51.3508C111.723 61.8333 112.146 68.0807 112.146 68.0807H109.959L109.934 73.5565Z"
          fill="#F1AF78"
        />
        <path
          d="M127.331 26.1748L129.48 29.3164L125.327 32.165L123.402 28.7721L127.331 26.1748Z"
          fill="#D47B75"
        />
        <path
          d="M117.657 21.2927C117.657 21.2927 113.604 30.0224 118.89 31.6129C124.176 33.2033 128.479 25.2078 128.479 25.2078C128.479 25.2078 127.123 19.6401 122.923 18.9896C118.724 18.3391 117.657 21.2927 117.657 21.2927Z"
          fill="#EFA48F"
        />
        <path
          d="M128.641 28.0686C130.414 28.4428 132.952 33.4311 132.952 35.9877C130.507 39.7304 123.956 40.7575 119.269 37.9884C118.438 35.789 118.429 33.4745 118.889 31.6126L128.641 28.0686Z"
          fill="#D74859"
        />
        <path
          d="M156.892 73.0918C157.136 71.7746 156.165 67.9734 155.035 67.783C153.905 67.5926 144.898 71.0142 144.419 71.5967C143.941 72.1793 145.857 76.6737 146.672 76.9896C147.487 77.3055 156.892 73.0918 156.892 73.0918Z"
          fill="#D74859"
        />
        <path
          d="M95.8782 45.6465C97.0775 45.2603 99.4457 46.2561 99.8016 47.4494C100.157 48.6427 97.8437 57.0449 96.8927 57.0677C95.9417 57.0904 93.791 54.3117 93.9367 53.7113C94.0825 53.1108 95.1713 45.8742 95.8782 45.6465Z"
          fill="#D74859"
        />
        <path
          d="M117.422 24.1926C117.422 24.1926 117.905 23.9823 118.59 24.3777"
          stroke="#303E4E"
          stroke-width="0.191633"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M122.125 24.9453C122.125 24.9453 122.609 24.735 123.294 25.1304"
          stroke="#303E4E"
          stroke-width="0.191633"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M117.582 24.2142C117.582 24.2142 117.445 24.881 117.763 24.9523C118.082 25.0236 118.096 24.2498 118.096 24.2498C118.096 24.2498 117.78 24.0941 117.582 24.2142Z"
          fill="#303E4E"
        />
        <path
          d="M122.287 24.9669C122.287 24.9669 122.15 25.6337 122.468 25.705C122.787 25.7763 122.802 25.0024 122.802 25.0024C122.802 25.0024 122.485 24.8468 122.287 24.9669Z"
          fill="#303E4E"
        />
        <path
          d="M116.23 26.2234C116.23 26.2234 113.148 29.3062 113.721 31.3632C114.295 33.4201 115.515 32.993 115.515 32.993C115.515 32.993 114.323 35.9791 116.983 36.8789C119.644 37.7787 120.763 34.8557 120.763 34.8557C120.763 34.8557 122.783 35.9953 124.647 34.7148C127.196 32.9646 126.45 27.3959 127.006 25.592L126.733 24.7859C126.733 24.7859 124.391 28.6282 119.438 27.911C117.275 27.5978 116.23 26.2234 116.23 26.2234Z"
          fill="#303E4E"
        />
        <path
          d="M117.117 22.2131C117.604 21.9598 119.405 22.7035 119.536 22.9133C119.666 23.1231 119.573 23.5805 119.336 23.5988C119.1 23.6171 117.035 23.2969 116.851 23.0671C116.716 22.8985 116.823 22.3659 117.117 22.2131Z"
          fill="#303E4E"
        />
        <path
          d="M121.952 23.0245C122.445 22.7885 124.661 23.53 124.967 23.8974C125.13 24.0928 125.154 24.3949 124.912 24.4959C124.67 24.5969 122.168 24.0987 121.929 23.9644C121.689 23.8302 121.689 23.1502 121.952 23.0245Z"
          fill="#303E4E"
        />
        <path
          d="M84.0467 0.999756H161.872C161.872 0.999756 175.857 15.2313 168.498 15.9965C165.674 16.2902 163.314 14.1602 163.314 14.1602C163.314 14.1602 161.809 16.6086 158.297 16.6086C154.785 16.6086 153.113 14.0071 153.113 14.0071C153.113 14.0071 150.922 17.2699 146.407 16.8108C141.892 16.3517 139.902 13.395 139.902 13.395C139.902 13.395 138.564 17.1471 133.882 17.2604C129.199 17.3737 127.36 13.395 127.36 13.395C127.36 13.395 125.687 16.9146 122.008 16.6086C118.329 16.3025 117.493 13.395 117.493 13.395C117.493 13.395 116.022 16.8702 112.309 17.2628C108.449 17.6708 106.53 14.1602 106.53 14.1602C106.53 14.1602 104.351 17.2462 100.505 17.3171C96.6587 17.388 95.5856 14.4662 95.5856 14.4662C95.5856 14.4662 92.5755 17.5405 89.3981 17.3041C86.2207 17.0677 85.0501 13.8541 85.0501 13.8541C85.0501 13.8541 81.6227 17.4086 77.0196 16.4988C69.832 15.0783 84.0467 0.999756 84.0467 0.999756Z"
          className="fill-[#742234] dark:fill-[#818CB0]"
        />
        <path
          d="M84.0467 0.999756H161.872C161.872 0.999756 175.857 15.2313 168.498 15.9965C165.674 16.2902 163.314 14.1602 163.314 14.1602C163.314 14.1602 161.809 16.6086 158.297 16.6086C154.785 16.6086 153.113 14.0071 153.113 14.0071C153.113 14.0071 150.922 17.2699 146.407 16.8108C141.892 16.3517 139.902 13.395 139.902 13.395C139.902 13.395 138.564 17.1471 133.882 17.2604C129.199 17.3737 127.36 13.395 127.36 13.395C127.36 13.395 125.687 16.9146 122.008 16.6086C118.329 16.3025 117.493 13.395 117.493 13.395C117.493 13.395 116.022 16.8702 112.309 17.2628C108.449 17.6708 106.53 14.1602 106.53 14.1602C106.53 14.1602 104.351 17.2462 100.505 17.3171C96.6587 17.388 95.5856 14.4662 95.5856 14.4662C95.5856 14.4662 92.5755 17.5405 89.3981 17.3041C86.2207 17.0677 85.0501 13.8541 85.0501 13.8541C85.0501 13.8541 81.6227 17.4086 77.0196 16.4988C69.832 15.0783 84.0467 0.999756 84.0467 0.999756Z"
          stroke="#562736"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M117.728 21.1262C117.728 21.1262 116.982 19.1605 117.728 18.4119C118.474 17.6634 122.526 15.94 127.003 19.4105C130.776 22.3357 131.764 27.2079 131.424 28.0727C131.085 28.9374 129.789 29.5847 128.767 28.9889C127.745 28.393 128.255 25.6331 124.674 22.9792C121.093 20.3253 117.728 21.1262 117.728 21.1262Z"
          fill="#FBFAFE"
        />
        <path
          d="M135.969 32.1647C137.015 32.1647 137.864 31.3148 137.864 30.2664C137.864 29.2181 137.015 28.3682 135.969 28.3682C134.922 28.3682 134.074 29.2181 134.074 30.2664C134.074 31.3148 134.922 32.1647 135.969 32.1647Z"
          fill="#FBFAFE"
        />
        <path
          d="M89.9656 43.1952C89.9656 43.1952 88.085 41.9757 87.9791 39.8549C87.8733 37.734 91.0485 37.3629 91.3131 35.8252C91.5777 34.2876 90.2644 33.6514 90.2644 33.6514C90.2644 33.6514 93.1653 34.3406 93.2711 36.1964C93.377 38.0522 90.6883 38.5855 89.9656 39.8549C88.8788 41.7636 89.9656 43.1952 89.9656 43.1952Z"
          fill="white"
        />
        <path
          d="M117.73 21.1264C117.73 21.1264 116.984 19.1607 117.73 18.4122C118.476 17.6636 122.528 15.9403 127.005 19.4108C130.778 22.3359 131.766 27.2082 131.426 28.0729C131.087 28.9376 129.791 29.5849 128.769 28.9891C127.747 28.3933 128.257 25.6333 124.676 22.9794C121.095 20.3255 117.73 21.1264 117.73 21.1264Z"
          stroke="#DCDAE5"
          stroke-width="0.383266"
          stroke-miterlimit="10"
        />
        <path
          d="M135.971 32.165C137.017 32.165 137.865 31.3151 137.865 30.2667C137.865 29.2183 137.017 28.3684 135.971 28.3684C134.924 28.3684 134.076 29.2183 134.076 30.2667C134.076 31.3151 134.924 32.165 135.971 32.165Z"
          stroke="#DCDAE5"
          stroke-width="0.383266"
          stroke-miterlimit="10"
        />
        <path
          d="M128.768 28.0732C129.799 28.0732 130.634 27.2361 130.634 26.2036C130.634 25.171 129.799 24.334 128.768 24.334C127.738 24.334 126.902 25.171 126.902 26.2036C126.902 27.2361 127.738 28.0732 128.768 28.0732Z"
          fill="#EFA48F"
        />
        <path
          d="M120.449 29.5163C120.449 29.5163 121.384 29.7854 121.711 28.9897"
          stroke="#D47B75"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M119.704 25.3225C119.704 25.3225 118.529 25.6819 118.592 26.7336C118.673 28.0794 120.137 28.2633 121.081 27.5974"
          stroke="#D47B75"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M129.141 25.7743C128.453 25.593 127.937 25.8647 127.652 26.5387C128.147 26.2631 128.599 26.2214 128.976 26.5732"
          stroke="#D47B75"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M85.4755 43.8511C85.4755 43.8511 85.048 52.6981 89.6033 52.7522C94.1586 52.8062 93.6781 43.8511 93.6781 43.8511H85.4755Z"
          fill="#F1AF78"
        />
        <path
          d="M114.334 37.6938C114.334 37.6938 109.7 45.2735 109.973 63.096"
          stroke="#E1283A"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M122.325 39.5605C122.325 39.5605 120.588 43.4977 120.937 48.1411"
          stroke="#E1283A"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M137.097 37.052C137.097 37.052 133.78 41.5859 134.075 45.6831"
          stroke="#E1283A"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M134.916 50.3943L138.351 57.0676"
          stroke="#E1283A"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M133.466 23.7454C133.319 23.3965 132.275 21.0957 132.275 21.0957"
          stroke="#E1283A"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M85.0488 13.8541L90.0513 0.999756"
          className="stroke-[#1F060B] dark:stroke-[#454C64]"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M95.584 14.4662C95.9393 13.7546 97.8464 0.999756 97.8464 0.999756"
          className="stroke-[#1F060B] dark:stroke-[#454C64]"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M106.529 14.1602L107.862 0.999756"
          className="stroke-[#1F060B] dark:stroke-[#454C64]"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M117.492 13.395C117.51 12.5299 118.037 0.999756 118.037 0.999756"
          className="stroke-[#1F060B] dark:stroke-[#454C64]"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M127.357 13.395L126.707 0.999756"
          className="stroke-[#1F060B] dark:stroke-[#454C64]"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M139.9 13.395L138.135 0.999756"
          className="stroke-[#1F060B] dark:stroke-[#454C64]"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M153.112 14.0071L149.363 0.999756"
          className="stroke-[#1F060B] dark:stroke-[#454C64]"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M163.314 14.1602L157.191 0.999756"
          className="stroke-[#1F060B] dark:stroke-[#454C64]"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M115.146 51.5972L127.653 52.0181"
          stroke="#CC7940"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M127.652 53.8809C127.652 53.8809 127.369 60.7614 128.224 69.3153"
          stroke="#CC7940"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M128.225 69.3154H137.184"
          stroke="#CC7940"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M115.146 51.5972C115.146 51.5972 114.334 61.2351 115.146 68.8611"
          stroke="#CC7940"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M110.129 70.0437H115.011"
          stroke="#CC7940"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M138.395 69.1944C138.395 69.1944 138.33 63.5004 140.336 64.0028C142.342 64.5052 138.395 69.1944 138.395 69.1944Z"
          stroke="#CC7940"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M138.416 69.3152C138.416 69.3152 140.414 65.7201 141.584 67.0097C142.754 68.2993 138.416 69.3152 138.416 69.3152Z"
          stroke="#CC7940"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M141.784 72.5612C141.54 72.4272 138.416 69.3154 138.416 69.3154L139.434 72.5612"
          stroke="#CC7940"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M95.6767 45.8734C95.0766 45.5205 92.7393 44.2152 92.1412 44.9213C91.4532 45.7334 93.6904 48.1408 93.6904 48.1408L94.7115 49.466C95.018 47.9266 95.3685 46.4328 95.6767 45.8734Z"
          fill="#4BB4AD"
        />
        <path
          d="M155.679 73.6279C154.097 74.3201 151.291 75.5261 149.219 76.2944C149.537 77.2396 150.745 80.6125 151.773 80.5095C152.968 80.3898 152.968 78.1677 152.968 78.1677C152.968 78.1677 158.255 83.0803 160.257 81.2278C163.374 78.3426 156.477 74.1031 155.679 73.6279Z"
          fill="#004A59"
        />
        <path
          d="M93.6339 46.1426C93.5085 47.8782 93.1243 50.1909 92.0176 51.5702C93.0429 51.8468 93.9443 51.9702 94.2414 52.0062C94.5004 50.5282 94.8821 48.4391 95.2579 47.062C94.9305 46.8661 94.3217 46.5094 93.6339 46.1426Z"
          fill="#004A59"
        />
        <path
          d="M151.689 77.0066C151.689 77.0066 156.213 81.7842 159.625 81.5775"
          stroke="#258A86"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M93.9455 48.4698C93.9455 48.4698 91.2857 45.9921 92.1428 44.9214"
          stroke="#258A86"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M86.1031 45.4134C86.1031 45.4134 83.1438 44.9038 83.5029 47.6468C83.8619 50.3898 87.5885 51.5979 87.5885 51.5979"
          stroke="#F1AF78"
          stroke-width="0.383266"
          stroke-miterlimit="10"
        />
        <path
          d="M161.1 127.85C161.1 127.85 152.332 120.273 153.306 111.349C154.28 102.425 162.418 106.747 162.418 106.747C162.418 106.747 168.058 91.6877 176.965 97.2653C185.872 102.843 176.409 113.301 176.409 113.301C176.409 113.301 182.254 112.883 181.836 117.902C181.419 122.922 171.816 132.265 171.816 132.265L161.1 127.85Z"
          fill="#072A66"
        />
        <path
          d="M78.9425 131.376C78.516 130.152 70.9155 128.18 69.3846 122.458C67.8537 116.735 73.2539 116.317 73.2539 116.317C73.2539 116.317 67.2046 108.747 73.2539 105.462C78.9425 102.373 82.0708 109.484 82.0708 109.484C82.0708 109.484 86.472 105.675 89.5647 110.739C95.2707 120.082 85.5086 131.376 85.5086 131.376H78.9425V131.376Z"
          fill="#004A59"
        />
        <path
          d="M135.513 132.923C133.715 132.151 137.14 129.966 139.673 129.784C142.205 129.603 143.471 129.784 143.471 129.784C143.471 129.784 144.013 127.008 147.45 125.135C150.886 123.261 154.322 125.135 154.322 125.135C154.322 125.135 156.312 120.543 161.557 121.63C166.802 122.717 166.983 126.711 166.983 126.711C166.983 126.711 171.142 125.812 173.313 126.711C175.483 127.61 174.941 129.784 174.941 129.784C174.941 129.784 182.175 128.878 183.079 131.234C183.984 133.59 137.31 133.695 135.513 132.923Z"
          fill="#004A59"
        />
        <path
          d="M73.8381 132.56C71.7369 131.771 75.872 129.664 77.2906 129.578C78.7091 129.492 81.1723 130.329 81.1723 130.329C81.1723 130.329 80.5184 124.194 85.1111 123.636C89.7038 123.078 93.1831 129.578 93.1831 129.578C93.1831 129.578 95.549 127.959 97.915 128.656C100.281 129.353 101.673 131.166 101.673 131.166C101.673 131.166 104.039 130.747 105.848 131.305C107.657 131.863 108.631 132.427 107.547 133.118C106.463 133.809 76.0649 133.397 73.8381 132.56Z"
          fill="#072A66"
        />
        <path
          d="M165.937 123.896C165.311 119.148 166.121 111.75 172.373 101.727"
          stroke="#E6D8D6"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M159.224 107.869C159.224 107.869 157.381 118.046 165.781 122.088"
          stroke="#E6D8D6"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M175.155 119.437C175.155 119.437 172.601 123.546 165.895 123.558"
          stroke="#E6D8D6"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M82.7667 123.807C82.2693 120.39 80.9669 116.238 77.9082 112.273"
          stroke="#E6D8D6"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M74.9902 120.082C74.9902 120.082 80.4078 119.868 82.7644 123.901"
          stroke="#E6D8D6"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M82.3965 121.824C82.3965 121.824 86.2247 117.998 85.3896 114.787"
          stroke="#E6D8D6"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M48.2812 86.041L49.2143 125.419L64.842 126.003L67.0579 86.6253L48.2812 86.041Z"
          fill="#303E4E"
        />
        <path
          d="M77.2891 56.4302C77.2891 56.4302 79.7713 51.2996 80.7043 52.0196C81.6373 52.7395 80.5877 54.4922 80.5877 54.4922C80.5877 54.4922 84.6466 50.2805 86.5356 52.0196C88.4245 53.7586 81.1708 60.7373 81.1708 60.7373L77.2891 56.4302Z"
          fill="#AA5594"
        />
        <path
          d="M63.8281 64.7443C63.9505 68.2654 63.6553 72.1085 63.2945 75.2636C54.8182 72.8469 49.4473 64.7443 49.4473 64.7443L57.6699 57.998C57.6699 57.998 60.0317 62.2969 63.7821 63.7014C63.7996 64.0432 63.8149 64.3894 63.8281 64.7443Z"
          fill="#F1AF78"
        />
        <path
          d="M81.17 60.737L77.2882 56.4299L68.8078 60.737V63.7283C68.5229 63.7999 68.2399 63.8639 67.9602 63.9183C67.8606 61.9091 67.7541 60.427 67.6415 59.7502C66.9418 55.5436 63.6101 50.3953 63.6101 50.3953H54.5094C54.5094 50.3953 47.1155 50.9865 45.5994 58.4648C44.0833 65.9432 45.3173 99.2359 45.3173 99.2359C53.4729 101.335 61.2944 101.279 68.8078 99.2359C68.8078 99.2359 68.6392 86.4889 68.3527 75.4057C76.1269 72.897 81.1698 64.7442 81.1698 64.7442L79.5474 62.1105L81.17 60.737Z"
          fill="#F1AF78"
        />
        <path
          d="M78.4395 60.3136C78.4395 60.3136 81.1691 56.3814 81.9855 56.4298C82.8019 56.4783 81.9855 58.5832 81.9855 58.5832C81.9855 58.5832 85.1638 54.8543 87.19 57.0685C89.2162 59.2827 81.1691 64.7438 81.1691 64.7438L78.4395 60.3136Z"
          fill="#AA5594"
        />
        <path
          d="M57.1435 52.753C57.1435 52.753 51.9027 51.5982 48.9251 52.753C45.9475 53.9078 43.9648 57.9975 43.9648 57.9975C43.9648 57.9975 44.3147 51.7239 47.1137 49.7193C49.9127 47.7148 52.6023 48.1419 52.6023 48.1419L57.1435 52.753Z"
          fill="#AA5594"
        />
        <path
          d="M63.7807 63.7015C63.3849 56.574 61.6113 52.7528 61.6113 52.7528L65.1016 50.9802C65.1016 50.9802 69.0685 56.4119 70.0132 63.3992C69.0554 63.6906 68.0604 63.9272 67.0566 64.074C65.8779 64.2449 64.7801 64.0762 63.7807 63.7015Z"
          fill="#AA5594"
        />
        <path
          d="M69.9979 74.7815C69.7114 79.1614 69.2719 82.4195 69.2719 82.4195L62.3242 81.9178C62.3242 81.9178 62.8578 79.0979 63.293 75.2635C63.4679 75.3139 63.6473 75.3621 63.8266 75.4081C65.9347 75.9406 68.0319 75.6031 69.9979 74.7815Z"
          fill="#AA5594"
        />
        <path
          d="M63.828 45.6843C63.828 45.6843 65.8992 46.1816 65.9248 49.2345C65.9505 52.2874 62.5516 54.4917 58.7401 53.7327C54.9286 52.9737 50.7301 50.363 50.5551 48.1045C50.3802 45.8459 53.9127 41.9751 53.9127 41.9751L63.828 45.6843Z"
          fill="#AA5594"
        />
        <path
          d="M58.7911 30.3011C58.7136 30.2063 54.005 26.8764 50.1848 30.8187C46.3647 34.761 50.7279 38.8693 50.7279 38.8693L58.7911 30.3011Z"
          fill="#AA5594"
        />
        <path
          d="M50.7285 125.476V130.795C50.7285 130.795 58.5424 133.667 58.4258 132.114C58.3091 130.561 54.5778 128.413 54.5778 128.413V125.62L50.7285 125.476Z"
          fill="#AA5594"
        />
        <path
          d="M58.4277 125.764V130.677C58.4277 130.677 66.4736 133.55 66.4736 132.114C66.4736 130.677 62.4506 128.383 62.4506 128.383V125.914L58.4277 125.764Z"
          fill="#AA5594"
        />
        <path
          d="M45.5978 58.4647C46.4001 54.5071 48.8485 52.4789 50.9761 51.4459C50.5746 51.1263 50.1082 50.9467 49.563 50.9864C46.353 51.2201 43.965 57.9973 43.965 57.9973L41.9824 92.9352H45.1192C44.8455 82.9075 44.4976 63.8913 45.5978 58.4647Z"
          fill="#AA5594"
        />
        <path
          d="M64.0423 39.4739C63.6526 38.3598 63.3315 37.5336 63.0807 36.9327C62.4004 36.9351 61.67 36.7692 61.045 36.4451C61.045 36.4451 61.222 37.7093 59.2558 38.2484C57.2896 38.7874 55.2629 37.6713 55.2629 37.6713C55.2629 37.6713 55.796 38.8696 55.7521 40.4794C55.7225 41.566 55.4313 42.5861 55.2527 43.1164C54.8384 42.9399 54.3613 42.9071 53.9011 43.0624C52.9041 43.3986 52.3679 44.481 52.7036 45.4799C53.0392 46.4788 54.1195 47.016 55.1165 46.6797C55.6742 46.4916 56.0874 46.0698 56.2847 45.5599C56.287 45.5627 56.2906 45.5671 56.2928 45.5698C56.2928 45.5698 58.419 49.3387 62.3616 48.1794C66.6651 46.9139 64.8033 41.6496 64.0423 39.4739Z"
          fill="#EFA48F"
        />
        <path
          d="M58.645 40.0771C59.5219 39.7813 60.1554 39.3109 60.0598 39.0264C59.9642 38.7419 59.1758 38.7511 58.2988 39.0469C57.4219 39.3427 56.7884 39.8131 56.884 40.0976C56.9796 40.3821 57.768 40.3729 58.645 40.0771Z"
          fill="#303E4E"
        />
        <path
          d="M62.8939 38.6435C63.6054 38.4035 64.1131 38.0033 64.0279 37.7497C63.9426 37.496 63.2967 37.4849 62.5852 37.7249C61.8737 37.9649 61.366 38.3651 61.4512 38.6188C61.5364 38.8724 62.1824 38.8835 62.8939 38.6435Z"
          fill="#303E4E"
        />
        <path
          d="M63.8303 33.9752C63.8303 33.9752 65.5664 33.0587 64.6101 31.9331C63.0044 30.0433 59.0933 32.9044 59.0933 32.9044C59.0933 32.9044 58.6917 31.0332 56.2806 31.7844C53.8695 32.5356 54.3644 34.5615 54.3644 34.5615C54.3644 34.5615 51.8767 34.5317 51.11 36.797C50.484 38.6464 52.8481 41.9694 53.7374 43.1275C53.7912 43.1036 53.8461 43.0814 53.903 43.0622C54.3632 42.907 54.8403 42.9397 55.2545 43.1162C55.4332 42.5859 55.7244 41.5658 55.754 40.4792C55.7979 38.8695 55.2647 37.6711 55.2647 37.6711C55.2647 37.6711 57.2915 38.7873 59.2577 38.2482C61.2239 37.7091 61.0468 36.4449 61.0468 36.4449C62.4971 37.197 64.5156 37.1025 65.1544 36.011C66.0594 34.4646 63.8303 33.9752 63.8303 33.9752Z"
          fill="#303E4E"
        />
        <path
          d="M55.7969 35.6793C55.7969 35.6793 56.0521 34.0296 57.4589 33.8204C58.8656 33.6111 58.9133 34.6282 58.9133 34.6282C58.9133 34.6282 60.362 33.0924 61.4341 34.2945"
          stroke="#636E77"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M58.543 40.9089C58.543 40.9089 58.8223 41.8783 59.1913 41.7539C59.5786 41.6233 59.198 40.7498 59.198 40.7498C59.198 40.7498 58.9695 40.7651 58.543 40.9089Z"
          fill="#303E4E"
        />
        <path
          d="M62.7695 39.5386C62.7695 39.5386 63.0489 40.508 63.4179 40.3835C63.8051 40.2529 63.4246 39.3794 63.4246 39.3794C63.4246 39.3794 63.1961 39.3947 62.7695 39.5386Z"
          fill="#303E4E"
        />
        <path
          d="M60.4941 44.5383C60.5585 44.8515 61.1389 45.4369 61.8204 45.1078"
          stroke="#D47B75"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M54.4293 45.2061C54.993 44.6882 55.3107 44.7575 55.7962 44.9209C55.2601 44.2597 54.7217 44.0026 53.8477 44.4505"
          stroke="#D47B75"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M61.6133 41.0896C61.6133 41.0896 61.8707 41.8556 62.8561 42.006C63.6505 42.1273 63.6777 43.246 62.6742 43.3747"
          stroke="#D47B75"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M58.543 125.027L60.5493 101.729"
          stroke="#636E77"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M57.6713 57.9978C57.6713 57.9978 61.4616 64.8919 67.0596 64.074C72.6576 63.256 78.0223 59.6337 78.0223 59.6337L81.1712 64.7443C81.1712 64.7443 72.6128 77.6285 63.83 75.4083C55.0472 73.1882 49.4492 64.7443 49.4492 64.7443"
          stroke="#CC7940"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M57.1471 78.4135C55.5658 80.4704 52.5204 83.275 48.2836 84.4626C47.7246 84.6193 47.7854 86.3547 48.2826 86.9722C48.7798 87.5898 52.1968 86.7082 55.1966 84.177C58.1964 81.6457 58.5442 80.5268 58.5442 79.6048C58.5442 78.6828 57.8238 77.5333 57.1471 78.4135Z"
          stroke="#CC7940"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M65.1035 98.6175L65.2584 83.5034"
          stroke="#CC7940"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M58.0977 41.1839C58.0977 41.1839 58.6826 40.7087 59.3828 40.7504"
          stroke="#303E4E"
          stroke-width="0.191633"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M62.3262 39.8125C62.3262 39.8125 62.9111 39.3373 63.6113 39.3791"
          stroke="#303E4E"
          stroke-width="0.191633"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M59.5971 43.4093C60.6059 43.0691 61.1079 41.8531 60.7183 40.6935C60.3287 39.5339 59.195 38.8697 58.1861 39.21C57.1772 39.5503 56.6752 40.7662 57.0649 41.9258C57.4545 43.0854 58.5882 43.7496 59.5971 43.4093Z"
          stroke="#303E4E"
          stroke-width="0.191633"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M64.3304 41.812C65.1628 41.5312 65.5218 40.3636 65.1322 39.2039C64.7425 38.0443 63.7518 37.3319 62.9194 37.6127C62.0869 37.8935 61.728 39.0611 62.1176 40.2207C62.5072 41.3804 63.4979 42.0928 64.3304 41.812Z"
          stroke="#303E4E"
          stroke-width="0.191633"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M60.7793 40.9027C60.7793 40.9027 61.4095 40.1752 62.1965 40.4247"
          stroke="#303E4E"
          stroke-width="0.191633"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M54.2151 42.852C54.2151 42.852 54.1857 41.8797 54.8222 41.8096C55.4588 41.7394 57.0643 41.925 57.0643 41.925"
          stroke="#303E4E"
          stroke-width="0.191633"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M52.6353 41.6546C52.3675 42.3788 50.2737 40.3992 49.9542 39.1605C49.4397 37.1655 57.8758 28.6238 59.1056 29.7174C59.6712 30.2203 61.4053 31.0644 61.1269 31.5777C60.8485 32.091 55.1386 34.8859 52.6353 41.6546Z"
          fill="#A04E8B"
        />
        <path
          d="M41.7617 95.555L41.9846 92.9353H44.9182"
          stroke="#683345"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M50.5566 48.1033C50.5566 48.1033 51.006 51.0527 54.8738 52.3921"
          stroke="#683345"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M61.8281 53.7069C61.8281 53.7069 64.6208 53.1829 65.2575 51.4746"
          stroke="#683345"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M51.375 49.9068C51.375 49.9068 58.777 52.2069 62.1958 48.6411"
          stroke="#683345"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M61.8281 84.7155L62.3253 81.9172L69.2745 82.4186L69.1218 85.3073"
          stroke="#683345"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M64.209 84.9285L64.532 82.0759"
          stroke="#683345"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M66.7832 85.1483L67.0585 82.4407"
          stroke="#683345"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M44.2266 95.7342V92.9353"
          stroke="#683345"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </>
  );
};
export default Stall;
