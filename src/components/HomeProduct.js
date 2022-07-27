import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../assets/user/css/Home.css'

const HomeProduct = () => {
    const [saleProduct, setSaleProduct] = useState([]);
    const [bestProduct, setBestProduct] = useState([]);

    useEffect(() => {
        axios.get('/products/top-promotions-products').then(res => {
            if(res.data.status === true){
                setSaleProduct(res.data.data);
            }
        })
        axios.get('/products/top-selling?category=').then(res => {
            if(res.data.status === true){
                setBestProduct(res.data.data)
            }
        })
    },[])
    return(

        <div className="product">
            <div className="product-bestseller">
                <div className="row row-cols-5">
                    <h4 className="text-center col-md-12 mb-4" style={{color: '#fedf5a'}}>SẢN PHẨM BÁN CHẠY</h4>
                    {
                        bestProduct.map((item, idx) => (
                            <div className="col mb-3"key={idx} prod_id={item.product_id}>
                                <Link to = {`/products/${item.product_id}`} className="product-item">
                                    <span className="product-tag">Yêu thích</span>
                                    <img src={item.thumbnail_url} alt="" className="product-img"></img>
                                    <div className="product-name">{item.name}</div>
                                    <div className="product-qtt">Còn {item.qtt} sản phẩm</div>
                                    <div className="row">
                                        <div className="product-old-price col-md-5">
                                        {Intl.NumberFormat('vi',{ style: 'currency', currency: 'VND' }).format(item.price)}
                                        </div>
                                        <div className="product-new-price col-md-7">
                                            {Intl.NumberFormat('vi',{ style: 'currency', currency: 'VND' }).format(item.price * 0.8)}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="product-bestseller mt-5">
                <div className="row row-cols-5">
                    <h4 className="text-center col-md-12 mb-4" style={{color: '#fedf5a'}}>GIẢM GIÁ NHIỀU</h4>
                    {
                        saleProduct.map((item, idx) => (
                            <div  className="col mb-3"key={idx} prod_id={item.id}>
                                <Link to={`/products/${item.product_id}`} className="product-item">
                                    <span className="product-tag">Yêu thích</span>
                                    <img src={item.thumbnail_url} alt="" className="product-img"></img>
                                    <div className="product-name">{item.name}</div>
                                    <div className="product-qtt">Còn {item.quantity} sản phẩm</div>
                                    <div className="row">
                                        <div className="product-old-price col-md-5">
                                        {Intl.NumberFormat('vi',{ style: 'currency', currency: 'VND' }).format(item.price)}
                                        </div>
                                        <div className="product-new-price col-md-7">
                                            {Intl.NumberFormat('vi',{ style: 'currency', currency: 'VND' }).format(item.price * (1 - item.percentage_reduce /100))}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default HomeProduct