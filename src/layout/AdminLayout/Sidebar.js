import React from "react";
import { Link } from "react-router-dom";
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts'
const Sidebar = () => {
    return(
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Statis</div>
                    <Link to={"/admin"} className="nav-link" href="index.html">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    <div className="sb-sidenav-menu-heading">Store manager</div>
                    <Link to={"#"} className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                        <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                        Product
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link to={"/admin/add-product"} className="nav-link" href="layout-static.html">Add product</Link>
                            <Link to={"#"} className="nav-link" href="layout-sidenav-light.html">Remove product</Link>
                            <Link to={"#"} className="nav-link" href="layout-sidenav-light.html">List product</Link>
                            <Link to={"/admin/orders"} className="nav-link" href="layout-sidenav-light.html">Orders</Link>
                        </nav>
                    </div>
                    <Link to={"#"} className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                        <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                        Employes
                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                    </Link>
                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                            <Link to={"/admin/employees"} className="nav-link" href="layout-static.html">List employes</Link>   
                        </nav>
                    </div>
                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as: CDD</div>
            </div>
        </nav>
    )
}
export default Sidebar