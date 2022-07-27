import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [success, setSuccess] = useState();
    const [pending, setPending] = useState();
    const [customers, setCustomers] = useState();
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get('/orders/total?status=success').then(res => {
            if(res.data.status === true){
                setSuccess(res.data.data)
            }
        })
        axios.get('/orders/total?status=pending').then(res => {
            if(res.data.status === true){
                setPending(res.data.data)
            }
        })
        axios.get('/customers/total').then(res => {
            if(res.data.status === true){
                setCustomers(res.data.data)
            }
        })
        axios.get('/products/total').then(res => {
            if(res.data.status === true){
                setProduct(res.data.data)
            }
        })
    },[])
    return(
        
        <div class="container-fluid px-4">
            <h4 class="mt-4 mb-3">Dashboard</h4>
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Total Products</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <h3>{product}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-warning text-white mb-4">
                        <div className="card-body">Pending Orders</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <h3>{pending}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-success text-white mb-4">
                        <div className="card-body">Successful Orders</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <h3>{success}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-danger text-white mb-4">
                        <div className="card-body">Total customers</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <h3>{customers}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard