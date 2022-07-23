import React from "react";
import {Routes, Route} from 'react-router-dom';

import Navbar from "./Navbar";
import Home from "../../components/Home"
import Footer from "./Footer"
import ProductDetail from "../../components/ProductDetail";
const UserLayout = () => {
    return(
        <div className="userlayout">
            <Navbar />
            <div>
                <Routes>
                    <Route path='/' exact  element={<Home/>} />
                    <Route path='/:productId' exact element={<ProductDetail/>} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default UserLayout