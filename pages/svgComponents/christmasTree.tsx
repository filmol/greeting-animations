import { useState } from "react";
import Modal from "../components/modal";

const ChristmasTree = () => {
  let [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        content={{
          title: "Devoteam foundation",
          didYouKnow:
            "That the Devoteam foundation has supported more than 50 associations/social entrepreneurs?",
          link: "https://www.devoteam.com/devoteam-foundation/",
          img: "/devoFoundation.jpg",
        }}
        isModalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <g
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
        className={`absolute cursor-pointer`}
      >
        <path
          d="M81.748 190.61V215.925H67.3712V189.706L81.748 190.61Z"
          fill="#B7553E"
        />
        <path
          d="M37.7338 144.469C36.0453 145.865 33.9263 147.128 31.4695 147.59C24.9309 148.822 19.3841 147.59 19.3841 147.59C33.3724 136.192 42.7566 123.71 48.1437 110.29C46.8856 111.037 45.2946 111.719 43.3232 112.125C38.0683 113.208 31.4695 111.807 31.4695 111.807C48.0322 99.5061 58.1278 84.6065 63.0636 67.6335C61.2162 68.751 59.0068 69.8116 56.7525 70.2568C49.9984 71.5907 47.4104 67.7939 47.4104 67.7939C63.6704 56.1844 73.4509 42.6987 77.8324 27.6494C83.3067 43.6114 93.6951 57.6306 111.345 68.7791C111.345 68.7791 108.709 72.4112 101.419 70.0105C94.544 67.7462 91.7853 62.1294 91.7853 62.1294C91.7853 62.1294 92.4307 64.7745 92.0114 67.2663C96.5993 83.6129 105.967 98.3037 120.687 111.14C120.687 111.14 115.725 111.133 109.594 109.416C106.643 108.59 104.217 106.886 102.794 105.706C109.293 122.199 119.403 137.281 133.533 150.792C133.533 150.792 124.775 152.516 118.644 149.807C112.513 147.098 111.345 143.896 111.345 143.896C111.345 143.896 111.644 147.628 109.991 150.183C116.662 165.835 129.456 182.518 147.838 198.079C147.838 198.079 140.629 200.718 131.301 198.079C124.193 196.068 119.974 191.186 117.694 187.627C120.136 192.126 122.99 198.8 117.476 199.502C109.302 200.542 102.003 189.705 102.003 189.705C102.003 189.705 104.047 198.079 97.0403 197.833C90.0337 197.586 88.282 187.451 88.282 187.451C88.282 187.451 87.6981 196.601 81.2755 196.601C74.8528 196.601 72.5173 190.733 72.5173 190.733C72.5173 190.733 68.722 198.325 61.4235 198.325C54.125 198.325 55.2928 188.474 55.2928 188.474C55.2928 188.474 50.0378 196.109 43.0313 197.094C36.0247 198.079 37.4844 184.779 37.4844 184.779C37.4844 184.779 34.2731 194.139 27.2665 194.016C20.513 193.897 23.7938 186.485 24.0397 185.949C23.8399 186.378 21.4248 191.308 15.005 194.016C8.29036 196.847 1.28378 194.015 1.28378 194.015C17.3519 178.323 29.8804 161.887 37.7338 144.469ZM116.131 184.879C115.646 183.914 115.432 183.372 115.432 183.548C115.432 183.669 115.709 184.155 116.131 184.879Z"
          fill="#004A59"
        />
        <path
          d="M111.346 68.7796C111.346 68.7796 108.709 72.4117 101.42 70.011C94.5444 67.7467 91.7857 62.1299 91.7857 62.1299C91.7857 62.1299 93.8293 70.5036 88.2824 71.4887C82.7355 72.4739 80.6919 65.0853 80.6919 65.0853C80.6919 65.0853 78.3564 71.9159 73.3934 71.5792C68.4304 71.2424 67.8466 64.1002 67.8466 64.1002C67.8466 64.1002 62.4379 69.1345 56.7528 70.2573C49.9987 71.5912 47.4107 67.7944 47.4107 67.7944"
          stroke="#258A86"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M120.688 111.14C120.688 111.14 115.725 111.133 109.594 109.416C104.827 108.081 101.422 104.452 101.422 104.452C101.422 104.452 104.738 110.117 99.5752 111.244C94.4129 112.372 86.8224 102.767 86.8224 102.767C86.8224 102.767 88.2821 113.059 81.8594 113.208C75.4367 113.357 72.5173 104.452 72.5173 104.452C72.5173 104.452 66.6785 114.044 60.2558 113.208C53.8331 112.372 52.0815 106.656 52.0815 106.656C52.0815 106.656 49.665 110.819 43.3233 112.125C38.0683 113.208 31.4696 111.807 31.4696 111.807"
          stroke="#258A86"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M133.533 150.792C133.533 150.792 124.775 152.516 118.644 149.807C112.514 147.098 111.346 143.896 111.346 143.896C111.346 143.896 112.022 152.27 105.799 152.516C99.5756 152.762 89.1583 140.941 89.1583 140.941C89.1583 140.941 91.3762 150.792 85.4502 151.038C79.5242 151.285 76.0789 143.65 76.0789 143.65C76.0789 143.65 73.1016 150.053 66.6789 150.053C60.2562 150.053 60.5481 143.65 60.5481 143.65C60.5481 143.65 54.1254 151.285 44.7833 150.546C35.4412 149.807 42.1559 139.463 42.1559 139.463C42.1559 139.463 38.0085 146.359 31.4699 147.59C24.9314 148.822 19.3845 147.59 19.3845 147.59"
          stroke="#258A86"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M147.838 198.08C147.838 198.08 140.629 200.719 131.301 198.08C119.152 194.643 115.432 182.81 115.432 183.549C115.432 184.288 125.65 198.463 117.476 199.503C109.302 200.543 102.003 189.706 102.003 189.706C102.003 189.706 104.047 198.08 97.0402 197.834C90.0337 197.587 88.282 187.452 88.282 187.452C88.282 187.452 87.6981 196.602 81.2755 196.602C74.8528 196.602 72.5172 190.734 72.5172 190.734C72.5172 190.734 68.722 198.326 61.4235 198.326C54.125 198.326 55.2928 188.475 55.2928 188.475C55.2928 188.475 50.0378 196.11 43.0313 197.095C36.0247 198.08 37.4844 184.78 37.4844 184.78C37.4844 184.78 34.273 194.14 27.2665 194.016C20.2599 193.893 24.0551 185.917 24.0551 185.917C24.0551 185.917 21.7196 191.184 15.005 194.016C8.29035 196.848 1.28378 194.016 1.28378 194.016"
          stroke="#258A86"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25.9839 217.903C22.0303 217.084 28.0367 209.334 33.6819 208.819C39.327 208.305 40.5245 208.305 42.4062 207.791C44.2879 207.277 51.8148 199.414 59.5128 199.575C67.2107 199.735 76.2772 208.142 81.2381 208.738C86.199 209.334 92.0153 207.971 96.1208 208.738C100.226 209.505 103.769 216.189 105.932 216.704C108.095 217.218 111.345 216.844 111.346 218.76C111.347 224.582 45.8275 222.017 25.9839 217.903Z"
          fill="white"
        />
        <path
          d="M65.1195 84.0636C63.7617 84.0636 62.6609 82.9607 62.6609 81.6003C62.6609 80.2398 63.7617 79.137 65.1195 79.137C66.4774 79.137 67.5781 80.2398 67.5781 81.6003C67.5781 82.9607 66.4774 84.0636 65.1195 84.0636Z"
          fill="#FFDD4D"
        />
        <path
          d="M81.971 17.1575L77.1028 0.616211L73.4587 18.2276L57.4417 21.5778L71.0446 27.0294L67.2414 41.9631L78.1111 31.9324L91.6804 39.3775L85.9251 25.8712L96.2598 17.0319L81.971 17.1575Z"
          fill="#F1AF78"
          className="animate-pulse"
        />
        <path
          d="M83.805 54.8463C82.3555 54.8463 81.1804 53.669 81.1804 52.2166C81.1804 50.7643 82.3555 49.5869 83.805 49.5869C85.2546 49.5869 86.4297 50.7643 86.4297 52.2166C86.4297 53.669 85.2546 54.8463 83.805 54.8463Z"
          fill="white"
        />
        <path
          d="M75.7406 59.3903C74.291 59.3903 73.1159 58.2129 73.1159 56.7606C73.1159 55.3082 74.291 54.1309 75.7406 54.1309C77.1901 54.1309 78.3652 55.3082 78.3652 56.7606C78.3652 58.2129 77.1901 59.3903 75.7406 59.3903Z"
          fill="white"
        />
        <path
          d="M66.6097 61.7926C65.1601 61.7926 63.985 60.6153 63.985 59.1629C63.985 57.7106 65.1601 56.5332 66.6097 56.5332C68.0593 56.5332 69.2344 57.7106 69.2344 59.1629C69.2344 60.6153 68.0593 61.7926 66.6097 61.7926Z"
          fill="white"
        />
        <path
          d="M100.312 119.312C98.9261 119.312 97.8024 118.186 97.8024 116.797C97.8024 115.408 98.9261 114.282 100.312 114.282C101.699 114.282 102.822 115.408 102.822 116.797C102.822 118.186 101.699 119.312 100.312 119.312Z"
          fill="white"
        />
        <path
          d="M41.451 136.197C40.0648 136.197 38.941 135.071 38.941 133.682C38.941 132.293 40.0648 131.167 41.451 131.167C42.8372 131.167 43.9609 132.293 43.9609 133.682C43.9609 135.071 42.8372 136.197 41.451 136.197Z"
          fill="white"
        />
        <path
          d="M72.533 131.71C71.1468 131.71 70.0231 130.584 70.0231 129.195C70.0231 127.807 71.1468 126.681 72.533 126.681C73.9192 126.681 75.043 127.807 75.043 129.195C75.043 130.584 73.9192 131.71 72.533 131.71Z"
          fill="white"
        />
        <path
          d="M91.3338 124.275C89.9476 124.275 88.8239 123.149 88.8239 121.76C88.8239 120.371 89.9476 119.245 91.3338 119.245C92.72 119.245 93.8438 120.371 93.8438 121.76C93.8438 123.149 92.72 124.275 91.3338 124.275Z"
          fill="white"
        />
        <path
          d="M82.3533 128.851C80.9671 128.851 79.8434 127.725 79.8434 126.336C79.8434 124.947 80.9671 123.821 82.3533 123.821C83.7395 123.821 84.8633 124.947 84.8633 126.336C84.8633 127.725 83.7395 128.851 82.3533 128.851Z"
          fill="white"
        />
        <path
          d="M61.7166 134.225C60.3304 134.225 59.2067 133.099 59.2067 131.71C59.2067 130.321 60.3304 129.196 61.7166 129.196C63.1028 129.196 64.2266 130.321 64.2266 131.71C64.2266 133.099 63.1028 134.225 61.7166 134.225Z"
          fill="white"
        />
        <path
          d="M51.3826 135.423C49.9964 135.423 48.8727 134.297 48.8727 132.908C48.8727 131.519 49.9964 130.394 51.3826 130.394C52.7688 130.394 53.8926 131.519 53.8926 132.908C53.8926 134.297 52.7688 135.423 51.3826 135.423Z"
          fill="white"
        />
        <path
          d="M38.155 159.67C36.8491 159.67 35.7904 158.609 35.7904 157.301C35.7904 155.993 36.8491 154.932 38.155 154.932C39.4609 154.932 40.5195 155.993 40.5195 157.301C40.5195 158.609 39.4609 159.67 38.155 159.67Z"
          fill="white"
        />
        <path
          d="M74.4851 174.928C73.1791 174.928 72.1205 173.867 72.1205 172.559C72.1205 171.25 73.1791 170.19 74.4851 170.19C75.791 170.19 76.8496 171.25 76.8496 172.559C76.8496 173.867 75.791 174.928 74.4851 174.928Z"
          fill="white"
        />
        <path
          d="M119.626 180.411C118.32 180.411 117.261 179.35 117.261 178.042C117.261 176.734 118.32 175.673 119.626 175.673C120.932 175.673 121.99 176.734 121.99 178.042C121.99 179.35 120.932 180.411 119.626 180.411Z"
          fill="white"
        />
        <path
          d="M55.1511 168.377C53.8452 168.377 52.7865 167.316 52.7865 166.008C52.7865 164.699 53.8452 163.639 55.1511 163.639C56.457 163.639 57.5156 164.699 57.5156 166.008C57.5156 167.316 56.457 168.377 55.1511 168.377Z"
          fill="white"
        />
        <path
          d="M64.444 172.163C63.1381 172.163 62.0795 171.102 62.0795 169.794C62.0795 168.485 63.1381 167.425 64.444 167.425C65.7499 167.425 66.8086 168.485 66.8086 169.794C66.8086 171.102 65.7499 172.163 64.444 172.163Z"
          fill="white"
        />
        <path
          d="M46.6667 164.428C45.3608 164.428 44.3021 163.367 44.3021 162.059C44.3021 160.75 45.3608 159.689 46.6667 159.689C47.9726 159.689 49.0312 160.75 49.0312 162.059C49.0312 163.367 47.9726 164.428 46.6667 164.428Z"
          fill="white"
        />
        <path
          d="M97.4167 179.646C96.1108 179.646 95.0521 178.586 95.0521 177.277C95.0521 175.969 96.1108 174.908 97.4167 174.908C98.7226 174.908 99.7812 175.969 99.7812 177.277C99.7812 178.586 98.7226 179.646 97.4167 179.646Z"
          fill="white"
        />
        <path
          d="M86.0124 177.869C84.7065 177.869 83.6478 176.808 83.6478 175.5C83.6478 174.192 84.7065 173.131 86.0124 173.131C87.3183 173.131 88.377 174.192 88.377 175.5C88.377 176.808 87.3183 177.869 86.0124 177.869Z"
          fill="white"
        />
        <path
          d="M108.989 180.812C107.683 180.812 106.624 179.752 106.624 178.443C106.624 177.135 107.683 176.074 108.989 176.074C110.295 176.074 111.354 177.135 111.354 178.443C111.354 179.752 110.295 180.812 108.989 180.812Z"
          fill="white"
        />
        <path
          d="M80.85 91.0116C79.4921 91.0116 78.3914 89.9087 78.3914 88.5483C78.3914 87.1878 79.4921 86.085 80.85 86.085C82.2078 86.085 83.3086 87.1878 83.3086 88.5483C83.3086 89.9087 82.2078 91.0116 80.85 91.0116Z"
          fill="white"
        />
        <path
          d="M89.8187 93.6434C88.4609 93.6434 87.3601 92.5406 87.3601 91.1801C87.3601 89.8197 88.4609 88.7168 89.8187 88.7168C91.1766 88.7168 92.2773 89.8197 92.2773 91.1801C92.2773 92.5406 91.1766 93.6434 89.8187 93.6434Z"
          fill="white"
        />
        <path
          d="M98.9125 96.1063C97.5546 96.1063 96.4539 95.0035 96.4539 93.643C96.4539 92.2825 97.5546 91.1797 98.9125 91.1797C100.27 91.1797 101.371 92.2825 101.371 93.643C101.371 95.0035 100.27 96.1063 98.9125 96.1063Z"
          fill="white"
        />
        <path
          d="M72.9125 87.3671C71.5546 87.3671 70.4539 86.2642 70.4539 84.9038C70.4539 83.5433 71.5546 82.4404 72.9125 82.4404C74.2703 82.4404 75.3711 83.5433 75.3711 84.9038C75.3711 86.2642 74.2703 87.3671 72.9125 87.3671Z"
          fill="white"
        />
        <path
          d="M65.1195 84.0643C63.7617 84.0643 62.6609 82.9615 62.6609 81.601C62.6609 80.2406 63.7617 79.1377 65.1195 79.1377C66.4774 79.1377 67.5781 80.2406 67.5781 81.601C67.5781 82.9615 66.4774 84.0643 65.1195 84.0643Z"
          fill="white"
        />
        <path
          d="M77.2036 4.35449L77.9019 23.6046L88.7344 36.4937"
          stroke="#CC7940"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M94.0645 17.7744L77.9025 23.6052L60.6987 21.8413"
          stroke="#CC7940"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M81.4727 18.0437L77.9021 23.6049L69.0704 39.0104"
          stroke="#CC7940"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M73.8552 18.6338L77.9037 23.6048L78.1211 30.9408"
          stroke="#CC7940"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M85.1426 25.6251L77.9017 23.6045L71.7753 26.6239"
          stroke="#CC7940"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M87.2488 71.8727C87.2488 71.8727 87.7249 69.9499 86.4257 69.9282C85.1264 69.9064 85.6218 71.8915 85.6218 71.8915L87.2488 71.8727Z"
          fill="#FFAF66"
        />
        <path
          d="M99.103 147.99C99.103 147.99 99.8595 144.934 97.7948 144.9C95.7301 144.865 96.5173 148.02 96.5173 148.02L99.103 147.99Z"
          fill="#FFAF66"
        />
        <path
          d="M41.5879 176.44C41.5879 176.44 42.2101 173.927 40.5123 173.899C38.8146 173.87 39.4619 176.464 39.4619 176.464L41.5879 176.44Z"
          fill="#FFAF66"
        />
        <path
          d="M86.4313 80.5665C84.0106 80.5665 82.0482 78.6004 82.0482 76.175C82.0482 73.7496 84.0106 71.7834 86.4313 71.7834C88.8521 71.7834 90.8145 73.7496 90.8145 76.175C90.8145 78.6004 88.8521 80.5665 86.4313 80.5665Z"
          fill="#8C2935"
        />
        <path
          d="M97.8021 161.805C93.9552 161.805 90.8366 158.681 90.8366 154.827C90.8366 150.972 93.9552 147.848 97.8021 147.848C101.649 147.848 104.768 150.972 104.768 154.827C104.768 158.681 101.649 161.805 97.8021 161.805Z"
          fill="#8C2935"
        />
        <path
          d="M40.5187 187.802C37.3556 187.802 34.7913 185.233 34.7913 182.064C34.7913 178.894 37.3556 176.325 40.5187 176.325C43.6819 176.325 46.2461 178.894 46.2461 182.064C46.2461 185.233 43.6819 187.802 40.5187 187.802Z"
          fill="#8C2935"
        />
        <path
          d="M87.4824 49.2615C87.4824 49.2615 79.0455 58.6922 61.0333 59.9241"
          stroke="white"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M105.09 113.451C105.09 113.451 79.1627 135.006 35.7893 133.617"
          stroke="white"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M124.674 177.391C124.674 177.391 85.0361 185.393 33.431 155.1"
          stroke="white"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M61.6653 79.1372C61.6653 79.1372 80.8909 91.6828 103.439 94.5365"
          stroke="white"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M86.425 69.9275C86.425 69.9275 89.1403 62.616 86.4284 62.616C83.9021 62.616 86.425 69.9275 86.425 69.9275Z"
          stroke="white"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M97.7955 144.9C97.7955 144.9 102.11 133.281 97.8008 133.281C93.7862 133.281 97.7955 144.9 97.7955 144.9Z"
          stroke="white"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M40.5156 173.899C40.5156 173.899 44.0636 164.345 40.5199 164.345C37.2189 164.345 40.5156 173.899 40.5156 173.899Z"
          stroke="white"
          stroke-width="0.772533"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </>
  );
};
export default ChristmasTree;
