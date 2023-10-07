import hexRgb from "hex-rgb";
import React from "react";

export function hexToRGB(color: string) {
    let rgb = Array.from(hexRgb(color, {format:'array'}));
    if (rgb[rgb.length - 1] === 1) {
        rgb = rgb.slice(0, -1);
    }
    return rgb.join(',');
}

export function setVar(ref: React.RefObject<HTMLElement>, name:string, value:string) {
    ref.current?.style.setProperty(name, value);
}