import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Pagination from "./Pagination";
import '../assets/user/css/Home.css'

const CategoryProduct = () => {
    let { categoryId } = useParams();
    const [loading, setLoading] = useState(true)
    const [totalPage, setTotalPage] = useState();
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get(`/products?category=${categoryId}&size=20&page=${currentPage}`).then(res => {
            if(res.data.status === true){
                setProduct(res.data.data);
                setTotalPage(res.data.totalPages)
            }
            setLoading(false)
        })
    },[categoryId, currentPage])
    
    if(loading){
        return <div>Loading</div>
    }
    return(
        <div className="product">
            <div className="product-bestseller">
                <div className="row row-cols-5">
                    <h4 className="text-center col-md-12 mb-4" style={{color: '#fedf5a'}}>SẢN PHẨM BÁN CHẠY</h4>
                    {
                        product.map((item, idx) => (
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
            <div className="mt-3 d-flex justify-content-center">
                <Pagination totalPage={totalPage} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    )
}
export default CategoryProduct