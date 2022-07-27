import React from "react";
import '../assets/user/css/Pagination.css'

const Pagination = (props) => {
    const pages = [Array.from(Array(props.totalPage - 2).keys())];

    const handleCick = (e) => {
        document.querySelector(".page-item.active").classList.remove('active')
        e.target.classList.add('active');
        props.setCurrentPage(e.target.getAttribute('value'))
    }    
    return (
        <div className="pagination">
            <div className="page-list">
                <div className="page-item active" value="1"  onClick={(e)=>handleCick(e)}>1</div>
                {
                    pages[0].map((item, idx) => (
                        <div className="page-item" key={idx} onClick={(e)=>handleCick(e)} value={item + 2}>{item + 2}</div>
                    ))
                }
            </div>
        </div>
    )
}
export default Pagination