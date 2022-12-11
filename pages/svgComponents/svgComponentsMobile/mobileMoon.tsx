const MobileMoon = ({ cssClass }: { cssClass: string }) => {
  return (
    <>
      <path
        onClick={() =>
          document?.getElementById('main')?.classList.toggle('dark')
        }
        className={`${cssClass} absolute cursor-pointer hover:[animation-play-state:paused] duration-300`}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M132.673 89.2874C128.016 93.012 122.098 95.2413 115.655 95.2413C100.656 95.2413 88.4975 83.1606 88.4975 68.2583C88.4975 63.6777 89.6463 59.3636 91.6732 55.585C85.4904 60.5308 81.5342 68.1134 81.5342 76.614C81.5342 91.5163 93.6928 103.597 108.691 103.597C119.079 103.597 128.105 97.8017 132.673 89.2874Z"
        fill="#EFF0F1"
      />
    </>
  )
}
export default MobileMoon
