"use client";
import { CustomButtonprops } from "@/type";
import React from "react";

const CustomButton = ({title,btnType,containerStyles,handleClick,textStyles,rightIcon}:CustomButtonprops) => {
  return (
    <button disabled={false} type={btnType || "button"} className={`custom-btn ${containerStyles}`} onClick={()=>{}}>
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
