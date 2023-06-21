import React from "react";
import { Link } from "react-router-dom";

interface IPageControlProp {
    content: string;
    linkTo: string;
    onClick?: () => void;
}

const PageControl = ({ content, linkTo, onClick }: IPageControlProp) => {
    const handleButtonClick = () => {
        if (onClick)
            onClick();
    };

    return (
        <div className="page-control">
            <button onClick={handleButtonClick}>
                <Link to={linkTo}>{content}</Link>
            </button>
        </div>
    )
}

export default PageControl;
