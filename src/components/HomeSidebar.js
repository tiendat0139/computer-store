import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import '../assets/user/css/Sidebar.css';

const Sidebar = () => {
    const [current, setCurrent] = useState([]);
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('/categories').then(res => {
            if(res.data.status === true){
                setData(res.data.categories);
            }
        })
    },[])

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
                            <Link to={`/category/${item.category_id}`} className={`sidebar-item_link ${current[idx]? 'current': ''}`} onClick = {e => handleCurrent(e)}>
                                <ion-icon name="caret-forward-outline"></ion-icon>
                                {item.name}
                            </Link>
                        </li>

                    ))
                }
            </ul>
            {/* <div className="sidebar-header">Bộ lọc tìm kiếm</div> */}
        </div>
    )
}
export default Sidebar;