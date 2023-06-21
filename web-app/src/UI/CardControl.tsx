import React from "react";

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
            <button className="btn btn-admit"><i></i>True</button>
            <button className="btn btn-deny">False</button>
        </div>
    )
}

export default CardControl;
