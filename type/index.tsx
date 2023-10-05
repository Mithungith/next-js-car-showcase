import { MouseEventHandler } from "react";

export interface CustomButtonprops {
    title:string,
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?:"button"|"string";
}

export interface SearchManufactureProps {
    manufacture:string;
    setManufacture:(manufacture:string)=>void;
}