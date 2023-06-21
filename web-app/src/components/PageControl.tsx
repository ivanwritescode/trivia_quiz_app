import React from "react";
import { Link } from "react-router-dom";

const PageControl = () => {
    return (
        <div className="page-control">
            <button>
                <Link to="quiz">LET’S START!</Link>
            </button>
        </div>
    )
}

export default PageControl;
