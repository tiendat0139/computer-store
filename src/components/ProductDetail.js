import React from "react";
import '../assets/user/css/Product.css'
const ProductDetail = () => {
    const inf = 
    {
        id: 1,
        name: 'Laptop Asus Gaming ROG Strix G513IH-HN015W (R7 4800H/8GB RAM/512GB SSD/15.6 FHD 144hz/GTX1650 4GB/Win11/Xám',
        qtt: '2',
        old_price: '39.000.000',
        new_price: '35.999.999',
        img: 'https://hanoicomputercdn.com/media/product/63683_asus_gaming_rog_strix_g513_20.jpeg',
        special: [
            {"cpu":"Intel core i7 11800H"},
            {"ram":"16GB"},{"hard_disk":"512GB SSD"},
            {"vga":"NVIDIA RTX3060 6G"},
            {"screen":"15.6 inch FHD 144Hz"},
            {"keyboard":"có led"},{"os":"Win 11"},
            {"color":"Đen"}
        ]
    }
    return(
        <div className="pd-wrapper">
            <div className="pd-detail container">
                <h5 className="pd-name">{inf.name}</h5>
                <div className="row">
                    <div className="col-md-4">
                        <img src={inf.img} alt="" className="pd-img"></img>
                    </div>
                    <div className="col-md -5">
                        <span className="pd-param_header">Thông số sản phẩm</span>
                        <ul className="pd-param_list">
                            {
                                inf.special.map((item, idx) => (
                                    <li className="pd-param_item" key={idx}>{Object.keys(item)[0]}: {Object.values(item)[0]}</li>
                                ))
                            }
                        </ul>
                        <div className="pd-price">
                            <div className="pd-price_box">
                                <h6>Giá khuyến mại:</h6>
                                <span className="new-price">12.999.000 ₫</span>
                                <span className="old-price">19.199.000₫</span>
                                <span className="reduce-price">Tiết kiệm 1.000.000₫</span>
                            </div>
                            <div className="pd-policy">Bảo hành 12 tháng</div>
                        </div>
                        <div className="pd-buy">
                            <div className="pd-buy_number">
                                <span className="pd-buy_span" >Số lượng:</span>
                                <input type="number" className="pd-buy_box"></input>
                            </div>
                            <div className="pd-buy_card">
                                <i class="fa-solid fa-cart-arrow-down"></i>
                                Thêm vào giỏ hàng
                            </div>
                            <button className="buy-btn">
                                ĐẶT MUA NGAY <br></br>
                                <small>Giao hàng tận nơi nhanh chóng</small>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="pd-commit">
                            <h6 className="pd-commit_header">YÊN TÂM MUA HÀNG</h6>
                            <ul className="pd-commit_list">
                                <li className="pd-commit_item">Uy tín 20 năm xây dựng và phát triển</li>
                                <li className="pd-commit_item">Sản phẩm chính hãng 100%</li>
                                <li className="pd-commit_item">Trả hàng tận nơi sử dụng</li>
                                <li className="pd-commit_item">Bảo hành tận nơi cho doanh nghiệp</li>
                                <li className="pd-commit_item">Miễn phí quẹt thẻ</li>
                            </ul>
                        </div>
                        <div className="pd-commit mt-4">
                            <h6 className="pd-commit_header">MIỄN PHÍ GIAO HÀNG</h6>
                            <ul className="pd-commit_list">
                                <li className="pd-commit_item">Giao hàng siêu tốc 2h</li>
                                <li className="pd-commit_item">Giao hàng miễn phí tòan quốc</li>
                                <li className="pd-commit_item">Nhận hàng và thanh toán tại nhà</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail