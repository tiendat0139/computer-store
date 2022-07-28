import React, { useEffect, useState } from "react";
import axios from 'axios'

const Order = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('/orders/list?status=pending').then(res => {
            if(res.data.status === true){
                setList(res.data.data)
                setLoading(false)
            }
        })
    })
    if(loading){
        return <div>Loading...</div>
    }
    return(
        <div className="orders px-3">
            <h3 className="text-center mt-4"> Orders Manager</h3>
            <table className="table table table-striped text-center align-middle">
                <thead>
                    <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Khách hàng</th>
                    <th scope="col">Điện thoại</th>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Tổng tiền</th>
                    <th scope="row">Ngày</th>
                    <th scope="col">Xử lý</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{item.fullname}</td>
                                <td>{item.phone_number}</td>
                                <td>
                                    <ul style={{listStyleType: 'decima'}}>
                                        {
                                            item.products.map((pr_item, pr_idx) => (
                                                <li className="row" style={{ marginBottom: '8px', paddingBottom: '4px'}}>
                                                    <div className="col-md-9">{pr_item.product_name} </div>
                                                    <div className="col-md-3"> x{pr_item.product_quantity}</div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </td>
                                <td>{Intl.NumberFormat('vi',{ style: 'currency', currency: 'VND' }).format(item.total_amount)}</td>
                                <td>{item.created_at}</td>
                                <td>
                                    <button className="btn btn-primary my-2">Accept</button><br></br>
                                    <button className="btn btn-danger">Cancel</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
        </div>
    )
}

export default Order