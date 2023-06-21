import React from "react";
import { BsCheckLg } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import Button from "./Button";

interface ICardControlProps {
    className?: string;
    isCentered?: boolean;
    isAlignRight?: boolean;
    handleClick: (value: string) => void;
}

const CardControl = ({ className = "", isCentered = false, handleClick }: ICardControlProps) => {
    const getClassName = () =>
        isCentered
            ? `card-control justify-center ${className}`
            : `card-control align-right ${className}`;

    const handleTrueClicked = () =>
        handleClick("True");
    
    const handleFalseClicked = () =>
        handleClick("False");

    return (
        <div className={getClassName()}>
            <Button className="btn-admit" icons={BsCheckLg} onClick={handleTrueClicked}>True</Button>
            <Button className="btn-deny" icons={RxCross2} onClick={handleFalseClicked}>False</Button>
        </div>
    )
}

export default CardControl;
