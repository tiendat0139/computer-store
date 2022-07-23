import React, {useState} from "react";
import { Link } from "react-router-dom";

import '../assets/user/css/Sidebar.css';

const Sidebar = () => {
    // data get from database
    const [current, setCurrent] = useState([]);
    const data = ["Laptop Gaming", "Laptop Dell", "Laptop HP", "Macbook", "Laptop MSI"];

    const handleCurrent = (e) => {
        const next = [...current];
        for(let i = 0; i < data.length; i++){
            console.log(e.target.closest('li').id)
            if(i !== e.target.closest('li').id) next[i] = 0;
        }
        next[e.target.closest('li').id] = 1;
        setCurrent([...next])
    }
    return (
        <div className="sidebar">
            <div className="sidebar-header">Danh mục sản phẩm</div>
            <ul className="sidebar-list">   
                {
                    data.map((item, idx) => (
                        <li className="sidebar-item" key= {idx} id={idx} >
                            <Link to={`/${item}`} className={`sidebar-item_link ${current[idx]? 'current': ''}`} onClick = {e => handleCurrent(e)}>
                                <ion-icon name="caret-forward-outline"></ion-icon>
                                {item}
                            </Link>
                        </li>

                    ))
                }
            </ul>
            <div className="sidebar-header">Bộ lọc tìm kiếm</div>
        </div>
    )
}
export default Sidebar;