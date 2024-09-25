import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BackToTop() {
    const [isShow, setIsshow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsshow(window.scrollY > 200)
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isShow]);

    return (
        <>
            {isShow && (
                <a className="back-to-top d-flex flex-column justify-content-center align-items-center" href="#header">
                    <FontAwesomeIcon icon="fa-solid fa-caret-up" />
                    <span>Top</span>
                </a>
            )}
        </>
    );
}

export default BackToTop;
