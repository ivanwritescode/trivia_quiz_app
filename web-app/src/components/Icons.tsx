import React from "react";
import { BsCheckLg } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx";

export const SuccessIcon = () =>
    <BsCheckLg className="icon" fill="#4fbd1b" />

export const FailedIcon = () =>
    <RxCross2 className="icon red-icon" fill="#e04e10" color="#e04e10"/>