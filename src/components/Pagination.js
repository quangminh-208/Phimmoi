import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        if (page !== currentPage && page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const [pages, setPages] = useState([]);

    useEffect(() => {
        const pagesShow = [];
        for (let i = currentPage - 3; i <= totalPages; i++) {
            if (pagesShow.length > 6) break;
            if (i > 0) pagesShow.push(i);
        }
        setPages(pagesShow);
    }, [currentPage, totalPages]);

    return (
        <div className="d-flex justify-content-center mt-5">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <Link className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
                        <FontAwesomeIcon icon="fa-solid fa-circle-left" />
                    </Link>
                </li>
                {pages.map((page) => (
                    <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                        <Link className="page-link" onClick={() => handlePageChange(page)}>
                            {page}
                        </Link>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <Link className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
                        <FontAwesomeIcon icon="fa-solid fa-circle-right" />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
