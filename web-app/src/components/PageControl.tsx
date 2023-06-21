import React from "react";
import { Link } from "react-router-dom";

interface IPageControlProp {
    content: string;
    linkTo: string;
}

const PageControl = ({ content, linkTo }: IPageControlProp) => {
    return (
        <div className="page-control">
            <button>
                <Link to={linkTo}>{content}</Link>
            </button>
        </div>
    )
}

export default PageControl;
