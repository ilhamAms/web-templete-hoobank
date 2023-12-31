import React from "react";
import { features } from "../constant";
import styles from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-9"
    } feature-card `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimblue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain " />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="text-white font-semibold text-[18px] leading-[23px]">
        {title}
      </h4>
      <p className="font-normal text-dimwhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

export default FeatureCard;
