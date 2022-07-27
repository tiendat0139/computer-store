import React from "react";
import {Routes, Route} from 'react-router-dom';

import Navbar from "./Navbar";
import Home from "../../components/Home"
import Footer from "./Footer"
import ProductDetail from "../../components/ProductDetail";
import Login from "../../components/Login";
import Order from "../../components/Order";
const UserLayout = () => {
    return(
        <div className="userlayout">
            <Navbar />
            <div>
                <Routes>
                    <Route path='/*' exact  element={<Home/>} />
                    <Route path='products/:productId' exact element={<ProductDetail/>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/order' element = {<Order />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default UserLayout