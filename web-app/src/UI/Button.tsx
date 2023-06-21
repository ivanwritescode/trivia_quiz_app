import React, { ComponentType, ReactNode } from "react";

interface IButtonProps {
    children?: ReactNode;
    className?: string
    icons?: ComponentType<any>;
}

const Button = ({ children, className = "", icons: Icons }: IButtonProps) =>
    <button className={`btn ${className}`}>
        {Icons && <Icons className="icon" />}{children}
    </button>

export default Button;
