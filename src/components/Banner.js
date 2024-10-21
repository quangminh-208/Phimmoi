import { React, memo } from "react";

function Banner() {
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="banner mt-4 px-5 py-3">
                    <h4 className="banner-content text-center">
                        Truy cập & bookmark{" "}
                        <a className="banner-link" href="https://t.me/+F3x2od36D7NjMDZl">
                            <strong>@vietsubfhd</strong>
                        </a>{" "}
                        để theo dõi trang Phim mới nhất nhé. Telegram support:{" "}
                        <a className="banner-link" href="https://t.me/+F3x2od36D7NjMDZl">
                            <strong>@VietsubFHD</strong>
                        </a>
                    </h4>
                </div>
            </div>
        </>
    );
}

export default Banner;
