import React from "react";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Dashboard from "../../components/admin/Dashboard";
import AddProduct from "../../components/admin/AddProduct";
import Employees from "../../components/admin/Employees";
import Order from "../../components/admin/Order";

const AdminLayout = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="add-product" element={<AddProduct/>}/>
                            <Route path="/employees" element={<Employees />} />
                            <Route path="/orders" element={<Order />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default AdminLayout