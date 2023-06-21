import React, { ComponentType, ReactNode } from "react";

interface IButtonProps {
    children?: ReactNode;
    className?: string
    icons?: ComponentType<any>;
    onClick: () => void;
}

const Button = ({ children, className = "", icons: Icons, onClick }: IButtonProps) =>
    <button className={`btn ${className}`} onClick={onClick}>
        {Icons && <Icons className="icon" />}{children}
    </button>

export default Button;
