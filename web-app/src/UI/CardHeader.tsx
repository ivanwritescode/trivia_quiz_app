import React, { ReactNode } from "react";

interface ICardHeaderProps {
    children: ReactNode;
    className?: string;
}

const CardHeader = ({ children, className="" }: ICardHeaderProps) => {
    return (
        <div className={`card-header ${className}`}>
            {children}
        </div>
    )
}

export default CardHeader;
