import React from "react";
import "../../assets/user/css/Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h6 className="footer-header">GIỚI THIỆU CDD</h6>
                        <ul className="footer-list">
                            <li className="footer-item">Giới thiệu công ty</li>
                            <li className="footer-item">Liên hệ hợp tác kinh doanh</li>
                            <li className="footer-item">Thông tin tuyển dụng</li>
                            <li className="footer-item">Tin tức</li>
                            <li className="footer-icon">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-youtube "></i>
                                <i className="fa-brands fa-instagram-square"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6 className="footer-header">HỖ TRỢ KHÁCH HÀNG</h6>
                        <ul className="footer-list">
                            <li className="footer-item">Hướng dẫn mua hàng trực tuyến</li>
                            <li className="footer-item">Hướng dẫn thanh toán</li>
                            <li className="footer-item">Hướng dẫn mua hàng trả góp</li>
                            <li className="footer-item">In hóa đơn điện tử</li>
                            <li className="footer-item">Gửi yêu cầu bảo hành</li>

                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6 className="footer-header">CHÍNH SÁCH CHUNG</h6>
                        <ul className="footer-list">
                            <li className="footer-item">Chính sách, quy định chung</li>
                            <li className="footer-item">Chính sách vận chuyển</li>
                            <li className="footer-item">Chính sách cho doanh nghiệp</li>
                            <li className="footer-item">Chính sach chính hãng</li>
                            <li className="footer-item">Bảo mật thông tin khách hàng</li>

                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6 className="footer-header">THÔNG TIN KHUYẾN MẠI</h6>
                        <ul className="footer-list">
                            <li className="footer-item">Thông tin khuyến mại</li>
                            <li className="footer-item">Sản phẩm khuyến mại</li>
                            <li className="footer-item">Sản phẩm bán chạy</li>
                            <li className="footer-item">Sản phẩm mới</li>
                            <li className="mt-2"><img src="https://hacom.vn/media/lib/dathongbao.png" alt=""></img></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer
