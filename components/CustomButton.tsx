"use client";
import { CustomButtonprops } from "@/type";
import React from "react";

const CustomButton = ({title,btnType,containerStyles,handleClick,textStyles,rightIcon}:CustomButtonprops) => {
  return (
    <button disabled={false} type={btnType} className={`custom-btn ${containerStyles}`} onClick={()=>{handleClick}}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <image src={rightIcon} alt="right icon" fill className="object-contain"/>
        </div>
      )}
    </button>
  );
};

export default CustomButton;
