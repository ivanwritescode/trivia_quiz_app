import React from "react";
import { Link } from "react-router-dom";

interface IPageControlProp {
    content: string;
}

const PageControl = ({ content }: IPageControlProp) => {
    return (
        <div className="page-control">
            <button>
                <Link to="quiz">{content}</Link>
            </button>
        </div>
    )
}

export default PageControl;
