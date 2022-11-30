import AwsClouldSVG from "./svgComponents/cloud";
const CloudAnimation = () => {
  return (
    <>
      <div className="w-screen h-screen bg-cover bg-right bg-[url('/background.svg')]">
        <AwsClouldSVG
          onClick={() => console.log("object")}
          cssClass={"animate-could1 xl:h-40 h-14"}
        />
        <AwsClouldSVG
          onClick={() => console.log("object")}
          cssClass={"animation-cloud1 xl:h-60 h-14"}
        />
        <AwsClouldSVG
          onClick={() => console.log("object")}
          cssClass={"animate-could3 xl:h-60 h-14"}
        />
      </div>
    </>
  );
};
export default CloudAnimation;
