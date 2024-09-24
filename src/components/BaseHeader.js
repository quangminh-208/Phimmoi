import React, { useState } from "react";
import categories from "../config/categories.json";
import countries from "../config/countries.json";

export default function BaseHeader() {
    const [searchText, setSearchText] = useState("");

    console.log("🚀 ~ BaseHeader:", searchText);

    return (
        <>
            <div id="header">
                <div className="header-main">
                    <div className="container ">
                        <div className="row d-flex justify-content-between">
                            <div className="header-logo col-4">
                                <a
                                    aria-current="page"
                                    className="navbar-brand"
                                    href="/"
                                    title="Vietsub | Phim Hay | Xem Phim HD Online Vietsub Miễn Phí"
                                >
                                    <img src="https://vietsubmoi.online/_ipx/f_webp/image/logo.png" alt="Bootstrap" width="80" height="40" />
                                </a>
                            </div>
                            <div className="header-search-form col-4">
                                <form method="GET" id="form-search">
                                    <input
                                        className="w-100"
                                        type="text"
                                        placeholder="Tìm kiếm..."
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                    />
                                </form>
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                </div>

                <div className="header-menu">
                    <div className="container">
                        <ul className="navbar-nav d-flex flex-row justify-content-around">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
                                    Thể loại
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {categories.map(category => (
                                        <li key={category.id}>
                                            <a className="dropdown-item" href="/">
                                                {category.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
                                    Quốc gia
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {countries.map(country => (
                                        <li key={country.id}>
                                            <a className="dropdown-item" href="/">
                                                {country.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Anime
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Phim mới nhất
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Phim mới nhất
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
