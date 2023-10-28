import React from "react";
import newBannerImg from 'images/items/newsBannerItem.svg'
import arrowDown from 'images/icon/arrowDown.svg'

export default function BannerNews() {
  return (
    <div
      className="-mt-[5.6rem] z-0 relative xl:pb-32 pb-20 lg:px-0 px-4 rounded-br-3xl rounded-bl-3xl"
      style={{
        background: "linear-gradient(115deg, #2E48CD 12.25%, #1F237E 92.53%)",
      }}
    >
      <div className="inner-container mx-auto flex md:flex-row flex-col-reverse md:justify-between items-center md:px-0 px-2">
        <img src={newBannerImg} alt="wallet" className="lg:w-fit w-[30rem] mx-auto mt-20"/>
      </div>
      <button className="absolute lg:-bottom-14 md:-bottom-10 -bottom-9 mx-auto left-0 right-0 w-fit px-8 py-2">
      <img src={arrowDown} alt="wallet" className="lg:w-fit md:w-16 w-12"/>

      </button>
    </div>
  );
}
