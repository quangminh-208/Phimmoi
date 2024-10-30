import React, { useState, useEffect, useRef } from "react";

function LazyLoadImage({ src, alt, className }) {
    const [isLoading, setIsLoading] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            debugger
            if (entries[0].isIntersecting) {
                setIsLoading(false);
                observer.disconnect();
            }
        });

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [imgRef]);

    return (
        <>
            {isLoading ? (
                <img src="https://critics.io/img/movies/poster-placeholder.png" alt="Movie loading..." className={className} />
            ) : (
                <img src={src} alt={alt} ref={imgRef} className={className} />
            )}
        </>
    );
}

export default LazyLoadImage;
