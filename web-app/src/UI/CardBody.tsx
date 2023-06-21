import React, { ReactNode } from "react";

interface ICardBodyProps {
    children: ReactNode;
    className?: string;
}

const CardHeader = ({ children, className="" }: ICardBodyProps) => {
    return (
        <div className={`card-body ${className}`}>
            {children}
        </div>
    )
}

export default CardHeader;
