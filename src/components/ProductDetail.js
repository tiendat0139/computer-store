import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../assets/user/css/Product.css'
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState([]);
    const [selected, setSelected] = useState('');
    const [loading, setLoading] = useState(true);
    const [orderQtt, setOrderQtt] = useState('');

    useEffect(() => {
        axios.get(`/products/${productId}`).then(res => {
            if(res.data.status === true){
                setProduct(res.data.data)
            }
            setSelected(res.data.data.images[0])
            setLoading(false)
        })
    },[productId])

    if(loading){
        return <div>Loading...</div>
    }

    return(
        <div className="pd-wrapper">
            <div className="pd-detail container px-3">
                <h5 className="pd-name">{product.name}</h5>
                <div className="row">
                    <div className="col-md-4">
                        <div className="img-selected">
                            <img src={selected} alt="" className="pd-img"></img>
                        </div>
                        <div className="row px-3">
                            {
                                product.images.slice(0,4).map((item, idx) => (
                                    <div className="col-md-3" key={idx}>
                                        <img src={item} alt="" className={`${selected === item?'active': ''} pd-img-tn`} onClick={() => setSelected(item)}></img>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                    <div className="col-md -5">
                        <span className="pd-param_header">Thông số sản phẩm</span>
                        <ul className="pd-param_list">
                            {
                                product.specifications.map((item, idx) => (
                                    <li className="pd-param_item" key={idx}>{Object.keys(item)[0]}: {Object.values(item)[0]}</li>
                                ))
                            }
                        </ul>
                        <div className="pd-price">
                            <div className="pd-price_box">
                                <h6>Giá khuyến mại:</h6>
                                <span className="new-price">
                                    {Intl.NumberFormat('vi',{ style: 'currency', currency: 'VND' }).format(product.price * 0.9)}
                                </span>
                                <span className="old-price">
                                    {Intl.NumberFormat('vi',{ style: 'currency', currency: 'VND' }).format(product.price)}
                                </span>
                                <span className="reduce-price">
                                    Tiết kiệm {Intl.NumberFormat('vi',{ style: 'currency', currency: 'VND' }).format(product.price * 0.1)}    
                                </span>
                            </div>
                            <div className="pd-policy">Bảo hành 12 tháng</div>
                        </div>
                        <div className="pd-buy">
                            <div className="pd-buy_number">
                                <span className="pd-buy_span" >Số lượng:</span>
                                <input type="number" className="pd-buy_box" value={orderQtt} onChange={e => setOrderQtt(e.target.value)}></input>
                            </div>
                            <div className="pd-buy_card">
                                <i className="fa-solid fa-cart-arrow-down"></i>
                                Thêm vào giỏ hàng
                            </div>
                            <Link to={`/order?id=${productId}&qtt=${orderQtt}`} className="buy-btn">
                                ĐẶT MUA NGAY <br></br>
                                <small>Giao hàng tận nơi nhanh chóng</small>
                            </Link>
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
                <div className="pd-desc">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                        <div dangerouslySetInnerHTML={{ __html: product.description }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail