import React, { ReactNode } from "react";

interface ICardProps {
    children: ReactNode;
    className?: string;
}

const Card = ({ children, className = "" }: ICardProps) => {

    return (
        <div className={`card ${className}`}>
            {children}
        </div>
    )
}

export default Card;
