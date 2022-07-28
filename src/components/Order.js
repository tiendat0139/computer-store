import React,{ useEffect, useState } from "react";
import {useSearchParams, useNavigate } from "react-router-dom";
import '../assets/user/css/Order.css'
import axios from "axios"
const Order = () => {
    const navigate = useNavigate();
    const[searchParams] = useSearchParams()
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])
    const productId = searchParams.get('id')
    const quantity = searchParams.get('qtt')
    useEffect(() => {
        axios.get(`/products/${productId}`).then(res => {
            if(res.data.status === true){
                setProduct(res.data.data)
            }
            setLoading(false)
        })
    },[productId])

    if(loading){
        return <div>Loading...</div>
    }
    return(
        <div className="container">
            <div className="order row">
                <div className="col-md-9">
                    <h4 className=" fw-bold">1. Địa chỉ giao hàng</h4>
                    <div className="address">
                        <form>                    
                            <div className="input-group mb-3">
                                <span className="input-group-text w-25 text-center d-block fw-bold" id="basic-addon3">Họ tên</span>
                                <input type="text" className="form-control shadow-none" required id="basic-url" aria-describedby="basic-addon3" placeholder="Họ và tên" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text w-25 text-center d-block fw-bold" id="basic-addon3">Số điện thoại </span>
                                <input type="text" className="form-control shadow-none" id="basic-url" aria-describedby="basic-addon3" placeholder="Nhập số điện thoại "/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text w-25 text-center d-block fw-bold" id="basic-addon3">Email</span>
                                <input type="text" className="form-control shadow-none" id="basic-url" aria-describedby="basic-addon3" placeholder="Nhập email" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text w-25 text-center d-block fw-bold" id="basic-addon3">Tỉnh/Thành phố</span>
                                <input type="text" className="form-control shadow-none" id="basic-url" aria-describedby="basic-addon3" placeholder="Tỉnh/Thành phố"/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text w-25 text-center d-block fw-bold " id="basic-addon3">Quận/Huyện</span>
                                <input type="text" className="form-control shadow-none" id="basic-url" aria-describedby="basic-addon3" placeholder="Quận/Huyện" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text w-25 text-center d-block fw-bold" id="basic-addon3">Phường/Xã</span>
                                <input type="text" className="form-control shadow-none" id="basic-url" aria-describedby="basic-addon3" placeholder="Phường/Xã"/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text w-25 text-center d-block fw-bold" id="basic-addon3">Địa chỉ</span>
                                <input type="text" className="form-control shadow-none" id="basic-url" aria-describedby="basic-addon3" placeholder="Số nhà, tên đường"/>
                            </div>
                        </form>
                    </div>
                    <h4 className="fw-bold">2. Chọn hình thức giao hàng</h4>
                    <div className="shipment">
                        <div className="ship-select mb-3">
                            <input type="radio" className="ship-op" name="ship-opt"></input> <span>Giao hàng tiết kiệm (Nhận hàng sau 5-7 ngày)</span><br></br>
                        </div>
                        <div className="ship-select">
                            <input type="radio" className="ship-op" name="ship-opt"></input> <span>Giao hàng nhanh (Nhận hàng sau 2-3 ngày)</span>
                        </div >
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="product-inf">
                        <h6>Đơn hàng</h6>
                        <div className="row">
                            <div className="col-md-2 order-qtt">{quantity}x</div>
                            <div className="col-md-6 order-name">{product.name}</div>
                            <div className="col-md-4 order-price">
                                {Intl.NumberFormat('vi',{ style: 'currency', currency: 'VND' }).format(product.price * 0.9)}
                            </div>
                        </div>
                        <div className="total-price d-flex justify-content-between">
                            <span>Thành tiền</span>
                            <span className="total-price_nb">
                                {Intl.NumberFormat('vi',{ style: 'currency', currency: 'VND' }).format(product.price * 0.9 * quantity)}
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="order-btn" >ĐẶT HÀNG</button>
                </div>
            </div>
        </div>
    )
}
export default Order