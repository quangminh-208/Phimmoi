import React from "react";

function LoadingLayer() {
    return (
        <>
            <div className="loading-layer">
                <div className="loading d-flex flex-column align-items-center">
                    <svg className="spinner" viewBox="0 0 50 50">
                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="8"></circle>
                    </svg>
                    <h1 className="text-white fw-bold mt-5">Loading...</h1>
                </div>
            </div>
        </>
    );
}

export default LoadingLayer;
