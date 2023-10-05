"use client";
import { CustomButtonprops } from "@/type";
import React from "react";

const CustomButton = ({title,btnType,containerStyles,handleClick}:CustomButtonprops) => {
  return (
    <button disabled={false} type={"button"} className={`custom-btn ${containerStyles}`} onClick={()=>{}}>
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
