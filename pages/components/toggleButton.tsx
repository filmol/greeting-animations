const ToggleButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <button onClick={onClick} className="bg-black">
        Night & Day
      </button>
    </>
  );
};
export default ToggleButton;
