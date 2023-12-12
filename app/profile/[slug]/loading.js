"use client";
import React from "react";
import { Triangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="pt-20 h-screen flex justify-center items-center">
      <Triangle
        height="80"
        width="80"
        color="#14213D"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
