import { useState } from "react";
import Modal from "../components/modal";

const ClueTree = () => {
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
        {/* tree */}
        <path
          d="M201.067 95.5577C201.968 95.07 201.78 93.8871 201.78 93.8871C201.78 93.8871 203.932 95.2489 206.197 94.7382C208.462 94.2276 208.576 92.9225 208.576 92.9225C203.04 87.5395 197.812 80.2259 194.553 74.01C195.53 73.2305 195.495 71.6537 195.495 71.6537C195.495 71.6537 196.547 73.4702 198.319 73.7137C200.09 73.9572 201.252 72.5461 201.252 72.5461C197.844 69.6888 193.14 62.5893 190.492 57.2371C190.99 56.5203 190.477 55.4063 190.477 55.4063C190.477 55.4063 191.536 56.971 192.913 56.971C194.29 56.971 194.767 55.7694 194.767 55.7694C191.561 52.4829 188.678 47.4556 186.734 43.3362C186.668 43.0535 186.556 42.8473 186.556 42.8473C186.556 42.8473 187.507 43.7182 188.376 43.6365C189.245 43.5549 189.625 42.8473 189.625 42.8473C189.625 42.8473 187.045 40.9967 185.171 37.8126C183.884 35.6275 182.893 33.6221 182.397 32.5787C182.792 33.0098 183.548 33.588 184.548 33.2001C185.565 32.8052 185.497 31.6479 185.497 31.6479C181.548 28.8141 179.096 24.7698 177.51 20.0256C177.51 20.0256 176.151 24.2209 174.438 27.0709C172.269 30.6824 169.97 32.6164 169.97 32.6164C169.97 32.6164 170.529 33.2241 171.311 33.2001C172.093 33.176 172.651 32.1813 172.651 32.1813C172.651 32.1813 171.813 33.9334 172.819 34.2822C173.004 34.3464 173.191 34.3358 173.372 34.2765C172.712 35.5782 171.87 37.1278 170.925 38.6192C169.546 40.7932 166.467 43.7522 166.467 43.7522C166.467 43.7522 166.913 44.4591 168.416 44.0416C169.978 43.6081 170.72 42.0581 170.72 42.0581C170.72 42.0581 170.261 43.2837 170.533 43.9137C168.581 48.5595 165.586 53.8757 162.239 57.3367C162.239 57.3367 163.463 58.6095 165.635 58.0088C166.63 57.7335 167.391 57.1146 167.924 56.5244C166.059 61.7123 162.425 67.9977 158.351 72.1825C158.351 72.1825 158.561 73.4656 160.55 73.7137C162.055 73.9013 162.89 72.8378 162.89 72.8378C162.89 72.8378 162.78 74.3358 163.887 74.4469C163.891 74.4473 163.895 74.4468 163.9 74.4472C161.282 80.4519 156.322 87.7322 151.435 93.0928C151.435 93.0928 152.794 94.4545 155.909 94.341C159.023 94.2276 160.477 92.1282 160.477 92.1282C160.477 92.1282 160.349 92.5167 160.329 93.027C157.034 100.742 152.103 108.243 145.771 115.562C145.771 115.562 146.621 116.81 149.453 116.073C152.284 115.335 152.907 114.597 152.907 114.597C152.907 114.597 152.001 116.98 153.473 117.491C154.946 118.002 157.268 116.583 157.268 116.583C157.268 116.583 156.705 118.399 158.685 118.739C160.666 119.08 161.911 117.605 161.911 117.605C161.911 117.605 162.874 119.08 164.743 119.137C166.612 119.193 167.065 118.172 167.065 118.172C167.065 118.172 166.838 120.612 169.84 121.009C172.841 121.406 173.804 118.683 173.804 118.683C173.804 118.683 173.917 120.044 175.107 120.101C176.296 120.158 176.749 119.137 176.749 119.137C176.749 119.137 177.485 120.918 179.297 121.049C181.109 121.179 181.902 119.193 181.902 119.193C181.902 119.193 183.205 121.406 185.697 121.463C188.188 121.52 189.774 118.626 189.774 118.626C189.774 118.626 190.737 120.158 192.492 120.044C194.248 119.931 195.154 118.115 195.154 118.115C195.154 118.115 196.966 120.612 199.968 120.555C202.969 120.498 203.649 117.212 203.649 117.212C203.649 117.212 203.989 118.91 205.688 118.796C207.386 118.683 207.386 116.753 207.386 116.753C207.386 116.753 208.406 118.285 209.652 118.456C210.898 118.626 211.351 116.867 211.351 116.867C211.351 116.867 211.747 118.115 213.333 118.115C214.918 118.115 215.598 116.697 215.598 116.697C209.224 109.534 204.541 101.997 201.067 95.5577Z"
          fill="#004A59"
        />
        <path
          d="M169.969 32.6165C169.969 32.6165 170.527 33.2242 171.309 33.2001C172.091 33.1761 172.65 32.1813 172.65 32.1813C172.65 32.1813 171.812 33.9334 172.817 34.2822C173.823 34.631 174.884 32.7843 174.884 32.7843C174.884 32.7843 174.66 34.7989 176.168 35.0227C177.676 35.2465 178.011 32.7843 178.011 32.7843C178.011 32.7843 178.458 35.0787 180.525 34.7429C182.591 34.4071 182.089 32.1813 182.089 32.1813C182.089 32.1813 183.043 33.7836 184.546 33.2001C185.564 32.8052 185.496 31.6479 185.496 31.6479"
          stroke="#F2E9E9"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M166.465 43.7527C166.465 43.7527 166.91 44.4597 168.414 44.0422C169.976 43.6086 170.718 42.0586 170.718 42.0586C170.718 42.0586 169.966 44.0528 170.942 44.2625C172.602 44.6194 174.14 42.0586 174.14 42.0586C174.14 42.0586 173.651 44.5623 175.363 44.6984C177.074 44.8345 177.732 43.0111 177.732 43.0111C177.732 43.0111 178.459 45.5693 180.198 45.406C181.936 45.2427 182.153 43.4737 182.153 43.4737C182.153 43.4737 183.487 45.1883 185.496 44.8889C187.504 44.5895 186.554 42.8478 186.554 42.8478C186.554 42.8478 187.504 43.7187 188.373 43.637C189.243 43.5554 189.623 42.8478 189.623 42.8478"
          stroke="#F2E9E9"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M162.234 57.3365C162.234 57.3365 163.459 58.6094 165.631 58.0086C167.802 57.4078 168.862 55.1685 168.862 55.1685C168.862 55.1685 168.014 57.8393 169.339 58.1697C170.663 58.5001 171.616 56.6431 171.616 56.6431C171.616 56.6431 171.086 58.8732 172.781 59.0963C174.476 59.3194 175.112 57.3365 175.112 57.3365C175.112 57.3365 175.059 59.9202 177.072 59.6471C179.084 59.374 178.714 57.0255 178.714 57.0255C178.714 57.0255 179.031 59.3101 180.991 59.0963C182.951 58.8825 183.11 56.9708 183.11 56.9708C183.11 56.9708 184.01 59.3101 186.023 59.0963C188.036 58.8825 187.294 56.6431 187.294 56.6431C187.294 56.6431 188.248 58.1908 189.784 57.7173C191.32 57.2439 190.472 55.4061 190.472 55.4061C190.472 55.4061 191.532 56.9708 192.909 56.9708C194.286 56.9708 194.763 55.7693 194.763 55.7693"
          stroke="#F2E9E9"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M158.348 72.1826C158.348 72.1826 158.557 73.4657 160.547 73.7138C162.051 73.9014 162.887 72.8379 162.887 72.8379C162.887 72.8379 162.776 74.3359 163.883 74.447C164.99 74.5581 166.153 73.1926 166.153 73.1926C166.153 73.1926 165.655 75.5817 167.648 75.6707C169.64 75.7597 170.194 73.7138 170.194 73.7138C170.194 73.7138 170.637 75.8002 172.464 75.6707C174.29 75.5412 175.176 73.7138 175.176 73.7138C175.176 73.7138 174.899 76.2919 177.28 76.4081C179.66 76.5243 179.992 73.1926 179.992 73.1926C179.992 73.1926 180.269 74.9623 182.096 74.8967C183.922 74.8312 184.476 72.8379 184.476 72.8379C184.476 72.8379 185.385 75.3773 187.754 75.3227C190.122 75.2681 190.62 72.5483 190.62 72.5483C190.62 72.5483 191.672 74.6973 193.61 74.4092C195.547 74.1211 195.492 71.6538 195.492 71.6538C195.492 71.6538 196.544 73.4703 198.315 73.7138C200.086 73.9573 201.249 72.5462 201.249 72.5462"
          stroke="#F2E9E9"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M151.432 93.092C151.432 93.092 152.791 94.4538 155.906 94.3403C159.02 94.2268 160.474 92.1274 160.474 92.1274C160.474 92.1274 159.561 94.9077 162.236 95.3616C164.91 95.8156 165.589 93.0353 165.589 93.0353C165.589 93.0353 164.457 95.9858 166.496 96.4964C168.534 97.0071 169.384 95.4184 169.384 95.4184C169.384 95.4184 169.327 97.0071 170.63 97.1773C171.932 97.3475 172.499 95.7588 172.499 95.7588C172.499 95.7588 172.329 96.9192 173.461 97.1901C174.594 97.461 174.764 96.2695 174.764 96.2695C174.764 96.2695 175.217 98.5958 177.539 98.2554C179.861 97.9149 179.799 95.8156 179.799 95.8156C179.799 95.8156 179.974 98.5504 182.069 98.2894C184.165 98.0284 183.938 95.8156 183.938 95.8156C183.938 95.8156 184.901 98.0284 187.279 97.4043C189.658 96.7801 188.922 93.9999 188.922 93.9999C188.922 93.9999 189.884 97.0071 192.603 96.7801C195.321 96.5532 194.764 94.2836 194.764 94.2836C194.764 94.2836 195.434 95.4184 196.624 95.2482C197.813 95.0779 197.813 93.4892 197.813 93.4892C197.813 93.4892 198.549 95.8723 200.305 95.7588C202.06 95.6453 201.777 93.8864 201.777 93.8864C201.777 93.8864 203.929 95.2482 206.194 94.7375C208.459 94.2268 208.573 92.9218 208.573 92.9218"
          stroke="#F2E9E9"
          stroke-width="0.383266"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        {/* tree */}
      </g>
    </>
  );
};
export default ClueTree;
