import React from "react";
import HomeSidebar from './HomeSidebar'
import { Link } from "react-router-dom";
import '../assets/user/css/Home.css'
const Home = () => {
    const prod_selling = [
        {
            id: 1,
            name: 'Laptop Asus Gaming ROG Strix G513IH-HN015W (R7 4800H/8GB RAM/512GB SSD/15.6 FHD 144hz/GTX1650 4GB/Win11/Xám',
            qtt: '2',
            old_price: '39.000.000',
            new_price: '35.999.999',
            img: 'https://hanoicomputercdn.com/media/product/63683_asus_gaming_rog_strix_g513_20.jpeg'
        },
        {   
            id: 2,
            name: 'Laptop Acer Gaming Nitro 5 AN515-57-71VV (NH.QENSV.005) (i7 11800H/8GB Ram/512GB SSD/RTX3050 4G/15.6 inch FHD 144Hz/Win 11/Đen',
            qtt: '1',
            old_price: '20.500.000',
            new_price: '18.999.999',
            img: 'https://hanoicomputercdn.com/media/product/120_65480_acer_gaming_nitro_5_an515_57_16.png'
        },
        {
            id: 3,
            name: 'Laptop Acer Gaming Nitro 5 AN515-57-71VV (NH.QENSV.005) (i7 11800H/8GB Ram/512GB SSD/RTX3050 4G/15.6 inch FHD 144Hz/Win 11/Đen',
            qtt: '1',
            old_price: '25.500.000',
            new_price: '22.900.000',
            img: 'https://hanoicomputercdn.com/media/product/120_61623_laptop_acer_gaming_nitro_5_an515_57_16.png'
        },
        {
            id: 4,
            name: 'Laptop Acer Gaming Predator Helios 500 PH517-52-797L (NH.QD3SV.001) (i711800H/64GB Ram/2TB SSD/RTX3080 8G/17.3 inch FHD 360Hz/Win 10/Đen',
            qtt: '1',
            old_price: '24.500.000',
            new_price: '22.900.000',
            img: 'https://hanoicomputercdn.com/media/product/120_62709_laptop_acer_gaming_predator_helios_500_12.jpg'
        },
        {
            id: 4,
            name: 'Laptop Acer Gaming Predator Helios 500 PH517-52-797L (NH.QD3SV.001) (i711800H/64GB Ram/2TB SSD/RTX3080 8G/17.3 inch FHD 360Hz/Win 10/Đen',
            qtt: '1',
            old_price: '24.500.000',
            new_price: '22.900.000',
            img: 'https://hanoicomputercdn.com/media/product/120_62709_laptop_acer_gaming_predator_helios_500_12.jpg'
        },
    ]
    return(
        <div className="home pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <HomeSidebar />
                    </div>
                    <div className="home-slider col-md-9">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="2000">
                                <img src="https://lh3.googleusercontent.com/ymjzqGiJTZDiVKFCs2FVFI8JNs8TvXiF817nbdk1ZjdkcGyCxxZoIqRvKj-gnlL8wTQ4V9CZxI1ib1fOqgs9EANvXdsrLe0=rp-w1920" className="d-block w-100" alt="" />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                <img src="https://lh3.googleusercontent.com/mPx4LDes9GdL23vBPJeVtEB8oV7c1Ryvs-kF5yycUQwpu-SmghFMmRCVDbEHNi09rQ832jy81HHhzsKwaIk_IpQDdiX5kBo=rw-w1920" className="d-block w-100" alt="" />
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                <img src="https://lh3.googleusercontent.com/2H6mknu-TkrchbBNRKGukLyczizvyuBdex0uedGMT4qQlJED0CT6RcO5c6v3S80dQDx0rXwJNEor0zhV4ZieYt3vPrv7ops=rw-w1920" className="d-block w-100" alt="" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    
                </div>

                <div className="product">
                    <div className="product-bestseller">
                        <div className="row row-cols-5">
                            <h4 className="text-center col-md-12 mb-4" style={{color: '#fedf5a'}}>SẢN PHẨM BÁN CHẠY</h4>
                            {
                                prod_selling.map((item, idx) => (
                                    <Link to = {`/${item.id}`}className="col mb-3"key={idx} prod_id={item.id}>
                                        <div className="product-item">
                                            <span className="product-tag">Yêu thích</span>
                                            <img src={item.img} alt="" className="product-img"></img>
                                            <div className="product-name">{item.name}</div>
                                            <div className="product-qtt">Còn {item.qtt} sản phẩm</div>
                                            <div className="row">
                                                <div className="product-old-price col-md-5">{item.old_price} đ</div>
                                                <div className="product-new-price col-md-7">{item.new_price} đ</div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product-bestseller mt-5">
                        <div className="row row-cols-5">
                            <h4 className="text-center col-md-12 mb-4" style={{color: '#fedf5a'}}>GIẢM GIÁ NHIỀU</h4>
                            {
                                prod_selling.map((item, idx) => (
                                    <Link to={`/${item.prod_id}`} className="col mb-3"key={idx} prod_id={item.id}>
                                        <div className="product-item">
                                            <span className="product-tag">Yêu thích</span>
                                            <img src={item.img} alt="" className="product-img"></img>
                                            <div className="product-name">{item.name}</div>
                                            <div className="product-qtt">Còn {item.qtt} sản phẩm</div>
                                            <div className="row">
                                                <div className="product-old-price col-md-5">{item.old_price} đ</div>
                                                <div className="product-new-price col-md-7">{item.new_price} đ</div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Home;