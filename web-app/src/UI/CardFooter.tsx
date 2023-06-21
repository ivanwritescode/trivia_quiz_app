import React, { ReactNode } from "react";

interface ICardFooterProps {
    children: ReactNode;
    className?: string;
}

const CardFooter = ({ children, className="" }: ICardFooterProps) => {
    return (
        <div className={`card-footer ${className}`}>
            {children}
        </div>
    )
}

export default CardFooter;
