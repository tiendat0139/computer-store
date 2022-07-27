import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomeSidebar from './HomeSidebar'
import '../assets/user/css/Home.css'
import HomeProduct from "./HomeProduct";
import CategoryProduct from "./CategoryProduct";

const Home = () => {
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
                <Routes>
                    <Route path="/" element={<HomeProduct/>} />
                    <Route path="/category/:categoryId" element={<CategoryProduct />} />
                </Routes>

            </div>
        </div>
    )
}
export default Home;