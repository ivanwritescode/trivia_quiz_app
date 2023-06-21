import React, { ReactNode } from "react";

interface ICardFooterProps {
    children: ReactNode;
    className?: string;
    hasBorder?: boolean;
}

const CardFooter = ({ children, className = "", hasBorder }: ICardFooterProps) => {
    return (
        <div className={`card-footer ${hasBorder ? "border-top" : ""} ${className}`}>
            {children}
        </div>
    )
}

export default CardFooter;
