import React, { useState } from "react";

export default function BaseHeader() {
    const categories = [
        "Hành Động",
        "Phiêu Lưu",
        "Hài",
        "Kinh Dị",
        "Tình Cảm",
        "Khoa Học Viễn Tưởng",
        "Giả Tưởng",
        "Tài Liệu",
        "Âm Nhạc",
        "Gia Đình",
        "Lịch Sử",
        "Chính Trị",
        "Tội Phạm",
        "Thần Thoại",
        "Chính Kịch",
    ];

    const countries = [
        "Toàn bộ Quốc gia",
        "Quốc Gia Khác",
        "Thái Lan",
        "Ấn Độ",
        "Hà Lan",
        "Ba Lan",
        "Âu Mỹ",
        "Anh",
        "Đức",
        "Trung Quốc",
        "Xem tất cả",
        "TOF",
        "Brazil",
        "Đan Mạch",
        "Châu Phi",
        "Indonesia",
        "Úc",
        "Philippines",
        "UAE",
        "Nam Phi",
        "Hàn Quốc",
        "Đài Loan",
        "Pháp",
        "Tây Ban Nha",
        "Nga",
        "Thụy Điển",
        "Bồ Đào Nha",
        "Na Uy",
        "Ukraina",
        "Nhật Bản",
        "Hồng Kông",
        "Canada",
        "Thổ Nhĩ Kỳ",
        "Mexico",
        "Malaysia",
        "Ý",
        "Thụy Sĩ",
        "Ả Rập Xê Út",
    ];

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
                                    {categories.map((category, index) => (
                                        <li key={index}>
                                            <a className="dropdown-item" href="/">
                                                {category}
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
                                    {countries.map((country, index) => (
                                        <li key={index}>
                                            <a className="dropdown-item" href="/">
                                                {country}
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
