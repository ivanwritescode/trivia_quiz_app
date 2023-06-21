import React from "react";
import { BsCheckLg } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import Button from "./Button";

interface ICardControlProps {
    className?: string;
    isCentered?: boolean;
    isAlignRight?: boolean;
}

const CardControl = ({ className = "", isCentered = false }: ICardControlProps) => {
    const getClassName = () =>
        isCentered
            ? `card-control justify-center ${className}`
            : `card-control align-right ${className}`;

    return (
        <div className={getClassName()}>
            <Button className="btn-admit" icons={BsCheckLg}>True</Button>
            <Button className="btn-deny" icons={RxCross2}>False</Button>
        </div>
    )
}

export default CardControl;
