import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BackToTop() {
    const [isShow, setIsshow] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsshow(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isShow]);

    return (
        <>
            {isShow && (
                <button onClick={() => scrollToTop()} className="back-to-top d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon icon="fa-solid fa-caret-up" />
                    <span>Top</span>
                </button>
            )}
        </>
    );
}

export default BackToTop;
