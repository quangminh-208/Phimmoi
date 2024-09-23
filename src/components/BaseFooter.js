import React from "react";

function BaseFooter() {
    return (
        <>
            <div id="footer" className="mt-5 py-5">
                <div className="footer-wrapper container">
                    <div className="row">
                        <div className="col-4">
                            <a aria-current="page" className="navbar-brand" href="/" title="Vietsub | Phim Hay | Xem Phim HD Online Vietsub Miễn Phí">
                                <img src="https://vietsubmoi.online/_ipx/f_webp/image/logo.png" alt="Bootstrap" width="120" height="60" />
                            </a>
                            <p className="my-2">
                                VietSubMoi - Trang xem phim Online với giao diện mới được bố trí và thiết kế thân thiện với người dùng. Nguồn phim
                                được tổng hợp từ các website lớn với đa dạng các đầu phim và thể loại vô cùng phong phú.
                            </p>
                            <h2 className="my-4">Liên hệ đặt quảng cáo</h2>
                            <p>
                                Telegram: <a>@VietsubFHD</a>
                            </p>
                            <p>
                                Email: <a>Adultsforfuture@gmail.com</a>
                            </p>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-4">
                                    <h4>Phim mới</h4>
                                    <ul>
                                        <li>
                                            <a href="">Phim Khoa Học</a>
                                        </li>
                                        <li>
                                            <a href="">Phim Kinh Dị</a>
                                        </li>
                                        <li>
                                            <a href="">Phim Chiếu Rạp</a>
                                        </li>
                                        <li>
                                            <a href="">Phim Hình Sự</a>
                                        </li>
                                        <li>
                                            <a href="">Phim Hành Động</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h4>Phim hay</h4>
                                    <ul>
                                        <li>
                                            <a href="">Phim Âu Mỹ</a>
                                        </li>
                                        <li>
                                            <a href="">Phim Hàn Quốc</a>
                                        </li>
                                        <li>
                                            <a href="">Phim Trung Quốc</a>
                                        </li>
                                        <li>
                                            <a href="">Phim Nhật Bản</a>
                                        </li>
                                        <li>
                                            <a href="">Phim Việt Nam</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h4>Thông tin</h4>
                                    <ul>
                                        <li>
                                            <a href="">Giới thiệu</a>
                                        </li>
                                        <li>
                                            <a href="">Liên hệ</a>
                                        </li>
                                        <li>
                                            <a href="">Điều khoản sử dụng</a>
                                        </li>
                                        <li>
                                            <a href="">Chính sách riêng tư</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BaseFooter;
