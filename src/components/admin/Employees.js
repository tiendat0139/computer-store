import axios from "axios";
import React, { useEffect, useState } from "react";

const Employees = () => {
    const [list, setList] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://shop.bn2002.com/employees?size=20&page=1').then(res => {
            if(res.data.status === true){
                setList(res.data.data)
            }
            setLoading(false)
        })
    },[])
    if(loading){
        return(
            <div>Loading....</div>
        )
    }
    return (
        <div>
            <h2 className="mt-4 text-center">List of employee</h2>
            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Điện thoại</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Chức vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((item, idx) => (
                                <tr>
                                <th scope="row">{idx + 1}</th>
                                <td>{item.fullname}</td>
                                <td>{item.email}</td>
                                <td>{item.phone_number}</td>
                                <td>{item.gender}</td>
                                <td>{item.role}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Employees